import dotenv from 'dotenv';
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI); 
console.log('PAYPAL_CLIENT_ID:', process.env.PAYPAL_CLIENT_ID);
console.log('PAYPAL_CLIENT_SECRET:', process.env.PAYPAL_CLIENT_SECRET);
console.log('API_URL:', process.env.API_URL);

import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import paypal from 'paypal-rest-sdk';
import User from '../models/User.js';
import helmet from 'helmet';
import fetch from 'node-fetch';
import path from 'path'; 

const app = express();
app.use(express.static(path.join(__dirname, 'dist'))); 
app.use(express.json());
app.use(helmet());

async function getAccessToken() {
  const response = await fetch('https://api.sandbox.paypal.com/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${process.env.PAYPAL_CLIENT_ID}&client_secret=${process.env.PAYPAL_CLIENT_SECRET}`
  });

  const data = await response.json();
  return data.access_token;
}

app.post('/api/cancel-subscription', async (req, res) => {
  const { subscriptionId } = req.body;

  if (!subscriptionId) {
    return res.status(400).json({ message: 'El ID de la suscripción es requerido.' });
  }

  try {
    const accessToken = await getAccessToken(); 
    const response = await fetch(`https://api.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionId}/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}` 
      },
      body: JSON.stringify({ reason: 'Cancelación de la suscripción' }) 
    });

    if (!response.ok) {
      throw new Error('Error al cancelar la suscripción');
    }

    res.status(200).json({ message: 'Suscripción cancelada con éxito' });
  } catch (error) {
    console.error('Error cancelando la suscripción:', error);
    res.status(500).json({ message: 'Error al cancelar la suscripción' });
  }
});


app.get('/api/user', async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'El correo electrónico es requerido.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.status(200).json(user);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});


paypal.configure({
  mode: 'sandbox',
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET
});


app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'El correo electrónico es requerido.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (user.isSubscribed) {
      return res.status(400).json({ message: 'El usuario ya está suscrito.' });
    }

    user.isSubscribed = true;
    await user.save();

    res.status(200).json({ message: 'Usuario suscrito exitosamente' });
  } catch (error) {
    console.error('Error al suscribir al usuario:', error);
    res.status(500).json({ message: 'Error al suscribir al usuario' });
  }
});


app.post('/api/update-subscription', async (req, res) => {
  const { email, isSubscribed } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { isSubscribed }, 
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Estado de suscripción actualizado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la suscripción' });
  }
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error conectando a MongoDB:', err));


app.get('/api/test', (req, res) => {
  console.log('Se ha recibido una solicitud en /api/test');
  res.json({ message: 'API funcionando' });
});


app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un correo electrónico y una contraseña.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado con éxito' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Datos de inicio de sesión:', { email, password });

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un correo electrónico y una contraseña.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('isMatch:', isMatch); 

    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    } 
    res.cookie('user', { 
      email: user.email, 
      isSubscribed: user.isSubscribed 
    }, { 
      httpOnly: true, 
      secure: true, 
      sameSite: 'None' 
    });

    res.status(200).json({ message: 'Inicio de sesión exitoso', email: user.email, isSubscribed: user.isSubscribed });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});


app.post('/api/create-payment', (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ message: 'El monto es requerido.' });
  }

  const paymentJson = {
    intent: 'sale',
    payer: { payment_method: 'paypal' },
    transactions: [{ 
      amount: { total: amount, currency: 'MXN' }, 
      description: 'Suscripción Retro-Arcade' 
    }],
    redirect_urls: {
      return_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    }
  };

  paypal.payment.create(paymentJson, (error, payment) => {
    if (error) {
      console.error('Error creando el pago:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ id: payment.id });
    }
  });
});


app.post('/api/upgrade-admin', async (req, res) => {
  const email = '8hsabitgames@gmail.com';

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    user.isSubscribed = true;
    user.isAdmin = true;

    await user.save();

    res.status(200).json({ message: 'Usuario actualizado a admin con suscripción' });
  } catch (error) {
    console.error('Error actualizando el usuario:', error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
});


app.post('/api/execute-payment', (req, res) => {
  const { paymentId, payerId } = req.body;

  const executePaymentJson = { payer_id: payerId };

  paypal.payment.execute(paymentId, executePaymentJson, (error, payment) => {
    if (error) {
      console.error('Error ejecutando el pago:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ payment });
    }
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
