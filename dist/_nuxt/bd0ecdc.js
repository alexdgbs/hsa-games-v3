(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{307:function(t,n,e){var content=e(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(86).default)("1d74cbde",content,!0,{sourceMap:!1})},337:function(t,n,e){"use strict";e(307)},338:function(t,n,e){var o=e(85)((function(i){return i[1]}));o.push([t.i,".container[data-v-46bfa3f8]{max-width:600px}",""]),o.locals={},t.exports=o},358:function(t,n,e){"use strict";e.r(n);e(47);var o={mounted:function(){var t=this,script=document.createElement("script");script.src="https://www.paypal.com/sdk/js?client-id=AXQeb763-UfMzlLsheOGAQdXyM-xzZ4MPxXXZAaZ44MQT-7bWdbDuiRxl6-gwxuCgXf6Jnc0LKSdL1vk&currency=MXN",script.onload=function(){t.initializePayPalButton()},document.body.appendChild(script)},methods:{initializePayPalButton:function(){window.paypal?window.paypal.Buttons({createOrder:function(data,t){return t.order.create({purchase_units:[{amount:{value:"49.00"}}]})},onApprove:function(data,t){return t.order.capture().then((function(details){alert("Transacción completada por "+details.payer.name.given_name)}))},onError:function(t){console.error("Error en el proceso de pago:",t),alert("Hubo un problema procesando tu pago. Por favor, inténtalo de nuevo más tarde.")}}).render("#paypal-button-container"):console.error("PayPal SDK no está cargado.")}}},r=(e(337),e(32)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"container mx-auto py-8"},[n("h2",{staticClass:"text-2xl font-bold mb-6"},[t._v("Suscribirse")]),t._v(" "),n("div",{attrs:{id:"paypal-button-container"}})])}],!1,null,"46bfa3f8",null);n.default=component.exports}}]);