(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{301:function(t,e,o){var content=o(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(86).default)("8e450ac6",content,!0,{sourceMap:!1})},325:function(t,e,o){"use strict";o(301)},326:function(t,e,o){var r=o(85)((function(i){return i[1]}));r.push([t.i,".container[data-v-220b77fa]{animation:fadeIn-220b77fa .5s ease-in;max-width:1200px}.game-card[data-v-220b77fa]{padding:.5rem;transition:background-color .3s,box-shadow .3s}.game-card[data-v-220b77fa]:hover{background-color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.3)}.game-image[data-v-220b77fa]{transition:transform .3s}@keyframes fadeIn-220b77fa{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fade-enter-active[data-v-220b77fa],.fade-leave-active[data-v-220b77fa]{transition:opacity .5s,transform .5s}.fade-enter[data-v-220b77fa],.fade-leave-to[data-v-220b77fa]{opacity:0;transform:translateY(-20px)}",""]),r.locals={},t.exports=r},350:function(t,e,o){"use strict";o.r(e);o(37),o(66),o(47);var r=o(12),n=(o(46),o(87),o(205),o(20),o(113),o(204),{data:function(){return{isVisible:!1,isAdmin:!1,isSubscribed:!1,games:[{id:1,name:"True Crime Streets of LA",cover:"/img/true-crime-streets-of-la.jpg",downloadLink:"https://sto.romsfast.com/PS2-Redump/True%20Crime%20-%20Streets%20of%20LA%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZZ19T",description:"Acción"},{id:2,name:"Gun",cover:"/img/Gun.jpg",downloadLink:"https://sto.romsfast.com/PS2-Redump/Gun%20(USA).zip?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFF0Vg%3D%3D",description:"Acción"},{id:3,name:"Black",cover:"/img/Black.jpg",downloadLink:"https://sto.romsfast.com/PS2-Redump/Black%20(USA).zip?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFFxVQ%3D%3D",description:"Shooter"},{id:4,name:"The Warriors",cover:"/img/Warriors,+The+(USA)+(En,Fr,De,Es,It)-image.jpg",downloadLink:"https://sto.romsfast.com/PS2-CHD/Warriors%20The%20(USA)%20(EnFrDeEsIt).chd?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFFzUg%3D%3D",description:"Acción"},{id:5,name:"OutRun 2006: Coast 2 Coast",cover:"/img/outrun-2006-coast-2-coast.jpg",downloadLink:"https://sto.romsfast.com/PS2-Redump/OutRun%202006%20-%20Coast%202%20Coast%20(USA)%20(EnFrEs).zip?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFBxUA%3D%3D",description:"Carreras"},{id:6,name:"Burnout 3: Takedown",cover:"/img/burnout-3-takedown.jpg",downloadLink:"https://sto.romsfast.com/PS2-Redump/Burnout%203%20-%20Takedown%20(USA).zip?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFB8UQ%3D%3D",description:"Carreras"},{id:7,name:"Mark of Kri",cover:"/img/the-mark-of-kri.jpg",downloadLink:"https://sto.romsfast.com/PS2-CHD/Mark%20of%20Kri%20The%20(USA).chd?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfVlwWQ%3D%3D",description:"Acción"},{id:8,name:"Urban Reign",cover:"/img/urban-reign.jpg",downloadLink:"https://sto.romsfast.com/PS2-CHD/Urban%20Reign%20(USA).chd?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfVlwVA%3D%3D",description:"Lucha"}]}},mounted:function(){this.isVisible=!0;var t=document.cookie.split(";").find((function(t){return t.trim().startsWith("email=")}));if(t){var e=t.split("=")[1];this.isAdmin="8hsabitgames@gmail.com"===e,this.getUserInfo(e)}},methods:{getUserInfo:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("".concat("http://localhost:3001","/api/user?email=").concat(t));case 3:if((r=o.sent).ok){o.next=6;break}throw new Error("Error en la respuesta de la API");case 6:return o.next=8,r.json();case 8:n=o.sent,e.isSubscribed=n.isSubscribed,o.next=15;break;case 12:o.prev=12,o.t0=o.catch(0),console.error("Error al obtener la información del usuario:",o.t0);case 15:case"end":return o.stop()}}),o,null,[[0,12]])})))()},downloadGame:function(t){window.location.href=t.downloadLink},beforeEnter:function(t){t.style.opacity=0,t.style.transform="translateY(-20px)"},enter:function(t,e){t.offsetHeight,t.style.transition="opacity 0.5s, transform 0.5s",t.style.opacity=1,t.style.transform="translateY(0)",e()}}}),c=(o(325),o(32)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto p-4 fadeIn"},[e("transition",{attrs:{name:"fade"},on:{"before-enter":t.beforeEnter,enter:t.enter}},[t.isVisible?e("h1",{staticClass:"text-xl font-bold mb-6"},[t._v("Catálogo de Juegos PS2")]):t._e()]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"},t._l(t.games,(function(o){return e("div",{key:o.id,staticClass:"bg-white rounded-lg p-1 shadow hover:shadow-lg transition transform game-card"},[e("img",{staticClass:"game-image w-full h-24 object-contain rounded-lg mb-1",attrs:{src:o.cover,alt:"Carátula del juego"}}),t._v(" "),e("h2",{staticClass:"text-xs font-bold"},[t._v(t._s(o.name))]),t._v(" "),e("p",{staticClass:"text-xs"},[t._v(t._s(o.description))]),t._v(" "),t.isSubscribed||t.isAdmin?e("button",{staticClass:"mt-1 bg-slate-50 text-sky-800 text-xs",on:{click:function(e){return t.downloadGame(o)}}},[t._v("\n        Descargar\n      ")]):e("p",{staticClass:"mt-1 text-red-500 text-xs"},[t._v("Suscríbete para descargar")])])})),0)],1)}),[],!1,null,"220b77fa",null);e.default=component.exports}}]);