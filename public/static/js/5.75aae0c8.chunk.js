(this.webpackJsonpmmmcrm=this.webpackJsonpmmmcrm||[]).push([[5],{406:function(t,e,r){},407:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r(406);var n=r(2),a=function(t){var e=t.children;return Object(n.jsx)("div",{className:"navslide navwrap",id:"app_content_toolbar",children:Object(n.jsx)("div",{className:"ui menu icon borderless","data-color":"inverted white",style:{height:40},children:e})})}},408:function(t,e,r){"use strict";var n=r(11),a=r.n(n),c=r(21),u=r(44),s=r(0),o=r(412),i=r(24),p=r(112);e.a=function(t){var e=t.url,r=void 0===e?null:e,n=t.params,l=void 0===n?{}:n,f=t.take,b=void 0===f?20:f,v=Object(s.useState)({take:b,skip:0}),h=Object(u.a)(v,2),j=h[0],m=h[1],x=Object(s.useState)(function(){var t="".concat("http://objetosbim.sencico.gob.pe/api","/").concat(r),e=!1;return Object.keys(l).length>0&&(e=!0,Object.keys(l).forEach((function(e,r){t+=0===r?"?".concat(e,"=").concat(l[e],"&"):"".concat(e,"=").concat(l[e],"&")}))),e||(t+="?"),t}()),O=Object(u.a)(x,2),w=O[0],k=O[1],g=Object(s.useState)(),y=Object(u.a)(g,2),S=y[0],N=y[1],P=function(t){N(t)},C=Object(s.useRef)(""),E=Object(s.useRef)(""),D=Object(s.useRef)(null),I=function(){var t=Object(c.a)(a.a.mark((function t(){var e,r,n,c,u,s=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=s.length>0&&void 0!==s[0]&&s[0],r=s.length>1&&void 0!==s[1]?s[1]:null,Object(o.d)(j)!==C.current||e){t.next=4;break}return t.abrupt("return");case 4:return E.current=Object(o.d)(j),t.prev=5,n="",(r||D.current)&&(r!==D.current&&r&&(D.current=r),n=d(D.current)),t.next=10,Object(p.a)({url:w+E.current+n,method:"GET"});case 10:c=t.sent,u=c.data,C.current=E.current,E.current="",Object(o.d)(j)===C.current?P.call(void 0,{data:u.body.data,total:u.body.count}):I(),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),console.log(t.t0),i.a.error(t.t0);case 21:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){I()}),[j]),{dataResul:S,dataState:j,handleCustomSearch:function(t){if("Enter"===t.key){var e=t.target.value;I(!0,{search:e})}},setBaseUrl:k,setDataState:m,baseUrl:w,dataStateChange:function(t){m(t.dataState)},requestDataIfNeeded:I}};var d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Object.keys(t).length)return"";var e="";return Object.keys(t).forEach((function(r){e+="&$".concat(r,"=").concat(t[r],"&")})),e}},409:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"b",(function(){return b})),r.d(e,"e",(function(){return v})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return j}));var n=r(11),a=r.n(n),c=r(21),u=r(13),s=r(31),o=r(26),i=r(24),p=r(410),d=function(t){return new Promise(function(){var e=Object(c.a)(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t||r(null),e.next=4,s.a.get("/category/".concat(t));case 4:(n=e.sent).data.status===o.a?r(n.data.body):r(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r(null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},l=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("/category",e);case 3:if((r=t.sent).data.status!==o.a){t.next=9;break}return u.Notify.success("Se creo correctamente."),t.abrupt("return",!0);case 9:return r.data.msg?i.a.error(null,r.data.msg):i.a.error("Opps... hubo un error inesperador."),t.abrupt("return",!1);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e,r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.put("/category/".concat(e),r);case 3:if((n=t.sent).data.status!==o.a){t.next=9;break}return u.Notify.success("Se edit\xf3 correctamente."),t.abrupt("return",!0);case 9:return n.data.msg?i.a.error(null,n.data.msg):i.a.error("Opps... hubo un error inesperador."),t.abrupt("return",!1);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,r){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.delete("/category/".concat(e));case 3:if(t.sent.data.status!==o.a){t.next=7;break}return i.a.success(null,"Se elimino correctamente."),t.abrupt("return",!0);case 7:return t.abrupt("return",!1);case 10:return t.prev=10,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/category?level=1&parent=".concat(e));case 3:if((r=t.sent).data.status!==o.a){t.next=8;break}return t.abrupt("return",r.data.body);case 8:return t.abrupt("return",!1);case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/category");case 3:(r=t.sent).data.status===o.a?e(r.data.body.data):e(null),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e(null);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([Object(p.d)(),d(e)]);case 3:return r=t.sent,t.abrupt("return",{secciones:r[0]?r[0]:[],categoria:r[1]?r[1]:null});case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),i.a.error(null,"Opps... hubo un error inesperado"),t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},410:function(t,e,r){"use strict";r.d(e,"c",(function(){return p})),r.d(e,"a",(function(){return d})),r.d(e,"e",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"d",(function(){return b}));var n=r(11),a=r.n(n),c=r(21),u=r(13),s=r(31),o=r(26),i=r(24),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/section/".concat(e));case 3:if((r=t.sent).data.status!==o.a){t.next=8;break}return t.abrupt("return",r.data.body);case 8:return t.abrupt("return",null);case 9:t.next=14;break;case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("/section",e);case 3:if((r=t.sent).data.status!==o.a){t.next=9;break}return u.Notify.success("Se creo correctamente."),t.abrupt("return",!0);case 9:return r.data.msg?i.a.error(null,r.data.msg):i.a.error("Opps... hubo un error inesperador."),t.abrupt("return",!1);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.put("/section/".concat(e),r);case 3:if((n=t.sent).data.status!==o.a){t.next=9;break}return u.Notify.success("Se edit\xf3 correctamente."),t.abrupt("return",!0);case 9:return n.data.msg?i.a.error(null,n.data.msg):i.a.error("Opps... hubo un error inesperador."),t.abrupt("return",!1);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.delete("/section/".concat(e));case 3:if(t.sent.data.status!==o.a){t.next=7;break}return i.a.success(null,"Se elimino correctamente."),t.abrupt("return",!0);case 7:return t.abrupt("return",!1);case 10:return t.prev=10,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/sections");case 3:(r=t.sent).data.status===o.a?e(r.data.body.data):e(!1),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e(!1);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},411:function(t,e,r){"use strict";var n=r(44),a=r(0);e.a=function(){var t=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),e=Object(n.a)(t,1)[0];return Object(a.useEffect)((function(){function t(){var t=document.querySelector(".k-widget.k-grid.grid"),e=window.innerHeight-90;t&&(t.style.height="".concat(e,"px"))}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t())}}),[]),{width:e.width,height:e.height}}},413:function(t,e,r){"use strict";r.d(e,"c",(function(){return p})),r.d(e,"a",(function(){return d})),r.d(e,"e",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"d",(function(){return b}));var n=r(11),a=r.n(n),c=r(21),u=r(13),s=r(31),o=r(26),i=r(24),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/brand/".concat(e));case 3:if((r=t.sent).data.status!==o.a){t.next=8;break}return t.abrupt("return",r.data.body);case 8:return t.abrupt("return",null);case 9:t.next=14;break;case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("/brand",e);case 3:if((r=t.sent).data.status!==o.a){t.next=9;break}return u.Notify.success("Se creo correctamente."),t.abrupt("return",!0);case 9:return r.data.msg?i.a.error(null,r.data.msg):i.a.error("Opps... hubo un error inesperador."),t.abrupt("return",!1);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.put("/brand/".concat(e),r);case 3:if((n=t.sent).data.status!==o.a){t.next=9;break}return u.Notify.success("Se edit\xf3 correctamente."),t.abrupt("return",!0);case 9:return n.data.msg?i.a.error(null,n.data.msg):i.a.error("Opps... hubo un error inesperador."),t.abrupt("return",!1);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.delete("/brand/".concat(e));case 3:if(t.sent.data.status!==o.a){t.next=7;break}return i.a.success(null,"Se elimino correctamente."),t.abrupt("return",!0);case 7:return t.abrupt("return",!1);case 10:return t.prev=10,t.t0=t.catch(0),i.a.error(t.t0),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/brand");case 3:(r=t.sent).data.status===o.a?e(r.data.body.data):e(!1),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e(!1);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},415:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return j})),r.d(e,"b",(function(){return m}));var n=r(11),a=r.n(n),c=r(21),u=r(13),s=r(31),o=r(26),i=r(112),p=r(24),d=r(409),l=r(413),f=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.a)({url:"/product",body:e,method:"POST"});case 3:if((r=t.sent).data.status!==o.a){t.next=9;break}return u.Notify.success("Se creo nuevo producto correctamente."),t.abrupt("return",!0);case 9:return r.data.message?p.a.error(null,r.data.message):p.a.error("Opps... hubo un error inesperador."),t.abrupt("return",!1);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),p.a.error(t.t0),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),b=function(t){return new Promise(function(){var e=Object(c.a)(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t||r(null),e.next=4,s.a.get("/product/".concat(t));case 4:(n=e.sent).data.status===o.a?r(n.data.body):r(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r(null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},v=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([Object(d.c)(),Object(l.d)(),b(e)]);case 3:return r=t.sent,t.abrupt("return",{producto:r[2]?r[2]:{},marcas:r[1],categorias:r[0]});case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),p.a.error(null,"Opps... hubo un error inesperado"),t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){return new Promise(function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/product");case 3:(r=t.sent).data.status===o.a?e(r.data.body):(p.a.error(null,r.data.message),e([])),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),p.a.error(t.t0),e([]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())},j=function(){var t=Object(c.a)(a.a.mark((function t(e,r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.a)({url:"/product/".concat(e),body:r,method:"POST"});case 3:if((n=t.sent).data.status!==o.a){t.next=9;break}return u.Notify.success("Se edit\xf3 el plato correctamente."),t.abrupt("return",!0);case 9:n.data.message?p.a.error(null,n.data.message):p.a.error("Opps... hubo un error inesperador.");case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),p.a.error(t.t0),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.delete("/product/".concat(e));case 3:if((r=t.sent).data.status!==o.a){t.next=7;break}return u.Notify.success("Se elimino el producto correctamente."),t.abrupt("return",!0);case 7:return r.data.message?p.a.error(null,r.data.message):p.a.error("Opps... hubo un error inesperador."),t.abrupt("return",!1);case 11:t.prev=11,t.t0=t.catch(0),p.a.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},435:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return O}));var n=r(12),a=r(11),c=r.n(a),u=r(21),s=r(407),o=r(16),i=r(61),p=r(32),d=r(414),l=r(411),f=r(408),b=r(399),v=r(232),h=r(124),j=r(415),m=r(13),x=r(2),O=function(){Object(l.a)();var t=Object(o.g)(),e=Object(f.a)({url:"product"}),r=e.dataResul,a=e.dataState,O=e.dataStateChange,w=e.requestDataIfNeeded,k=function(){var t=Object(u.a)(c.a.mark((function t(e){var r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.id,n=e.name,m.Confirm.show("PRODUCTOS","\xbfDesea eliminar al producto ".concat(n,"?"),"Aceptar","Cancelar",Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m.Loading.pulse(),t.next=3,Object(j.b)(r);case 3:t.sent?w(!0):m.Loading.remove();case 5:case"end":return t.stop()}}),t)}))));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"Productos",children:[Object(x.jsxs)(s.a,{children:[Object(x.jsx)("div",{class:"item ui colhidden",children:Object(x.jsx)("button",{class:"ui icon button",onClick:function(){return w(!0)},children:Object(x.jsx)("i",{class:"sync icon"})})}),Object(x.jsx)("div",{className:"item ui colhidden",children:Object(x.jsx)("div",{className:"ui big breadcrumb",children:Object(x.jsx)("h2",{className:"section active",children:"PRODUCTOS"})})}),Object(x.jsx)("div",{className:"item ui colhidden",children:Object(x.jsxs)(i.b,{to:"/productos/ficha",className:"ui button",children:[Object(x.jsx)(p.h,{})," Nuevo producto"]})})]}),Object(x.jsx)("div",{className:"Productos__body app__container_body",children:Object(x.jsx)("div",{className:"Productos__tabla",children:Object(x.jsxs)(d.a,Object(n.a)(Object(n.a)(Object(n.a)({sortable:!0,pageable:!0},a),r),{},{onDataStateChange:O,className:"grid",children:[Object(x.jsx)(d.b,{width:100,cell:function(e){var r=e.dataItem;return Object(x.jsx)("td",{style:{overflow:"inherit"},children:Object(x.jsx)(b.a,{icon:"ellipsis vertical",floating:!0,button:!0,className:"icon circular compact ui left pointing",children:Object(x.jsxs)(b.a.Menu,{children:[Object(x.jsx)(b.a.Item,{icon:"edit",className:"blue",text:"Editar",onClick:function(){return e=r.id,void t.push("/productos/ficha/".concat(e));var e}}),Object(x.jsx)(b.a.Item,{icon:"delete",className:"red",text:"Eliminar",onClick:function(){return k(Object(n.a)({},r))}})]})})})}}),Object(x.jsx)(d.b,{width:70,title:"ID",field:"id"}),Object(x.jsx)(d.b,{title:"IMAGEN",width:250,cell:function(t){var e=t.dataItem;return Object(x.jsx)("td",{children:e.images.length>0?Object(x.jsx)(v.a,{width:60,src:"".concat("http://objetosbim.sencico.gob.pe/public","/").concat(e.images[0].path)}):Object(x.jsx)(v.a,{width:60,src:""})})}}),Object(x.jsx)(d.b,{title:"PRODUCTO",field:"name"}),Object(x.jsx)(d.b,{title:"CATEGOR\xcdA",cell:function(t){var e=t.dataItem;return Object(x.jsx)("td",{children:Object(x.jsx)(h.a,{color:"purple",size:"tiny",children:e.categories.name})})}})]}))})})]})}}}]);
//# sourceMappingURL=5.75aae0c8.chunk.js.map