(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{12079:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/danh-muc-dau-tu",function(){return n(11698)}])},59843:function(t,e,n){"use strict";var i=n(85893);n(67294);e.Z=function(){return(0,i.jsxs)("div",{className:"divCenter",style:{padding:"20px 50px 50px 50px "},children:[(0,i.jsx)("img",{src:"/static/images/comming-soon.png",style:{width:"300px"}}),(0,i.jsxs)("a",{href:"/",children:[(0,i.jsx)("h1",{className:"h1Title",children:"B\u1ea1n h\xe3y quay v\u1ec1 Trang Ch\u1ee7 nh\xe9"})," "]})]})}},3033:function(t,e,n){"use strict";var i=n(85893);n(67294);e.Z=function(){return(0,i.jsx)("div",{className:"page-is-loading",children:(0,i.jsx)("img",{src:"/static/images/loading.gif",style:{height:"160px",marginLeft:"5px",marginRight:"15px"}})})}},11698:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return P},default:function(){return D}});var i=n(85893),r=n(67294),o=n(56225),s=(n(59843),n(53948),n(45325)),a=n(96486),c=n.n(a),u=n(57460),l=n(55109),d=n(21951),f=n(22582),h=n(72367),p=n(37585),v=function(t){var e=t.danhMuc,n=t.stockList,o=(0,r.useState)(!1),s=o[0],a=o[1],c=(0,r.useState)(""),u=c[0],l=c[1],d=[{title:"M\xe3",dataIndex:"symbol",key:"symbol",sorter:function(t,e){return t.symbol.localeCompare(e.symbol)}},{title:"\u0110\u1ecbnh gi\xe1 h\u1ee3p l\xfd",dataIndex:"estprice",key:"estprice",sorter:function(t,e){return t.estprice-e.estprice}},{title:"Gi\xe1 hi\u1ec7n t\u1ea1i",dataIndex:"giaHienTai",key:"giaHienTai",sorter:function(t,e){return t.currentprice-e.currentprice}},{title:"T\u1ef7 l\u1ec7 c\u1ed5 t\u1ee9c tr\xean gi\xe1 hi\u1ec7n t\u1ea1i",dataIndex:"dividendRate",key:"dividendRate"},{title:"B\xe0i vi\u1ebft ph\xe2n t\xedch",dataIndex:"linkpdf",key:"linkpdf",render:function(t){return(0,i.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),l(t),a(!0)},children:(0,i.jsx)("img",{src:"/static/images/icon-dmdt-pdf.png",alt:"PDF",style:{width:"24px",height:"24px"}})})}}];return(0,i.jsxs)("div",{className:"divBoxShadow divLeft divCol",children:[(0,i.jsxs)("h2",{className:"boxTitle",children:["DANH S\xc1CH C\u1ed4 PHI\u1ebeU DANH M\u1ee4C ",e]}),(0,i.jsx)(h.Z,{columns:d,dataSource:n,pagination:!1,style:{width:"100%"}}),(0,i.jsx)(p.Z,{title:"Xem B\xe0i vi\u1ebft Ph\xe2n t\xedch",visible:s,onOk:function(){a(!1)},onCancel:function(){a(!1)},width:1024,height:550,children:(0,i.jsx)("iframe",{src:u,title:"PDF Viewer",width:"100%",height:"530px"})})]})},x=n(9085),m=function(t){var e=t.names,n=t.pcts,o=(0,r.useRef)(null),s=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(null!==s.current&&s.current.destroy(),o.current){var t=o.current.getContext("2d");if(t){var i={type:"pie",data:{labels:e,datasets:[{data:n,backgroundColor:["#a5a5a5","#2f5597"],borderWidth:1}]},options:{plugins:{datalabels:{display:!1},legend:{position:"right"}},responsive:!0,maintainAspectRatio:!1,tooltips:{callbacks:{label:function(t,e){return"".concat(e.labels[t.index],": ").concat(e.datasets[0].data[t.index],"%")}}}}};s.current=new x.ZP(t,i)}}}),[e,n]),(0,i.jsx)("div",{style:{width:"300px"},children:(0,i.jsx)("canvas",{ref:o})})},y=n(3033);function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return!e||"object"!==k(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=b(t);if(e){var r=b(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return j(this,n)}}var C=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(s,t);var e,n,r,o=N(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=o.call(this,t)).state={answers:{},result:""},e}return e=s,(n=[{key:"componentWillReceiveProps",value:function(t){var e=t.userLoginData;null===this.props.userLoginData&&null!==e&&(0,l.bh)().dispatch((0,u.Sj)(e.kvrrPoint))}},{key:"componentDidMount",value:function(){null!==this.props.userLoginData&&(0,l.bh)().dispatch((0,u.Sj)(this.props.userLoginData.kvrrPoint))}},{key:"render",value:function(){var t=null!==(t=this.state)?t:function(t){throw t}(new TypeError("Cannot destructure undefined")),e=this.props,n=e.userLoginData,r=e.dmdtInfo,o=c().get(n,"kvrrPoint",""),s=(d.$.KhauViCode[o],(0,f.K8)(n,"".concat(f.Cx.GSP_VIP1)));if(!r||!r.info)return(0,i.jsx)(y.Z,{});try{var a="",u=r.info,l=u.tiLeTien,h=(u.moTa,r.stockList);return console.log("render stockList",h),a=""!==s?(0,i.jsx)("div",{className:"boxGocNhin",children:s}):(0,i.jsxs)("div",{style:{width:"90%"},children:[(0,i.jsxs)("div",{className:"divBoxShadow divCenter divCol",style:{width:"100%"},children:[(0,i.jsx)("h2",{className:"h2Title",children:"KHUY\u1ebeN NGH\u1eca T\u1ef6 L\u1ec6 PH\xc2N B\u1ed4 \u0110\u1ea6U T\u01af"}),(0,i.jsx)(m,{names:["Ti\u1ec1n m\u1eb7t","C\u1ed5 phi\u1ebfu"],pcts:[l,100-l]}),(0,i.jsx)("span",{children:"*L\u01b0u \xfd: T\u1ef7 l\u1ec7 tr\xean l\xe0 ph\xe2n b\u1ed5 theo NAV \u0111\u1ea7u t\u01b0 v\xe0o c\u1ed5 phi\u1ebfu kh\xf4ng t\xednh to\xe0n b\u1ed9 t\xe0i s\u1ea3n c\u1ee7a N\u0110T"})]}),(0,i.jsxs)("div",{className:"divBoxShadow divLeft divCol",style:{width:"100%"},children:[(0,i.jsxs)("h2",{className:"boxTitle",children:["B\u1ea1n Ph\xf9 h\u1ee3p v\u1edbi Danh m\u1ee5c c\u1ed5 phi\u1ebfu ",d.$.KhauViText[o]]}),(0,i.jsx)("span",{children:r.info.moTa})]}),(0,i.jsx)(v,{danhMuc:d.$.KhauViText[o],stockList:h})]}),(0,i.jsxs)("div",{className:"divCol Center",style:{width:"100%",backgroundColor:"#fbfbfb"},children:[(0,i.jsx)("h1",{className:"h1Title",children:"DANH M\u1ee4C KHUY\u1ebeN NGH\u1eca"}),(0,i.jsx)("div",{className:"divCenter divCol",style:{width:"100%"},children:a})]})}catch(p){return console.log("error",p),(0,i.jsx)("div",{className:"bieuDoBox",children:"e"})}}}])&&g(e.prototype,n),r&&g(e,r),s}(r.Component),_={FGET_DMDT_DS_COPHIEU:u.Sj},T=(0,o.$j)((function(t){return{dmdtInfo:t.kvrrDmdtReducer.dmdtInfo,userLoginData:t.userReducer.userLoginData}}),_)(C),P=!0,D=function(){var t=(0,o.I0)();return(0,r.useEffect)((function(){}),[t]),(0,i.jsx)(s.Z,{navmenu:!1,container:!1,children:(0,i.jsx)(T,{})})}},9085:function(t,e,n){"use strict";var i=n(23148);i.kL.register(...i.zX),e.ZP=i.kL}},function(t){t.O(0,[523,260,196,868,726,367,676,585,325,774,888,179],(function(){return e=12079,t(t.s=e);var e}));var e=t.O();_N_E=e}]);