(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{12079:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/danh-muc-dau-tu",function(){return n(1587)}])},59843:function(t,e,n){"use strict";var r=n(85893);n(67294);e.Z=function(){return(0,r.jsxs)("div",{className:"divCenter",style:{padding:"20px 50px 50px 50px "},children:[(0,r.jsx)("img",{src:"/static/images/comming-soon.png",style:{width:"300px"}}),(0,r.jsxs)("a",{href:"/",children:[(0,r.jsx)("h1",{className:"h1Title",children:"B\u1ea1n h\xe3y quay v\u1ec1 Trang Ch\u1ee7 nh\xe9"})," "]})]})}},3033:function(t,e,n){"use strict";var r=n(85893);n(67294);e.Z=function(){return(0,r.jsx)("div",{className:"page-is-loading",children:(0,r.jsx)("img",{src:"/static/images/loading.gif",style:{height:"160px",marginLeft:"5px",marginRight:"15px"}})})}},1587:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return C},default:function(){return D}});var r=n(85893),i=n(67294),o=n(56225),c=(n(59843),n(53948),n(45325)),s=n(96486),a=n.n(s),u=n(57460),l=n(55109),f=n(21951),d=n(22582),h=n(72367),p=[{title:"M\xe3",dataIndex:"symbol",key:"symbol",sorter:function(t,e){return t.symbol.localeCompare(e.symbol)}},{title:"\u0110\u1ecbnh gi\xe1 h\u1ee3p l\xfd",dataIndex:"estprice",key:"estprice",sorter:function(t,e){return t.estprice-e.estprice}},{title:"Gi\xe1 hi\u1ec7n t\u1ea1i",dataIndex:"giaHienTai",key:"giaHienTai",sorter:function(t,e){return t.currentprice-e.currentprice}},{title:"T\u1ef7 l\u1ec7 c\u1ed5 t\u1ee9c tr\xean gi\xe1 hi\u1ec7n t\u1ea1i",dataIndex:"dividendRate",key:"dividendRate"},{title:"B\xe0i vi\u1ebft ph\xe2n t\xedch",dataIndex:"linkpdf",key:"linkpdf",render:function(t){return(0,r.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:"/static/images/icon-dmdt-pdf.png",alt:"PDF",style:{width:"24px",height:"24px"}})})}}],v=function(t){var e=t.danhMuc,n=t.stockList;return(0,r.jsxs)("div",{className:"divBoxShadow",style:{width:"100%"},children:[(0,r.jsxs)("h2",{className:"h2TitleLeft",children:["DANH S\xc1CH C\u1ed4 PHI\u1ebeU DANH M\u1ee4C ",e]}),(0,r.jsx)(h.Z,{style:{},columns:p,dataSource:n,pagination:!1})]})},y=n(3033);function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x(t);if(e){var i=x(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return g(this,n)}}var k=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(c,t);var e,n,i,o=_(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=o.call(this,t)).state={answers:{},result:""},e}return e=c,(n=[{key:"componentWillReceiveProps",value:function(t){var e=t.userLoginData;null===this.props.userLoginData&&null!==e&&(0,l.bh)().dispatch((0,u.Sj)(e.kvrrPoint))}},{key:"componentDidMount",value:function(){null!==this.props.userLoginData&&(0,l.bh)().dispatch((0,u.Sj)(this.props.userLoginData.kvrrPoint))}},{key:"render",value:function(){var t=null!==(t=this.state)?t:function(t){throw t}(new TypeError("Cannot destructure undefined")),e=this.props,n=e.userLoginData,i=e.dmdtInfo,o=a().get(n,"kvrrPoint",""),c=f.$.KhauViCode[o],s=(0,d.K8)(n,"".concat(d.Cx.GSP_VIP1));if(!i)return(0,r.jsx)(y.Z,{});try{var u="";return u=""!==s?(0,r.jsx)("div",{className:"boxGocNhin",children:s}):(0,r.jsx)(v,{danhMuc:c,stockList:i.stockList}),(0,r.jsxs)("div",{className:"divCol Center",children:[(0,r.jsx)("h1",{className:"h1Title",children:"DANH M\u1ee4C KHUY\u1ebeN NGH\u1eca"}),(0,r.jsx)("div",{className:"divCenter divCol",style:{width:"100%"},children:u})]})}catch(l){return console.log("error",l),(0,r.jsx)("div",{className:"bieuDoBox",children:"e"})}}}])&&m(e.prototype,n),i&&m(e,i),c}(i.Component),w={FGET_DMDT_DS_COPHIEU:u.Sj},N=(0,o.$j)((function(t){return{dmdtInfo:t.kvrrDmdtReducer.dmdtInfo,userLoginData:t.userReducer.userLoginData}}),w)(k),C=!0,D=function(){var t=(0,o.I0)();return(0,i.useEffect)((function(){}),[t]),(0,r.jsx)(c.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(N,{})})}}},function(t){t.O(0,[523,260,868,726,367,325,774,888,179],(function(){return e=12079,t(t.s=e);var e}));var e=t.O();_N_E=e}]);