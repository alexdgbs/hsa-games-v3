(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{297:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(86).default)("63a1778d",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n(297)},318:function(t,e,n){var o=n(85)((function(i){return i[1]}));o.push([t.i,".container[data-v-c4dd614c]{animation:fadeIn-c4dd614c .5s ease-in;max-width:1200px}.game-card[data-v-c4dd614c]{padding:.5rem;transition:background-color .3s,box-shadow .3s}.game-card[data-v-c4dd614c]:hover{background-color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.3)}.game-image[data-v-c4dd614c]{transition:transform .3s}@keyframes fadeIn-c4dd614c{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fade-enter-active[data-v-c4dd614c],.fade-leave-active[data-v-c4dd614c]{transition:opacity .5s,transform .5s}.fade-enter[data-v-c4dd614c],.fade-leave-to[data-v-c4dd614c]{opacity:0;transform:translateY(-20px)}",""]),o.locals={},t.exports=o},343:function(t,e,n){"use strict";n.r(e);n(37),n(66),n(47);var o=n(12),r=(n(46),n(87),n(205),n(20),n(113),n(204),{data:function(){return{isVisible:!1,isAdmin:!1,isSubscribed:!1,games:[{id:1,name:"Eternal Darkness Sanitys Requiem",cover:"/img/eternal-darkness-sanitys-requiem.webp",downloadLink:"https://sto.romsfast.com/GameCube-RVZ/Eternal%20Darkness%20-%20Sanitys%20Requiem%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZYl9Y",description:" Acción"},{id:2,name:"Skies of Arcadia Legends",cover:"/img/skies-of-arcadia-legends.webp",downloadLink:"https://sto.romsfast.com/GameCube-RVZ/Skies%20of%20Arcadia%20Legends%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZZFhT",description:"RPG"},{id:3,name:"Billy Hatcher and the Giant Egg",cover:"/img/billy-hatcher-and-the-giant-egg.webp",downloadLink:"https://sto.romsfast.com/GameCube-RVZ/Billy%20Hatcher%20and%20the%20Giant%20Egg%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZZF1W",description:"Plataforma"},{id:4,name:"Viewtiful Joe",cover:"/img/viewtiful-joe.webp",downloadLink:"https://sto.romsfast.com/GameCube-RVZ/Viewtiful%20Joe%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZZF9Z",description:" Plataforma"},{id:5,name:"Splinter Cell",cover:"/img/splintercellnintendo.jpg",downloadLink:"https://sto.romsfast.com/GameCube-RVZ/Tom%20Clancys%20Splinter%20Cell%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZZVxX",description:"Acción/Estrategia"},{id:6,name:"Mario Party 4",cover:"/img/Mario-Party-4.jpg",downloadLink:"https://sto.romsfast.com/GameCube-RVZ/Mario%20Party%204%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZZl1R",description:"Multijugador"},{id:7,name:"2002 FIFA World Cup",cover:"/img/fifa2002.jpg",downloadLink:"https://sto.romsfast.com/GameCube-RVZ/2002%20FIFA%20World%20Cup%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZZlxW",description:"Deportes"},{id:8,name:"Super Mario Strikers",cover:"/img/Super_Mario_Strikers_cover.png",downloadLink:"https://sto.romsfast.com/GameCube-RVZ/Super%20Mario%20Strikers%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZZlFY",description:"Deportes"}]}},mounted:function(){this.isVisible=!0;var t=document.cookie.split(";").find((function(t){return t.trim().startsWith("email=")}));if(t){var e=t.split("=")[1];this.isAdmin="8hsabitgames@gmail.com"===e,this.getUserInfo(e)}},methods:{getUserInfo:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("http://localhost:3001","/api/user?email=").concat(t));case 3:if((o=n.sent).ok){n.next=6;break}throw new Error("Error en la respuesta de la API");case 6:return n.next=8,o.json();case 8:r=n.sent,e.isSubscribed=r.isSubscribed,n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.error("Error al obtener la información del usuario:",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))()},downloadGame:function(t){window.location.href=t.downloadLink},beforeEnter:function(t){t.style.opacity=0,t.style.transform="translateY(-20px)"},enter:function(t,e){t.offsetHeight,t.style.transition="opacity 0.5s, transform 0.5s",t.style.opacity=1,t.style.transform="translateY(0)",e()}}}),c=(n(317),n(32)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto p-4 fadeIn"},[e("transition",{attrs:{name:"fade"},on:{"before-enter":t.beforeEnter,enter:t.enter}},[t.isVisible?e("h1",{staticClass:"text-xl font-bold mb-6"},[t._v("Catálogo de Juegos GameCube")]):t._e()]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"},t._l(t.games,(function(n){return e("div",{key:n.id,staticClass:"bg-white rounded-lg p-1 shadow hover:shadow-lg transition transform game-card"},[e("img",{staticClass:"game-image w-full h-24 object-contain rounded-lg mb-1",attrs:{src:n.cover,alt:"Carátula del juego"}}),t._v(" "),e("h2",{staticClass:"text-xs font-bold"},[t._v(t._s(n.name))]),t._v(" "),e("p",{staticClass:"text-xs"},[t._v(t._s(n.description))]),t._v(" "),t.isSubscribed||t.isAdmin?e("button",{staticClass:"mt-1 bg-slate-50 text-sky-800 text-xs",on:{click:function(e){return t.downloadGame(n)}}},[t._v("\n        Descargar\n      ")]):e("p",{staticClass:"mt-1 text-red-500 text-xs"},[t._v("Suscríbete para descargar")])])})),0)],1)}),[],!1,null,"c4dd614c",null);e.default=component.exports}}]);