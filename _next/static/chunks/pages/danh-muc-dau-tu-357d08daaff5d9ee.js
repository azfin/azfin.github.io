(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{75708:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(67294),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e){return a(e)||s(e)||c(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function s(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function a(e){if(Array.isArray(e))return u(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"HighchartsReact",(function(){return p}));var d=n(1),f=n.n(d),h="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,p=Object(d.memo)(Object(d.forwardRef)((function(e,t){var n=Object(d.useRef)(),i=Object(d.useRef)(),c=Object(d.useRef)(e.constructorType),s=Object(d.useRef)(e.highcharts);return h((function(){function t(){var t=e.highcharts||"object"===("undefined"==typeof window?"undefined":l(window))&&window.Highcharts,r=e.constructorType||"chart";t?t[r]?e.options?i.current=t[r](n.current,e.options,e.callback):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(i.current){if(!1!==e.allowChartUpdate)if(e.constructorType!==c.current||e.highcharts!==s.current)c.current=e.constructorType,s.current=e.highcharts,t();else if(!e.immutable&&i.current){var r;(r=i.current).update.apply(r,[e.options].concat(o(e.updateArgs||[!0,!0])))}else t()}else t()}),[e.options,e.allowChartUpdate,e.updateArgs,e.containerProps,e.highcharts,e.constructorType]),h((function(){return function(){i.current&&(i.current.destroy(),i.current=null)}}),[]),Object(d.useImperativeHandle)(t,(function(){return{get chart(){return i.current},container:n}}),[]),f.a.createElement("div",r({},e.containerProps,{ref:n}))})));t.default=p},function(e,t){e.exports=r}]))},12079:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/danh-muc-dau-tu",function(){return n(11698)}])},59843:function(e,t,n){"use strict";var r=n(85893);n(67294);t.Z=function(){return(0,r.jsxs)("div",{className:"divCenter",style:{padding:"20px 50px 50px 50px "},children:[(0,r.jsx)("img",{src:"/static/images/comming-soon.png",style:{width:"300px"}}),(0,r.jsxs)("a",{href:"/",children:[(0,r.jsx)("h1",{className:"h1Title",children:"B\u1ea1n h\xe3y quay v\u1ec1 Trang Ch\u1ee7 nh\xe9"})," "]})]})}},3033:function(e,t,n){"use strict";var r=n(85893);n(67294);t.Z=function(){return(0,r.jsx)("div",{className:"page-is-loading",children:(0,r.jsx)("img",{src:"/static/images/loading.gif",style:{height:"160px",marginLeft:"5px",marginRight:"15px"}})})}},11698:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return D},default:function(){return R}});var r=n(85893),o=n(67294),i=n(56225),c=(n(59843),n(53948),n(45325)),s=n(96486),a=n.n(s),u=n(57460),l=n(55109),d=n(21951),f=n(22582),h=n(72367),p=n(37585),m=function(e){var t=e.danhMuc,n=e.stockList,i=(0,o.useState)(!1),c=i[0],s=i[1],a=(0,o.useState)(""),u=a[0],l=a[1],d=[{title:"M\xe3",dataIndex:"symbol",key:"symbol",sorter:function(e,t){return e.symbol.localeCompare(t.symbol)}},{title:"\u0110\u1ecbnh gi\xe1 h\u1ee3p l\xfd",dataIndex:"estprice",key:"estprice",sorter:function(e,t){return e.estprice-t.estprice}},{title:"Gi\xe1 hi\u1ec7n t\u1ea1i",dataIndex:"giaHienTai",key:"giaHienTai",sorter:function(e,t){return e.currentprice-t.currentprice}},{title:"T\u1ef7 l\u1ec7 c\u1ed5 t\u1ee9c tr\xean gi\xe1 hi\u1ec7n t\u1ea1i",dataIndex:"dividendRate",key:"dividendRate"},{title:"B\xe0i vi\u1ebft ph\xe2n t\xedch",dataIndex:"linkpdf",key:"linkpdf",render:function(e){return(0,r.jsx)("a",{href:"#",onClick:function(t){t.preventDefault(),l(e),s(!0)},children:(0,r.jsx)("img",{src:"/static/images/icon-dmdt-pdf.png",alt:"PDF",style:{width:"24px",height:"24px"}})})}}];return(0,r.jsxs)("div",{className:"divBoxShadow divLeft divCol",children:[(0,r.jsxs)("h2",{className:"boxTitle",children:["DANH S\xc1CH C\u1ed4 PHI\u1ebeU DANH M\u1ee4C ",t]}),(0,r.jsx)(h.Z,{columns:d,dataSource:n,pagination:!1,style:{width:"100%"}}),(0,r.jsx)(p.Z,{title:"Xem B\xe0i vi\u1ebft Ph\xe2n t\xedch",visible:c,onOk:function(){s(!1)},onCancel:function(){s(!1)},width:1024,height:550,children:(0,r.jsx)("iframe",{src:u,title:"PDF Viewer",width:"100%",height:"530px"})})]})},y=n(78840),v=n.n(y),b=n(75708),x=n.n(b),g=function(e){var t=e.names,n=e.pcts;(0,o.useEffect)((function(){t.length===n.length||console.error("Names and pcts arrays must have the same length")}),[t,n]);var i={chart:{type:"pie",zoomType:"xy",height:"200px"},title:{text:""},tooltip:{formatter:function(){return"<b>".concat(this.point.name,"</b>: ").concat(this.percentage.toFixed(2),"%")}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",colors:["#a5a5a5","#2f5597"]},series:{dataLabels:{enabled:!1}}},series:[{name:"Percentage",data:t.map((function(e,t){return{name:e,y:n[t]}}))}],legend:{enabled:!1},credits:{enabled:!1}};return(0,r.jsxs)("div",{className:"divRow",children:[(0,r.jsxs)("div",{className:"",style:{width:"260px"},children:[" ",(0,r.jsx)(x(),{highcharts:v(),options:i})]}),(0,r.jsx)("div",{className:"dmdtPieChartcustom-legend divCol",children:t.map((function(e,t){return(0,r.jsxs)("div",{className:"dmdtPieChartcustom-legend-item divRow",style:{borderBottom:0===t?"solid 1px #D9D9D980":"none"},children:[(0,r.jsx)("span",{className:"legend-color-box",style:{backgroundColor:0===t?"#a5a5a5":"#2f5597",display:"inline-block",width:"6px",height:"20px",marginRight:"8px"}}),(0,r.jsx)("div",{className:"dmdtPieChartcustom-legend-label",style:{color:0===t?"#a5a5a5":"#2f5597"},children:e}),(0,r.jsxs)("span",{className:"dmdtPieChartcustom-legend-val",style:{color:0===t?"#a5a5a5":"#2f5597"},children:[n[t],"%"]})]},t)}))})]})},j=n(3033);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}var _=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(c,e);var t,n,o,i=P(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={answers:{},result:""},t}return t=c,(n=[{key:"componentWillReceiveProps",value:function(e){var t=e.userLoginData;null===this.props.userLoginData&&null!==t&&(0,l.bh)().dispatch((0,u.Sj)(t.kvrrPoint))}},{key:"componentDidMount",value:function(){null!==this.props.userLoginData&&(0,l.bh)().dispatch((0,u.Sj)(this.props.userLoginData.kvrrPoint))}},{key:"render",value:function(){var e=null!==(e=this.state)?e:function(e){throw e}(new TypeError("Cannot destructure undefined")),t=this.props,n=t.userLoginData,o=t.dmdtInfo,i=a().get(n,"kvrrPoint",""),c=(d.$.KhauViCode[i],(0,f.K8)(n,"".concat(f.Cx.GSP_VIP1)));if(!o||!o.info)return(0,r.jsx)(j.Z,{});try{var s="",u=o.info,l=u.tiLeTien,h=(u.moTa,o.stockList);return console.log("render stockList",h),s=""!==c?(0,r.jsx)("div",{className:"boxGocNhin",children:c}):(0,r.jsxs)("div",{style:{width:"90%"},children:[(0,r.jsxs)("div",{className:"divBoxShadow divCenter divCol",style:{width:"100%"},children:[(0,r.jsx)("h2",{className:"h2Title",children:"KHUY\u1ebeN NGH\u1eca T\u1ef6 L\u1ec6 PH\xc2N B\u1ed4 \u0110\u1ea6U T\u01af"}),(0,r.jsx)(g,{names:["Ti\u1ec1n m\u1eb7t","C\u1ed5 phi\u1ebfu"],pcts:[1*l,100-l]}),(0,r.jsx)("span",{children:"*L\u01b0u \xfd: T\u1ef7 l\u1ec7 tr\xean l\xe0 ph\xe2n b\u1ed5 theo NAV \u0111\u1ea7u t\u01b0 v\xe0o c\u1ed5 phi\u1ebfu kh\xf4ng t\xednh to\xe0n b\u1ed9 t\xe0i s\u1ea3n c\u1ee7a N\u0110T"})]}),(0,r.jsxs)("div",{className:"divBoxShadow divLeft divCol",style:{width:"100%"},children:[(0,r.jsxs)("h2",{className:"boxTitle",children:["B\u1ea1n Ph\xf9 h\u1ee3p v\u1edbi Danh m\u1ee5c c\u1ed5 phi\u1ebfu ",d.$.KhauViText[i]]}),(0,r.jsx)("span",{children:o.info.moTa})]}),(0,r.jsx)(m,{danhMuc:d.$.KhauViText[i],stockList:h})]}),(0,r.jsxs)("div",{className:"divCol Center",style:{width:"100%",backgroundColor:"#fbfbfb"},children:[(0,r.jsx)("h1",{className:"h1Title",children:"DANH M\u1ee4C KHUY\u1ebeN NGH\u1eca"}),(0,r.jsx)("div",{className:"divCenter divCol",style:{width:"100%"},children:s})]})}catch(p){return console.log("error",p),(0,r.jsx)("div",{className:"bieuDoBox",children:"e"})}}}])&&w(t.prototype,n),o&&w(t,o),c}(o.Component),k={FGET_DMDT_DS_COPHIEU:u.Sj},S=(0,i.$j)((function(e){return{dmdtInfo:e.kvrrDmdtReducer.dmdtInfo,userLoginData:e.userReducer.userLoginData}}),k)(_),D=!0,R=function(){var e=(0,i.I0)();return(0,o.useEffect)((function(){}),[e]),(0,r.jsx)(c.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(S,{})})}}},function(e){e.O(0,[523,260,898,868,726,367,585,325,774,888,179],(function(){return t=12079,e(e.s=t);var t}));var t=e.O();_N_E=t}]);