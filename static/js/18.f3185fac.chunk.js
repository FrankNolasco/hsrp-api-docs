(this["webpackJsonpdocumentacion-api-hsrp"]=this["webpackJsonpdocumentacion-api-hsrp"]||[]).push([[18],{141:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(45),r=a.n(n),c=a(61),o=a(49),l=a(75),b=a.n(l),i=a(144),s=a.n(i),d=a(60),u=a(0),p=a(40),j=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0,l=Object(p.b)(),i=l.usuario,j=Object(u.useState)(void 0),f=Object(o.a)(j,2),h=f[0],O=f[1],v=Object(u.useState)(null),m=Object(o.a)(v,2),x=m[0],g=m[1],y=Object(u.useState)(),S=Object(o.a)(y,2),k=S[0],P=S[1],w=Object(u.useState)(!1),T=Object(o.a)(w,2),_=T[0],C=T[1],E=function(t){n=t},U=function(){O(void 0),g(null),C(!1),P(void 0)},A=function(){var t=b.a.create({baseURL:d.baseURL});return t.interceptors.request.use(s()({getToken:function(){return"".concat(i?i.token:"NO TENGO TOKEN"," ").concat(i?i.idrol:0)}})),t},I=function(){var a=Object(c.a)(r.a.mark((function a(c){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.post(e,"GET"===t?null:n);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}(),N=function(){var t=Object(c.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),t.prev=1,t.next=4,I(A());case 4:e=t.sent,O(e.data),P(e.status),C(!1),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(1),P(500),g(t.t0),C(!1);case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!t&&U(),N()};return Object(u.useEffect)((function(){return a&&R(),function(){}}),[i,a]),{data:h,loading:_,responseServerCode:k,error:x,updateParams:E,clientInitRequest:R}}},142:function(t,e,a){"use strict";var n,r,c,o=a(74),l=a(33),b=a(4),i=function(t){var e=t.data;return Object(b.jsxs)("div",{children:[Object(b.jsx)(o.a,{icon:"database",label:"Procedimiento Almacenado",children:e.procedureStore}),e.inputParams&&Object(b.jsx)(w,{title:"Parametros de entrada",name:e.name,type:"INPUT",interfaceTS:e.inputParams.interfaceTS,params:e.inputParams.params}),e.outputParams&&Object(b.jsx)(w,{title:"Parametros de salida",name:e.name,type:"OUTPUT",interfaceTS:e.outputParams.interfaceTS,params:e.outputParams.params})]})},s=a(49),d=a(135),u=a(143),p=a(11),j=a(12),f=j.a.div(n||(n=Object(p.a)(["\n  position: relative;\n  color: #4de791;\n  > span {\n    position: absolute;\n    top: -25px;\n    left: -5px;\n  }\n  > .ant-btn {\n    border: 0;\n    > i {\n      font-size: 20px;\n    }\n  }\n\n  > .ant-btn:focus,\n  .ant-btn:active {\n    color: #4de791;\n  }\n"]))),h=function(t){var e=t.value,a=Object(u.a)(e,{successDuration:1e3}),n=Object(s.a)(a,2),r=n[0],c=n[1];return Object(b.jsxs)(f,{onClick:c,children:[Object(b.jsx)("span",{children:r&&"\xa1Copiado!"}),Object(b.jsx)(d.a,{type:"primary",children:Object(b.jsx)("i",{className:"fa fa-copy"})})]})},O=j.a.div(r||(r=Object(p.a)(["\n    border: 1px solid #303030;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding : 3px 10px; \n    background-color: #111;\n"]))),v=function(t){var e=t.method,a=t.url,n=t.name;return Object(b.jsxs)(O,{children:[Object(b.jsx)("span",{children:e}),Object(b.jsx)("span",{children:a}),Object(b.jsx)(h,{value:"export const API_".concat(n,' = "').concat(a,'"')})]})},m=a(76),x=a(0),g=a(295),y=Object(j.a)(g.a)(c||(c=Object(p.a)(["\n  * {\n    color: white;\n  }\n  .ant-table-tbody > .tr.ant-table-row:hover > * {\n    background: #111;\n  }\n  .ant-table-small .ant-table-thead > tr > th {\n    background-color: #1890ff;\n  }\n  .ant-table-thead > tr > th {\n    color: white;\n    background: #000;\n    border-bottom: 1px solid #303030;\n  }\n  .ant-table-tbody > tr > td,\n  .ant-table.ant-table-bordered > .ant-table-container,\n  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > td, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > td {\n    border-color: #303030;\n  }\n"])));var S,k=function(t){var e=t.dataSource,a=t.columnSource,n=t.expandable,r=t.renderList,c=t.responsive,o=Object(x.useState)([]),l=Object(s.a)(o,2),i=l[0],d=l[1],u=function(t){var e=t.replaceAll("_"," ");e=e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase();var a,n=(a=t,r?r.filter((function(t){return t.name===a})):[]),o=function(t){return c?c.filter((function(e){return e.name===t})):[]}(t),l=n.length>0,b=o.length>0;return{title:e,dataIndex:t,key:t,render:l?n[0].render:void 0,responsive:b?o[0].responsive:void 0}};return Object(x.useEffect)((function(){if(a.length>0){var t=a.map(u);d(t)}return function(){}}),[a]),Object(b.jsx)(y,Object(m.a)(Object(m.a)({bordered:!0,size:"small"},n),{},{dataSource:e,columns:i,pagination:e.length>20}))},P=function(t,e,a){return"export interface DEF_".concat(e.replaceAll(/([a-z])([A-Z])/g,"$1_$2").toUpperCase(),"_").concat(a," {").concat(t.map((function(t){return"".concat(t.name).concat(t.required?"":"?"," : ").concat(t.type)})),"}")},w=function(t){t.interfaceTS;var e=t.params,a=t.title,n=t.name,r=t.type;return Object(b.jsxs)(o.a,{icon:"angle-double-right",label:a,extra:Object(b.jsx)(h,{value:P(e,n,r)}),children:[Object(b.jsx)(o.a,{icon:"",label:"- Interface TS",children:"DEF_".concat(n.replaceAll(/([a-z])([A-Z])/g,"$1_$2").toUpperCase(),"_").concat(r)}),Object(b.jsx)(x.Fragment,{children:e.length>0&&Object(b.jsx)(k,{columnSource:["name","type","required"],dataSource:e})})]})},T=a(297),_=Object(j.a)(T.a)(S||(S=Object(p.a)(["\n    background-color: #222;\n    border-color: #303030;\n    color : #c3c3c3;\n    .ant-table{ \n        background-color: #111;\n    }    \n"]))),C=function(t){var e=t.data;return Object(b.jsx)(_,{hoverable:!0,bordered:!0,children:Object(b.jsxs)(l.a,{gap:"10px",children:[Object(b.jsxs)(o.a,{label:"REFERENCIA:",children:["API_",e.controller.name.toUpperCase()]}),Object(b.jsx)(v,{method:e.method,url:e.url,name:e.controller.name.toUpperCase()}),Object(b.jsx)(i,{data:e.controller})]})})};e.a=function(t){var e=t.api_reference,a=t.cargando,n=void 0===a||a;return Object(b.jsx)(l.c,{gap:"10px",cols:2,responsive:!0,colsWidthResponsive:"100%",children:n?Object(b.jsx)("span",{style:{color:"white"},children:"Cargando referencias..."}):e?e.routing.map((function(t,e){return Object(b.jsx)(C,{data:t},e)})):Object(b.jsx)("span",{style:{color:"white"},children:"No hay referencias disponibles..."})})}},288:function(t,e,a){"use strict";a.r(e);var n=a(142),r=a(141),c=a(4);e.default=function(){var t=Object(r.a)("POST","/api/references/hospitalizacion_farmacia");return Object(c.jsx)("div",{children:Object(c.jsx)(n.a,{api_reference:t.data,cargando:t.loading})})}}}]);
//# sourceMappingURL=18.f3185fac.chunk.js.map