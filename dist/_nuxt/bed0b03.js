(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{299:function(e,t,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(86).default)("4585d43e",content,!0,{sourceMap:!1})},321:function(e,t,r){"use strict";r(299)},322:function(e,t,r){var n=r(85)((function(i){return i[1]}));n.push([e.i,"button[data-v-3c462075],input[data-v-3c462075]{transition:all .2s ease-in-out}input[data-v-3c462075]:focus{border-color:#3b82f6;outline:none}",""]),n.locals={},e.exports=n},346:function(e,t,r){"use strict";r.r(t);var n=r(12),o=(r(46),r(20),{data:function(){return{email:"",password:"",isSubmitting:!1,errorMessage:""}},methods:{handleLogin:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isSubmitting=!0,e.errorMessage="",console.log("API_URL:","https://hsa-games.com/api"),t.prev=3,t.next=6,fetch("".concat("https://hsa-games.com/api","/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});case 6:return r=t.sent,t.next=9,r.json();case 9:if(data=t.sent,console.log("Response data:",data),r.ok){t.next=13;break}throw new Error(data.message||"Error al iniciar sesión");case 13:document.cookie="email=".concat(data.email,"; path=/;"),document.cookie="isSubscribed=".concat(data.isSubscribed,"; path=/;"),e.$router.push("/"),window.dispatchEvent(new Event("storage")),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(3),e.errorMessage=t.t0.message||"Error de red. Inténtalo de nuevo.";case 22:return t.prev=22,e.isSubmitting=!1,t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[3,19,22,25]])})))()}}}),l=(r(321),r(32)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"bg-white py-6 flex items-center justify-center"},[t("div",{staticClass:"w-full max-w-xs bg-white rounded-lg"},[t("div",{staticClass:"p-4 space-y-4 sm:p-4"},[t("h2",{staticClass:"text-lg font-bold leading-tight text-gray-900 text-left"},[e._v("Inicia sesión")]),e._v(" "),t("form",{staticClass:"space-y-2",on:{submit:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[t("div",[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"email"}},[e._v("Correo electrónico")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"mt-1 block w-full px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50",attrs:{type:"email",id:"email",placeholder:"8hsabitgames@gmail.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),t("div",[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"password"}},[e._v("Contraseña")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"mt-1 block w-full px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50",attrs:{type:"password",id:"password",placeholder:"********",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),t("button",{staticClass:"w-full bg-slate-100 text-black font-medium rounded-lg text-sm px-3 py-2 hover:bg-slate-200",attrs:{type:"submit",disabled:e.isSubmitting}},[e._v("\n          Continuar\n        ")]),e._v(" "),e.errorMessage?t("p",{staticClass:"mt-2 text-red-600 text-center"},[e._v(e._s(e.errorMessage))]):e._e(),e._v(" "),t("p",{staticClass:"text-xs text-gray-500 text-center"},[e._v("\n          ¿No tienes una cuenta? "),t("nuxt-link",{staticClass:"text-sky-800 hover:underline",attrs:{to:"/register"}},[e._v("Crea una cuenta")])],1)])])])])}),[],!1,null,"3c462075",null);t.default=component.exports}}]);