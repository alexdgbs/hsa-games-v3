(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{293:function(e,t,r){"use strict";(function(e){var n=r(12);r(46),r(20);t.a={data:function(){return{email:"",password:"",isSubmitting:!1,errorMessage:""}},methods:{handleLogin:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.isSubmitting=!0,t.errorMessage="",r.prev=2,r.next=5,fetch("".concat(e.env.API_URL,"/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,password:t.password})});case 5:return n=r.sent,r.next=8,n.json();case 8:if(data=r.sent,n.ok){r.next=11;break}throw new Error(data.message||"Error al iniciar sesión");case 11:document.cookie="email=".concat(data.email,"; path=/;"),document.cookie="isSubscribed=".concat(data.isSubscribed,"; path=/;"),t.$router.push("/"),window.dispatchEvent(new Event("storage")),r.next=20;break;case 17:r.prev=17,r.t0=r.catch(2),t.errorMessage=r.t0.message||"Error de red. Inténtalo de nuevo.";case 20:return r.prev=20,t.isSubmitting=!1,r.finish(20);case 23:case"end":return r.stop()}}),r,null,[[2,17,20,23]])})))()}}}}).call(this,r(148))},309:function(e,t,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(86).default)("d1671e38",content,!0,{sourceMap:!1})},331:function(e,t,r){"use strict";r(309)},332:function(e,t,r){var n=r(85)((function(i){return i[1]}));n.push([e.i,"button[data-v-0e3e756e],input[data-v-0e3e756e]{transition:all .2s ease-in-out}input[data-v-0e3e756e]:focus{border-color:#3b82f6;outline:none}",""]),n.locals={},e.exports=n},363:function(e,t,r){"use strict";r.r(t);var n=r(293).a,o=(r(331),r(32)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"bg-white py-6 flex items-center justify-center"},[t("div",{staticClass:"w-full max-w-xs bg-white rounded-lg"},[t("div",{staticClass:"p-4 space-y-4 sm:p-4"},[t("h2",{staticClass:"text-lg font-bold leading-tight text-gray-900 text-left"},[e._v("Inicia sesión")]),e._v(" "),t("form",{staticClass:"space-y-2",on:{submit:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[t("div",[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"email"}},[e._v("Correo electrónico")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"mt-1 block w-full px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50",attrs:{type:"email",id:"email",placeholder:"8hsabitgames@gmail.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),t("div",[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"password"}},[e._v("Contraseña")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"mt-1 block w-full px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50",attrs:{type:"password",id:"password",placeholder:"********",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),t("button",{staticClass:"w-full bg-slate-100 text-black font-medium rounded-lg text-sm px-3 py-2 hover:bg-slate-200",attrs:{type:"submit",disabled:e.isSubmitting}},[e._v("\n          Continuar\n        ")]),e._v(" "),e.errorMessage?t("p",{staticClass:"mt-2 text-red-600 text-center"},[e._v(e._s(e.errorMessage))]):e._e(),e._v(" "),t("p",{staticClass:"text-xs text-gray-500 text-center"},[e._v("\n          ¿No tienes una cuenta? "),t("nuxt-link",{staticClass:"text-sky-800 hover:underline",attrs:{to:"/register"}},[e._v("Crea una cuenta")])],1)])])])])}),[],!1,null,"0e3e756e",null);t.default=component.exports}}]);