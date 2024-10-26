(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{292:function(e,t,r){"use strict";(function(e){var o=r(12);r(46),r(87),r(207),r(20),r(114),r(206);t.a={data:function(){return{isVisible:!1,isAdmin:!1,isSubscribed:!1,games:[{id:1,name:"Mother 3 (Fan Translation)",cover:"/img/mother-3-eng-translation-1-1.webp",downloadLink:"http://example.com/download/zelda",description:"Aventura/RPG"},{id:2,name:"Golden Sun - The Lost Age",cover:"/img/golden-sun-the-lost-age.webp",downloadLink:"https://drive.google.com/file/d/1D0z1EjAm9XbAe6VwUIgQh2oIyYUm9zwD/view?usp=sharing",description:"Plataformas"},{id:3,name:"Street Fighter Alpha 3 (Fan Translation)",cover:"/img/streetfalpha.jpeg",downloadLink:"https://drive.google.com/file/d/1hqOXqM-vbp4s-yUzHgEwwqAvTH0Gay9k/view?usp=sharing",description:"Lucha"},{id:4,name:"Dragon Ball Z: Taiketsu",cover:"/img/gba-dbztaiketsu.jpg",downloadLink:"https://drive.google.com/file/d/1r1Mip0I7Zg2NKmxbV5FJ8PsQL-jgB5dk/view?usp=sharing",description:"Lucha"},{id:5,name:"Doom",cover:"/img/gba-doom.jpg",downloadLink:"https://drive.google.com/file/d/16Q6utfA6-MkTvNzdqbYZq_V03k3HZEm9/view?usp=sharing",description:"Shooter"},{id:6,name:"Super Mario Advance 2",cover:"/img/gba-supermario2.jpg",downloadLink:"https://drive.google.com/file/d/1oMW_NEO5VFrzzmAeXYMHUvNEa88t5qeU/view?usp=sharing",description:"Plataformas"},{id:7,name:"Mario Kart: Super Circuit",cover:"/img/gba-mariokart.jpg",downloadLink:"https://drive.google.com/file/d/1fkdwL4IDXI0rExHTWCrTmMS_ZJdlm3vm/view?usp=sharing",description:"Carreras"},{id:8,name:"Metroid: Fusion",cover:"/img/gba-metroidfusion.jpg",downloadLink:"https://drive.google.com/file/d/1sIxtP5RiYtFDsZUeEaitz1SJY5rh0HHs/view?usp=drive_link",description:"Acción/Aventura"}]}},mounted:function(){this.isVisible=!0;var e=document.cookie.split(";").find((function(e){return e.trim().startsWith("email=")}));if(e){var t=e.split("=")[1];this.isAdmin="8hsabitgames@gmail.com"===t,this.getUserInfo(t)}},methods:{getUserInfo:function(t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var n,d;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("".concat(e.env.API_URL,"/api/user?email=").concat(t));case 3:if((n=o.sent).ok){o.next=6;break}throw new Error("Error en la respuesta de la API");case 6:return o.next=8,n.json();case 8:d=o.sent,r.isSubscribed=d.isSubscribed,o.next=15;break;case 12:o.prev=12,o.t0=o.catch(0),console.error("Error al obtener la información del usuario:",o.t0);case 15:case"end":return o.stop()}}),o,null,[[0,12]])})))()},downloadGame:function(e){window.location.href=e.downloadLink},beforeEnter:function(e){e.style.opacity=0,e.style.transform="translateY(-20px)"},enter:function(e,t){e.offsetHeight,e.style.transition="opacity 0.5s, transform 0.5s",e.style.opacity=1,e.style.transform="translateY(0)",t()}}}}).call(this,r(148))},308:function(e,t,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(86).default)("3f51da64",content,!0,{sourceMap:!1})},329:function(e,t,r){"use strict";r(308)},330:function(e,t,r){var o=r(85)((function(i){return i[1]}));o.push([e.i,".container[data-v-2b0f136b]{animation:fadeIn-2b0f136b .5s ease-in;max-width:1200px}.game-card[data-v-2b0f136b]{padding:.5rem;transition:background-color .3s,box-shadow .3s}.game-card[data-v-2b0f136b]:hover{background-color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.3)}.game-image[data-v-2b0f136b]{transition:transform .3s}@keyframes fadeIn-2b0f136b{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fade-enter-active[data-v-2b0f136b],.fade-leave-active[data-v-2b0f136b]{transition:opacity .5s,transform .5s}.fade-enter[data-v-2b0f136b],.fade-leave-to[data-v-2b0f136b]{opacity:0;transform:translateY(-20px)}",""]),o.locals={},e.exports=o},362:function(e,t,r){"use strict";r.r(t);r(37),r(66),r(47);var o=r(292).a,n=(r(329),r(32)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container mx-auto p-4 fadeIn"},[t("transition",{attrs:{name:"fade"},on:{"before-enter":e.beforeEnter,enter:e.enter}},[e.isVisible?t("h1",{staticClass:"text-xl font-bold mb-6"},[e._v("Catálogo de Juegos Gameboy")]):e._e()]),e._v(" "),t("div",{staticClass:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"},e._l(e.games,(function(r){return t("div",{key:r.id,staticClass:"bg-white rounded-lg p-1 shadow hover:shadow-lg transition transform game-card"},[t("img",{staticClass:"game-image w-full h-24 object-contain rounded-lg mb-1",attrs:{src:r.cover,alt:"Carátula del juego"}}),e._v(" "),t("h2",{staticClass:"text-xs font-bold"},[e._v(e._s(r.name))]),e._v(" "),t("p",{staticClass:"text-xs text-gray-600"},[e._v(e._s(r.description))]),e._v(" "),e.isSubscribed||e.isAdmin?t("button",{staticClass:"mt-1 bg-slate-50 text-sky-800 text-xs",on:{click:function(t){return e.downloadGame(r)}}},[e._v("\n        Descargar\n      ")]):t("p",{staticClass:"mt-1 text-red-500 text-xs"},[e._v("Suscríbete para descargar")])])})),0)],1)}),[],!1,null,"2b0f136b",null);t.default=component.exports}}]);