(this.webpackJsonpmmmcrm=this.webpackJsonpmmmcrm||[]).push([[7],{406:function(e,t,r){},407:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(406);var n=r(2),a=function(e){var t=e.children;return Object(n.jsx)("div",{className:"navslide navwrap",id:"app_content_toolbar",children:Object(n.jsx)("div",{className:"ui menu icon borderless","data-color":"inverted white",style:{height:40},children:t})})}},408:function(e,t,r){"use strict";var n=r(11),a=r.n(n),c=r(21),u=r(44),i=r(0),s=r(412),o=r(24),l=r(112);t.a=function(e){var t=e.url,r=void 0===t?null:t,n=e.params,b=void 0===n?{}:n,p=e.take,f=void 0===p?20:p,j=Object(i.useState)({take:f,skip:0}),h=Object(u.a)(j,2),v=h[0],m=h[1],O=Object(i.useState)(function(){var e="".concat("http://objetosbim.sencico.gob.pe/api","/").concat(r),t=!1;return Object.keys(b).length>0&&(t=!0,Object.keys(b).forEach((function(t,r){e+=0===r?"?".concat(t,"=").concat(b[t],"&"):"".concat(t,"=").concat(b[t],"&")}))),t||(e+="?"),e}()),x=Object(u.a)(O,2),g=x[0],w=x[1],k=Object(i.useState)(),S=Object(u.a)(k,2),y=S[0],C=S[1],N=function(e){C(e)},E=Object(i.useRef)(""),I=Object(i.useRef)(""),R=Object(i.useRef)(null),_=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,n,c,u,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]&&i[0],r=i.length>1&&void 0!==i[1]?i[1]:null,Object(s.d)(v)!==E.current||t){e.next=4;break}return e.abrupt("return");case 4:return I.current=Object(s.d)(v),e.prev=5,n="",(r||R.current)&&(r!==R.current&&r&&(R.current=r),n=d(R.current)),e.next=10,Object(l.a)({url:g+I.current+n,method:"GET"});case 10:c=e.sent,u=c.data,E.current=I.current,I.current="",Object(s.d)(v)===E.current?N.call(void 0,{data:u.body.data,total:u.body.count}):_(),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.log(e.t0),o.a.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){_()}),[v]),{dataResul:y,dataState:v,handleCustomSearch:function(e){if("Enter"===e.key){var t=e.target.value;_(!0,{search:t})}},setBaseUrl:w,setDataState:m,baseUrl:g,dataStateChange:function(e){m(e.dataState)},requestDataIfNeeded:_}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Object.keys(e).length)return"";var t="";return Object.keys(e).forEach((function(r){t+="&$".concat(r,"=").concat(e[r],"&")})),t}},409:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"f",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"e",(function(){return j})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return v}));var n=r(11),a=r.n(n),c=r(21),u=r(13),i=r(31),s=r(26),o=r(24),l=r(410),d=function(e){return new Promise(function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e||r(null),t.next=4,i.a.get("/category/".concat(e));case 4:(n=t.sent).data.status===s.a?r(n.data.body):r(null),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r(null);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())},b=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/category",t);case 3:if((r=e.sent).data.status!==s.a){e.next=9;break}return u.Notify.success("Se creo correctamente."),e.abrupt("return",!0);case 9:return r.data.msg?o.a.error(null,r.data.msg):o.a.error("Opps... hubo un error inesperador."),e.abrupt("return",!1);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),o.a.error(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.put("/category/".concat(t),r);case 3:if((n=e.sent).data.status!==s.a){e.next=9;break}return u.Notify.success("Se edit\xf3 correctamente."),e.abrupt("return",!0);case 9:return n.data.msg?o.a.error(null,n.data.msg):o.a.error("Opps... hubo un error inesperador."),e.abrupt("return",!1);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),o.a.error(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.delete("/category/".concat(t));case 3:if(e.sent.data.status!==s.a){e.next=7;break}return o.a.success(null,"Se elimino correctamente."),e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 10:return e.prev=10,e.t0=e.catch(0),o.a.error(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/category?level=1&parent=".concat(t));case 3:if((r=e.sent).data.status!==s.a){e.next=8;break}return e.abrupt("return",r.data.body);case 8:return e.abrupt("return",!1);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),o.a.error(e.t0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/category");case 3:(r=e.sent).data.status===s.a?t(r.data.body.data):t(null),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([Object(l.d)(),d(t)]);case 3:return r=e.sent,e.abrupt("return",{secciones:r[0]?r[0]:[],categoria:r[1]?r[1]:null});case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),o.a.error(null,"Opps... hubo un error inesperado"),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},410:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"e",(function(){return b})),r.d(t,"b",(function(){return p})),r.d(t,"d",(function(){return f}));var n=r(11),a=r.n(n),c=r(21),u=r(13),i=r(31),s=r(26),o=r(24),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/section/".concat(t));case 3:if((r=e.sent).data.status!==s.a){e.next=8;break}return e.abrupt("return",r.data.body);case 8:return e.abrupt("return",null);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/section",t);case 3:if((r=e.sent).data.status!==s.a){e.next=9;break}return u.Notify.success("Se creo correctamente."),e.abrupt("return",!0);case 9:return r.data.msg?o.a.error(null,r.data.msg):o.a.error("Opps... hubo un error inesperador."),e.abrupt("return",!1);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),o.a.error(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.put("/section/".concat(t),r);case 3:if((n=e.sent).data.status!==s.a){e.next=9;break}return u.Notify.success("Se edit\xf3 correctamente."),e.abrupt("return",!0);case 9:return n.data.msg?o.a.error(null,n.data.msg):o.a.error("Opps... hubo un error inesperador."),e.abrupt("return",!1);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),o.a.error(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.delete("/section/".concat(t));case 3:if(e.sent.data.status!==s.a){e.next=7;break}return o.a.success(null,"Se elimino correctamente."),e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 10:return e.prev=10,e.t0=e.catch(0),o.a.error(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/sections");case 3:(r=e.sent).data.status===s.a?t(r.data.body.data):t(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},411:function(e,t,r){"use strict";var n=r(44),a=r(0);t.a=function(){var e=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(n.a)(e,1)[0];return Object(a.useEffect)((function(){function e(){var e=document.querySelector(".k-widget.k-grid.grid"),t=window.innerHeight-90;e&&(e.style.height="".concat(t,"px"))}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e())}}),[]),{width:t.width,height:t.height}}},416:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(12),a=r(126),c=r(401),u=r(2),i=["title","children","size","actions","show","setShow"],s=function(e){var t=e.title,r=void 0===t?"":t,s=e.children,o=e.size,l=void 0===o?"small":o,d=e.actions,b=e.show,p=void 0!==b&&b,f=(e.setShow,Object(a.a)(e,i));return Object(u.jsxs)(c.a,Object(n.a)(Object(n.a)({open:p,size:l},f),{},{children:[Object(u.jsx)(c.a.Header,{children:r}),Object(u.jsx)(c.a.Content,{children:s}),d&&Object(u.jsx)(c.a.Actions,{children:d})]}))}},427:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return _}));var n=r(12),a=r(11),c=r.n(a),u=r(21),i=r(44),s=r(407),o=r(416),l=r(32),d=r(384),b=r(399),p=r(398),f=r(30),j=r(0),h=r(182),v=r(400),m=r(88),O=r(409),x=r(13),g=r(2),w=Object(j.forwardRef)((function(e,t){var r=e.setShow,n=e.loadDataTable,a=e.idCategoria,s=Object(j.useState)([]),o=Object(i.a)(s,2),l=o[0],d=o[1],p=Object(h.a)({initialValues:{name:"",icon:"",section_id:0},validationSchema:m.b({name:m.d().required("Este campo es requerido."),section_id:m.d().required("Este campo es requerido.")}),onSubmit:function(){var e=Object(u.a)(c.a.mark((function e(t){var u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.Loading.pulse(),u=null,!a){e.next=8;break}return e.next=5,Object(O.f)(a,t);case 5:u=e.sent,e.next=11;break;case 8:return e.next=10,Object(O.a)(t);case 10:u=e.sent;case 11:if(!u){e.next=15;break}return r(!1),n(!0),e.abrupt("return");case 15:x.Loading.remove();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});Object(j.useImperativeHandle)(t,(function(){return{handleSubmit:function(){p.submitForm()}}}));var w=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.Loading.pulse(),e.next=3,Object(O.d)(a);case 3:(t=e.sent).categoria&&p.setValues(t.categoria),t.secciones&&d(t.secciones),x.Loading.remove();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){w()}),[a]),Object(g.jsxs)(v.a,{onSubmit:p.handleSubmit,children:[Object(g.jsx)(v.a.Group,{widths:"equal",children:Object(g.jsx)(v.a.Input,{label:"Nombre",name:"name",required:!0,value:p.values.name,error:p.errors.name,onChange:p.handleChange})}),Object(g.jsx)(v.a.Group,{children:Object(g.jsxs)(v.a.Field,{required:!0,width:16,children:[Object(g.jsx)("label",{children:"Secci\xf3n"}),Object(g.jsx)(v.a.Input,{control:b.a,options:function(){var e=[{text:"Seleccione",value:"0",key:0}];return l.forEach((function(t){e=[].concat(Object(f.a)(e),[{key:t.id,text:t.name,value:t.id}])})),e}(),name:"section_id",search:!0,selection:!0,value:p.values.section_id,onChange:function(e,t){return p.setFieldValue("section_id",t.value)},error:p.errors.section_id})]})})]})})),k=w,S=r(408),y=r(414),C=r(411),N=Object(j.forwardRef)((function(e,t){var r=e.setShow,n=e.loadDataTable,a=e.id,i=e.idParent,s=Object(h.a)({initialValues:{name:"",icon:""},validationSchema:m.b({name:m.d().required("Este campo es requerido.")}),onSubmit:function(){var e=Object(u.a)(c.a.mark((function e(t){var u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.Loading.pulse(),u=null,t.level=1,t.parent_id=i,!a){e.next=10;break}return e.next=7,Object(O.f)(a,t);case 7:u=e.sent,e.next=13;break;case 10:return e.next=12,Object(O.a)(t);case 12:u=e.sent;case 13:if(!u){e.next=17;break}return r(!1),n(!0),e.abrupt("return");case 17:x.Loading.remove();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});Object(j.useImperativeHandle)(t,(function(){return{handleSubmit:function(){s.submitForm()}}}));var o=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.Loading.pulse(),e.next=3,Object(O.d)(a);case 3:(t=e.sent).categoria&&s.setValues(t.categoria),x.Loading.remove();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){o()}),[a]),Object(g.jsx)(v.a,{onSubmit:s.handleSubmit,children:Object(g.jsx)(v.a.Group,{widths:"equal",children:Object(g.jsx)(v.a.Input,{label:"Nombre",name:"name",required:!0,value:s.values.name,error:s.errors.name,onChange:s.handleChange})})})})),E=N,I=r(403),R=function(e){var t=e.dataItem,r=t.id,a=Object(S.a)({url:"category",take:10,params:{level:1,parent:r}}),c=a.dataResul,u=a.dataState,i=a.dataStateChange;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(I.a,{as:"h3",children:"Subcategor\xedas"}),Object(g.jsxs)(y.a,Object(n.a)(Object(n.a)(Object(n.a)({sortable:!0,pageable:!0},u),c),{},{onDataStateChange:i,className:"grid",scrollable:"none",children:[Object(g.jsx)(y.b,{width:50,cell:function(e){var r=e.dataItem;return Object(g.jsx)("td",{style:{overflow:"inherit"},children:Object(g.jsx)(b.a,{icon:"ellipsis vertical",floating:!0,button:!0,className:"icon circular compact ui left pointing",children:Object(g.jsxs)(b.a.Menu,{children:[Object(g.jsx)(b.a.Item,{icon:"edit",className:"blue",text:"Editar",onClick:function(){t.setIdSubCategoria(r.id),t.setShowSub(!0)}}),Object(g.jsx)(b.a.Item,{icon:"delete",className:"red",text:"Eliminar",onClick:function(){return t.handleEliminar(r.id,r.name)}})]})})})}}),Object(g.jsx)(y.b,{field:"id",title:"ID",width:"100px"}),Object(g.jsx)(y.b,{field:"name",title:"NOMBRE"}),Object(g.jsx)(y.b,{field:"slug",title:"URL"})]}))]})},_=function(){var e=Object(S.a)({url:"category",params:{level:0}}),t=e.dataResul,r=e.dataState,a=e.dataStateChange,f=e.requestDataIfNeeded,h=Object(j.useState)(null),v=Object(i.a)(h,2),m=v[0],w=v[1],N=Object(j.useState)(null),I=Object(i.a)(N,2),_=I[0],q=I[1],L=Object(j.useState)(!1),D=Object(i.a)(L,2),F=D[0],G=D[1],z=Object(j.useState)(!1),A=Object(i.a)(z,2),T=A[0],P=A[1],H=Object(j.useRef)(),V=Object(j.useRef)();Object(C.a)();var M=Object(j.useState)(!1),U=Object(i.a)(M,2),B=U[0],J=U[1],W=function(e,t){x.Confirm.show("CATEGOR\xcdAS","\xbfDesea eliminar a ".concat(t,"?"),"Aceptar","Cancelar",Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x.Loading.pulse(),t.next=3,Object(O.b)(e);case 3:if(!t.sent){t.next=7;break}return f(!0),t.abrupt("return");case 7:x.Loading.remove();case 8:case"end":return t.stop()}}),t)}))))};return Object(g.jsxs)("div",{className:"Categorias",children:[Object(g.jsxs)(s.a,{children:[Object(g.jsx)("div",{className:"item ui colhidden",children:Object(g.jsx)("button",{class:"ui icon button",onClick:function(){return f(!0)},children:Object(g.jsx)("i",{className:"sync icon"})})}),Object(g.jsx)("div",{className:"item ui colhidden",children:Object(g.jsx)("div",{className:"ui big breadcrumb",children:Object(g.jsx)("h2",{className:"section active",children:"CATEGORIAS"})})}),Object(g.jsx)("div",{className:"item ui colhidden",children:Object(g.jsxs)(d.a,{onClick:function(){w(null),G(!0)},className:"ui button",children:[Object(g.jsx)(l.h,{})," Nueva categoria"]})})]}),Object(g.jsx)("div",{className:"Categorias__body app__container_body",children:Object(g.jsx)("div",{className:"Categorias__tabla",children:Object(g.jsxs)(y.a,Object(n.a)(Object(n.a)(Object(n.a)({sortable:!0,pageable:!0},r),t),{},{onDataStateChange:a,className:"grid",detail:R,onExpandChange:function(e){J((function(e){return!e})),e.value=!B,e.dataItem.expanded=!B,e.dataItem.setIdSubCategoria=function(e){return q(e)},e.dataItem.setShowSub=function(e){return P(e)},e.dataItem.handleEliminar=function(e,t){return W(e,t)}},expandField:"expanded",children:[Object(g.jsx)(y.b,{width:50,cell:function(e){var t=e.dataItem;return Object(g.jsx)("td",{style:{overflow:"inherit"},children:Object(g.jsx)(b.a,{icon:"ellipsis vertical",floating:!0,button:!0,className:"icon circular compact ui left pointing",children:Object(g.jsxs)(b.a.Menu,{children:[Object(g.jsx)(b.a.Item,{icon:"plus",className:"blue",text:"Agregar subcategor\xeda",onClick:function(){q(null),w(t.id),P(!0)}}),Object(g.jsx)(p.a,{}),Object(g.jsx)(b.a.Item,{icon:"edit",className:"blue",text:"Editar",onClick:function(){return e=t.id,w(e),void G(!0);var e}}),Object(g.jsx)(b.a.Item,{icon:"delete",className:"red",text:"Eliminar",onClick:function(){return W(t.id,t.name)}})]})})})}}),Object(g.jsx)(y.b,{width:100,title:"ID",field:"id"}),Object(g.jsx)(y.b,{width:300,field:"name",title:"NOMBRES"}),Object(g.jsx)(y.b,{field:"section.name",title:"SECCI\xd3N"}),Object(g.jsx)(y.b,{field:"slug",title:"URL"})]}))})}),Object(g.jsx)(o.a,{title:"Ficha categor\xeda",show:F,size:"mini",actions:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{onClick:function(){return G(!1)},children:"Cancelar"}),Object(g.jsx)(d.a,{primary:!0,onClick:function(){return H.current.handleSubmit()},children:"Guardar"})]}),children:Object(g.jsx)(k,{ref:H,setShow:G,loadDataTable:f,idCategoria:m})}),Object(g.jsx)(o.a,{title:"Ficha subcategor\xeda",show:T,size:"mini",actions:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{onClick:function(){return P(!1)},children:"Cancelar"}),Object(g.jsx)(d.a,{primary:!0,onClick:function(){return V.current.handleSubmit()},children:"Guardar"})]}),children:Object(g.jsx)(E,{ref:V,setShow:P,loadDataTable:f,id:_,idParent:m})})]})}}}]);
//# sourceMappingURL=7.6d5380e6.chunk.js.map