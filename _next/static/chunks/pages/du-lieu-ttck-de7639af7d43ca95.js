(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[150],{89365:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/du-lieu-ttck",function(){return n(11139)}])},22438:function(e,t,n){"use strict";var r=n(85893),o=n(67294),i=n(45697),a=n.n(i),l=function(e){var t=e.series,n=(0,o.useRef)(null);return(0,r.jsx)("div",{className:"divCenter",children:(0,r.jsx)("div",{className:"divRow",ref:n,children:t.map((function(e,t){return(0,r.jsxs)("div",{className:"legend-item",children:[(0,r.jsx)("span",{className:"legend-color-box",style:{backgroundColor:e.color}}),(0,r.jsx)("span",{className:"legend-label-min",title:e.name,children:e.name.length>25?"".concat(e.name.substring(0,22),"..."):e.name})]},t)}))})})};l.propTypes={series:a().arrayOf(a().shape({name:a().string.isRequired,color:a().string.isRequired,visible:a().bool.isRequired})).isRequired,toggleSeriesVisibility:a().func.isRequired},t.Z=l},11139:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Be},default:function(){return Ie}});var r=n(85893),o=n(67294),i=n(56225),a=(n(8539),n(96486),n(9198)),l=n.n(a),s=n(99123),c=n(38585),u=n(22438),d=n(76588),f=n(1257),h=(n(72162),n(13481)),p=n(29009),m=n(98687),x=n(3023),v=n(75358),b=n(26050),y=n(56880),g=n(49762);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}var O=function(e){var t,n=e.formattedGraphicalItems,o=n[0],i=n[1];return null===o||void 0===o||null===(t=o.props)||void 0===t?void 0:t.points.map((function(e,t){var n,a,l=null===o||void 0===o||null===(n=o.props)||void 0===n?void 0:n.points[t],s=null===i||void 0===i||null===(a=i.props)||void 0===a?void 0:a.points[t],c=l.y-s.y;return(0,r.jsx)(h.A,{width:10,height:-c,x:l.x-5,y:l.y,fill:"#cccccc"},t)}))},k=function(e){var t=e.cx,n=e.cy;e.stroke,e.payload;return null===e.value?(0,r.jsx)("svg",{x:t-10,y:n,width:20,height:20,fill:"#222222",viewBox:"0 0 1024 1024"}):(0,r.jsx)("svg",{x:t-10,y:n,width:20,height:20,fill:"#222222",viewBox:"0 0 1024 1024",children:(0,r.jsx)("line",{x1:"150",y1:"0",x2:"500",y2:"-1",transform:"translate(160 116.687117)",fill:"none",stroke:"#222222",strokeWidth:"200",strokeLinecap:"round"})})},R=function(e){var t=e.active,n=e.payload,o=e.label,i=e.labels,a=e.dataDot;if(t&&n&&n.length){for(var l=0,s=0;s<i.length;s++)if(o==i[s]){l=(0,c.round)(a[s],2);break}return(0,r.jsx)("div",{className:"customTooltip",children:(0,r.jsxs)("p",{className:"label",children:["".concat(o," ")," ",(0,r.jsx)("br",{}),"Hi\u1ec7n t\u1ea1i: ".concat(l),(0,r.jsx)("br",{}),"Trung v\u1ecb: ".concat((0,c.round)(n[3].value,2))]})})}return null},P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(a,e);var t,n,o,i=M(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){for(var e,t=this.props,n=(t.title,t.labels),o=(t.lineTitle,t.dataLine),i=(t.minTitle,t.dataMin),a=(t.barTitle,t.max),l=(t.dotTitle,t.dataDot),s=t.heightChart,u=t.yAxisMax||Math.round(110*Number((e=Math).max.apply(e,C(a))))/100,d=[{label:"",dot:null,line:null,min:null,max:null}],f=0;f<n.length;f++)d.push({label:n[f],dot:l[f]>=u?u:(0,c.round)(l[f],2),line:o[f],min:(0,c.round)(i[f],2),max:(0,c.round)(a[f],2)>=u?u:(0,c.round)(a[f],2)});try{return(0,r.jsx)(p.h,{width:"100%",height:s,children:(0,r.jsxs)(m.w,{width:500,height:300,data:d,margin:{top:5,right:20,left:-20,bottom:50},children:[(0,r.jsx)(x.K,{dataKey:"label",angle:-90,textAnchor:"end",style:{fontSize:"12px"}}),(0,r.jsx)(v.B,{type:"number",domain:[0,u]}),(0,r.jsx)(b.u,{content:(0,r.jsx)(R,{labels:n,dataDot:l})}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"min",stroke:"#8884d800"}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"max",stroke:"#82ca9d00"}),(0,r.jsx)(g.M,{component:O}),(0,r.jsx)(y.x,{name:"",type:"monotone",dataKey:"dot",stroke:"#fe6c0000",fill:"#fe6c00"}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"Hi\u1ec7n t\u1ea1i",stroke:"#fe6c00",fill:"#fe6c00"}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"Trung v\u1ecb",stroke:"#000000",fill:"#000000"}),(0,r.jsx)(y.x,{name:"",type:"monotone",dataKey:"line",stroke:"#fe6c0000",dot:(0,r.jsx)(k,{})}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"K hien",stroke:"#00000000",fill:"#000000"}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"K hien",stroke:"#00000000",fill:"#000000"})]})})}catch(h){return console.log("error",h),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:h+""})}}}])&&N(t.prototype,n),o&&N(t,o),a}(o.Component),E=(0,i.$j)((function(e){return{}}),(function(e){return{}}))(P);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return!t||"object"!==H(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=K(e);if(t){var o=K(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}var V=function(e){var t,n=e.formattedGraphicalItems,o=n[0],i=n[1];return null===o||void 0===o||null===(t=o.props)||void 0===t?void 0:t.points.map((function(e,t){var n,a,l=null===o||void 0===o||null===(n=o.props)||void 0===n?void 0:n.points[t],s=null===i||void 0===i||null===(a=i.props)||void 0===a?void 0:a.points[t],c=l.x-s.x;return(0,r.jsx)(h.A,{height:10,width:-c,y:l.y-5,x:l.x,fill:"#cccccc"},t)}))},X=function(e){var t=e.cx,n=e.cy;e.stroke,e.payload;return null===e.value?(0,r.jsx)("svg",{x:t-10,y:n,width:20,height:20,fill:"#222222",viewBox:"0 0 1024 1024"}):(0,r.jsx)("svg",{x:t,y:n-9,width:20,height:20,fill:"#222222",viewBox:"0 0 1024 1024",children:(0,r.jsx)("line",{x1:"0",y1:"150",x2:"0",y2:"500",transform:"translate(160 116.687117)",fill:"none",stroke:"#222222",strokeWidth:"200",strokeLinecap:"round"})})},F=function(e){var t=e.active,n=e.payload,o=e.label,i=e.labels,a=e.dataDot;if(t&&n&&n.length){for(var l=0,s=0;s<i.length;s++)if(o==i[s]){l=(0,c.round)(a[s],2);break}return(0,r.jsx)("div",{className:"customTooltip",children:(0,r.jsxs)("p",{className:"label",children:["".concat(o," ")," ",(0,r.jsx)("br",{}),"Hi\u1ec7n t\u1ea1i: ".concat(l),(0,r.jsx)("br",{}),"Trung v\u1ecb: ".concat((0,c.round)(n[3].value,2))]})})}return null},W=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,o,i=L(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){for(var e,t=this.props,n=(t.title,t.labels),o=(t.lineTitle,t.dataLine),i=(t.minTitle,t.dataMin),a=(t.barTitle,t.max),l=(t.dotTitle,t.dataDot),s=t.heightChart,u=t.xAxisMax||Math.round(110*Number((e=Math).max.apply(e,I(a))))/100,d=[{label:"",dot:null,line:null,min:null,max:null}],f=0;f<n.length;f++)d.push({label:n[f],dot:l[f]>=u?u:(0,c.round)(l[f],2),line:o[f],min:(0,c.round)(i[f],2),max:(0,c.round)(a[f],2)>=u?u:(0,c.round)(a[f],2)});try{return(0,r.jsx)(p.h,{width:"100%",height:s,children:(0,r.jsxs)(m.w,{layout:"vertical",width:500,height:300,data:d,margin:{top:10,right:30,left:20,bottom:5},children:[(0,r.jsx)(x.K,{type:"number",orientation:"top",domain:[0,u]}),(0,r.jsx)(v.B,{dataKey:"label",type:"category",style:{fontSize:"8px"}}),(0,r.jsx)(b.u,{content:(0,r.jsx)(F,{labels:n,dataDot:l})}),(0,r.jsx)(y.x,{dataKey:"min",stroke:"#8884d800"}),(0,r.jsx)(y.x,{dataKey:"max",stroke:"#82ca9d00"}),(0,r.jsx)(g.M,{component:V}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"Hi\u1ec7n t\u1ea1i",stroke:"#fe6c00",fill:"#fe6c00"}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"Trung v\u1ecb",stroke:"#000000",fill:"#000000"}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"dot",stroke:"#fe6c0000",fill:"#fe6c00"}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"line",stroke:"#fe6c0000",dot:(0,r.jsx)(X,{})}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"K hien",stroke:"#00000000",fill:"#000000"}),(0,r.jsx)(y.x,{type:"monotone",dataKey:"K hien",stroke:"#00000000",fill:"#000000"})]})})}catch(h){return console.log("error",h),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:h+""})}}}])&&S(t.prototype,n),o&&S(t,o),a}(o.Component),Y=(0,i.$j)((function(e){return{}}),(function(e){return{}}))(W),U=n(23148),$=n(26495),Z=n(57028),q=n(11519),z=n(11310),J=n(22582);function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t){return!t||"object"!==re(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function oe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ee(e);if(t){var o=ee(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return te(this,n)}}U.kL.register(U.f$,U.uw,U.ZL,U.od,U.jn,U.De,U.u,U.ST,U.vn,Z.Z,U.Dx);var ie=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(a,e);var t,n,o,i=oe(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e,t,n=this.props,o=n.title,i=n.fiscalDates,a=n.lineTitle,l=n.dataLine,s=n.color,u=n.median,d=n.userLoginData,f=[""],h=[];if((0,c.isNullOrUndefined)(i)||(f=i=i.map((function(e){return(0,c.convertYMD2DMY)(e)}))),!(0,c.isNullOrUndefined)(l)){var p=l[l.length-1],m=u,x=Math.round(100*(p/m-1));e="".concat((0,c.formatNumbers)(Number(p),2)," l\u1ea7n, "),e+=x>0?"cao h\u01a1n trung v\u1ecb ".concat(x,"%"):x<0?"th\u1ea5p h\u01a1n trung v\u1ecb ".concat(x,"%"):"\u0111ang \u1edf trung v\u1ecb ".concat(x,"%"),t=x>=25?"boxTitleXau":x<=-25?"boxTitleTot":"boxTitleTrungTinh"}for(var v=0;v<l.length;v++)h.push(u);var b={responsive:!0,layout:{},legend:{position:"bottom"},interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{legend:{display:!0,position:"bottom",boxHeight:"2px",labels:{boxHeight:z.legendboxHeight,boxWidth:z.legendboxWidth}},datalabels:{display:!1,labels:{boxHeight:2,boxWidth:z.legendboxWidth}}},scales:{x:{ticks:{font:{size:11},maxRotation:90,minRotation:90},grid:{display:!1}},y:{grid:{display:!1}}}},y={labels:f,datasets:[{type:"line",pointRadius:0,label:a,borderColor:s,backgroundColor:s,borderWidth:2,fill:!1,data:l,datalabels:{color:s}},{pointRadius:0,type:"line",label:"Trung v\u1ecb",backgroundColor:"#000000",borderColor:"#000000",borderWidth:1,fill:!1,data:h,borderDash:[5,3]}]};try{var g="",j=(0,J.K8)(d,"".concat(J.Cx.GSP_CB));return g=""!==j?(0,r.jsxs)("div",{className:"boxGocNhin",style:{width:"100%"},children:[" ",j," "]}):(0,r.jsx)($.kL,{options:b,data:y,height:z.heightChart}),(0,r.jsxs)("div",{className:"bieuDoPBPER divCenter",children:[(0,r.jsxs)("h2",{className:"boxTitle",children:[o,(0,r.jsx)("span",{className:t,children:e})]}),(0,r.jsx)("div",{className:"divChart",children:g})]})}catch(N){return console.log("error",N),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:N+""})}}}])&&Q(t.prototype,n),o&&Q(t,o),a}(o.Component),ae=(0,i.$j)((function(e){return{userLoginData:e.userReducer.userLoginData}}),(function(e){return{}}))(ie),le=n(94831),se=n(18001),ce=n(43815),ue=function(e){for(var t=e.labels,n=e.barData,o=e.donvi,i=(e.heightChart,[]),a=0;a<t.length;a++)i.push({label:t[a],value:n[a]});return(0,r.jsxs)("div",{className:"bieuDoGdNNTD divCol",style:{width:"100%",position:"relative"},children:[(0,r.jsx)("div",{className:"divRight",style:{width:"100%"},children:(0,r.jsxs)("span",{className:"donViText",children:["\u0110\u01a1n v\u1ecb: ",o]})}),(0,r.jsx)(p.h,{width:"100%",height:250,children:(0,r.jsxs)(le.v,{data:i,margin:{top:5,right:5,left:5,bottom:20},children:[(0,r.jsx)(x.K,{dataKey:"label",angle:-90,textAnchor:"end",style:{fontSize:"10px"}}),(0,r.jsx)(v.B,{style:{fontSize:"10px"}}),(0,r.jsx)(b.u,{}),(0,r.jsx)(se.$,{dataKey:"value",fill:"green",children:i.map((function(e,t){return(0,r.jsx)(ce.b,{fill:e.value>=0?"green":"red"},"cell-".concat(t))}))})]})})]})},de=n(3033);function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return!t||"object"!==xe(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var xe=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function ve(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=he(e);if(t){var o=he(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return pe(this,n)}}var be=function(e){var t=e.item;e.index;return(0,r.jsxs)("tr",{style:{color:"#797979",height:"25px"},children:[(0,r.jsx)("td",{className:"colTen",children:t.vnCountryName}),(0,r.jsx)("td",{className:"colTen",children:t.name}),(0,r.jsx)("td",{className:"colNumberValue ".concat(t.change>=0?"colorTot":"colorXau"),children:(0,c.formatNumbers)(t.close)}),(0,r.jsx)("td",{className:"colNumberValue ".concat(t.change>=0?"colorTot":"colorXau"),children:(0,c.formatNumbers)(t.change,1)}),(0,r.jsx)("td",{className:"colNumberValue ".concat(t.change>=0?"colorTot":"colorXau"),children:(0,c.formatNumbers)(t.pctChange,1)}),(0,r.jsx)("td",{className:"colNumberValue",children:(0,c.convertYMD2DDMM)(t.date)})]})},ye=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(a,e);var t,n,o,i=ve(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props.CKTG_CHANGEData;if(!e)return(0,r.jsx)(de.Z,{});var t=e.map((function(e,t){return(0,r.jsx)(be,{index:t,item:e},t)}));try{return(0,r.jsxs)("div",{className:"divCol divCenter ",children:[(0,r.jsx)("h2",{className:"boxTitle",children:"Bi\u1ebfn \u0110\u1ed9ng CKTG"}),(0,r.jsx)("div",{className:"divChart",style:{borderRadius:"10px"},children:(0,r.jsx)("table",{style:{borderRadius:"10px",width:"100%"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{className:"trHead",children:[(0,r.jsx)("td",{style:{borderRadius:"10px 0px 0px 0px"},children:"Th\u1ecb tr\u01b0\u1eddng"}),(0,r.jsx)("td",{children:"T\xean"}),(0,r.jsx)("td",{children:"Gi\xe1 \u0111\xf3ng c\u1eeda"}),(0,r.jsx)("td",{children:"Thay \u0111\u1ed5i"}),(0,r.jsx)("td",{children:"%"}),(0,r.jsx)("td",{style:{borderRadius:"0px 10px 0px 0px"},children:"Ng\xe0y"})]}),t]})})})]})}catch(n){return console.log("error",n),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:n+""})}}}])&&fe(t.prototype,n),o&&fe(t,o),a}(o.Component),ge=(0,i.$j)((function(e){return{}}),(function(e){return{}}))(ye);function je(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e){return(Te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function De(e,t){return!t||"object"!==we(t)&&"function"!==typeof t?je(e):t}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var we=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function Me(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Te(e);if(t){var o=Te(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return De(this,n)}}(0,a.registerLocale)("vi",s.vi);var Oe="subMenu1ttck_tg",ke="subMenu1vn100",Re="subMenu1GdfGt",Pe="subMenu1Gdfkl",Ee="subMenu1GdpGt",Ge="subMenu1Gdpkl",Se=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(a,e);var t,n,o,i=Me(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),_e(je(t=i.call(this,e)),"handleSubMenuClick",(function(e){t.setState({subMenu1Path:e})})),_e(je(t),"handleSubMenuClickGDF",(function(e){console.log("subMenu1PathGDF",e),t.setState({subMenu1PathGDF:e})})),_e(je(t),"handleSubMenuClickGDP",(function(e){t.setState({subMenu1PathGDP:e})})),_e(je(t),"handlePrStartDateChange",(function(e){t.setState({prStartDate:e})})),_e(je(t),"handlePrEndDateChange",(function(e){t.setState({prEndDate:e})})),t.state={subMenu1Path:Oe,subMenu1PathGDF:Re,subMenu1PathGDP:Ee,prStartDate:new Date("2009/04/25"),prEndDate:new Date},t}return t=a,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"componentDidMount",value:function(){(0,q.bh)().dispatch((0,d.oh)()),(0,q.bh)().dispatch((0,d.vO)()),(0,q.bh)().dispatch((0,f.DX)()),(0,q.bh)().dispatch((0,f._6)())}},{key:"render",value:function(){var e=this.props,t=(e.newFiscalDate,e.ttckData),n=e.VNINDEX_INDICATORSData,o=e.CKTG_CHANGEData,i=e.GD_KHOI_NGOAI_TU_DOANHData,a=this.state,s=a.subMenu1Path,d=a.subMenu1PathGDF,f=a.subMenu1PathGDP,h=a.prStartDate,p=a.prEndDate;if(!t||!n)return(0,r.jsx)(de.Z,{});for(var m=t.ToJson,x=t.ToJson100,v=[],b=[],y=[],g=[],j=[],N=[],_=[],T=[],D=[],C=[],w=[],M=[],O=[],k=[],R=[],P=n.tradingDates,G=n.PER,S=n.PBR,K=h.toISOString().substring(0,10),A=p||new Date,B=(A=(0,c.getLastDayOfMonth)(A)).toISOString().substring(0,10),I=0;I<P.length;I++)K<=P[I]&&P[I]<=B&&(O.push(P[I]),k.push((0,c.formatNumbers)(G[I],2)),R.push((0,c.formatNumbers)(S[I],2)));var H=(0,c.median)(k,2),L=(0,c.median)(R,2);console.log("medianPER, medianPBR",H,L);try{var V=this,X=[],F=[],W="",U="",$=[],Z=[],q="",z="",J="",Q="",ee="boxTitleXau",te="boxTitleXau";if(i){var ne=i.tdF,re=i.netValF,oe=i.netVolF,ie=i.tdP,le=i.netValP,se=i.netVolP;$=ne.map((function(e){return(0,c.convertYMD2DMY)(e)})),Z=ie.map((function(e){return(0,c.convertYMD2DMY)(e)}));var ce=re[re.length-1]/1e9;ce>=0&&(ee="boxTitleTot"),z=(0,c.convertYMD2DMY)(ne[ne.length-1]),q="".concat((0,c.formatNumbers)(ce,1)," t\u1ef7 kh\u1ed1i l\u01b0\u1ee3ng ").concat((0,c.formatNumbers)(oe[oe.length-1]/1e6,1)," tri\u1ec7u c\u1ed5");var fe=le[le.length-1]/1e9;fe>=0&&(te="boxTitleTot"),Q=(0,c.convertYMD2DMY)(ie[ie.length-1]),J="".concat((0,c.formatNumbers)(fe,1)," t\u1ef7 kh\u1ed1i l\u01b0\u1ee3ng ").concat((0,c.formatNumbers)(oe[oe.length-1]/1e6,1)," tri\u1ec7u c\u1ed5"),d===Re?(X=re.map((function(e){return Math.round(10*e/1e9)/10})),W="T\u1ef7 \u0111\u1ed3ng"):(X=oe.map((function(e){return Math.round(10*e/1e6)/10})),W="Tri\u1ec7u c\u1ed5 phi\u1ebfu"),f===Ee?(F=le.map((function(e){return Math.round(10*e/1e9)/10})),U="T\u1ef7 \u0111\u1ed3ng"):(F=se.map((function(e){return Math.round(10*e/1e6)/10})),U="Tri\u1ec7u c\u1ed5 phi\u1ebfu")}if((0,c.isNullOrUndefined)(t))return(0,r.jsx)("div",{className:"bieuDoBox",children:"-"});for(I=0;I<m.length;I++)v.push(m[I].Code),g.push(m[I].Min),N.push(m[I].KhoangGiaTri),y.push(m[I].HienTai),b.push(m[I].Median),j.push(m[I].Max);for(I=0;I<x.length;I++)_.push(x[I].Code),C.push(x[I].Min),M.push(x[I].KhoangGiaTri),D.push(x[I].HienTai),T.push(x[I].Median),w.push(x[I].Max);(0,c.isMobile)();var he=(0,c.isMobile)()?"100%":"20%",pe=[{color:"#fe6c00",name:"Hi\u1ec7n t\u1ea1i"},{color:"#000000",name:"Trung v\u1ecb"}];return(0,r.jsx)("div",{className:"homeBound",style:{width:"100%",padding:"0px 20px"},children:(0,r.jsx)("div",{className:"homeContent",children:(0,r.jsxs)("div",{className:"divColCenter",children:[(0,r.jsx)("h1",{className:"h1Title",children:"T\u1ed4NG QUAN TH\u1eca TR\u01af\u1edcNG CH\u1ee8NG KHO\xc1N"}),(0,r.jsxs)("div",{className:"nav_submenu_roundButton_wrap",children:[(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(s===Oe?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClick(Oe)},children:"Th\u1ecb Tr\u01b0\u1eddng Ch\u1ee9ng Kho\xe1n"}),(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(s===ke?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClick(ke)},children:"VN100"})]}),s===Oe&&(0,r.jsxs)("div",{className:"divCol",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"divRowDColM",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"divColCenter div50d100m divCenter divBox",style:{width:"50%",justifyContent:"flex-start",border:"1px solid #E7E7E7",borderRadius:"10px",marginRight:"10px",paddingTop:"5px"},children:[(0,r.jsx)("h2",{className:"boxTitle",style:{paddingTop:"5px"},children:"PE TH\u1eca TR\u01af\u1edcNG CH\u1ee8NG KHO\xc1N TH\u1ebe GI\u1edaI"}),(0,r.jsx)(E,{title:"",labels:v,lineTitle:"Trung v\u1ecb",dataLine:b,dotTitle:"Hi\u1ec7n t\u1ea1i",dataDot:y,minTitle:"Min",heightChart:280,dataMin:g,barTitle:"Max",max:j,yAxisMax:50}),(0,r.jsx)(u.Z,{series:pe})]}),(0,r.jsx)("div",{className:"divColCenter div50d100m divBox",style:_e({width:"50%",justifyContent:"top",border:"1px solid #E7E7E7",borderRadius:"10px",marginLeft:"5px",paddingTop:"5px"},"justifyContent","flex-start"),children:(0,r.jsx)(ge,{CKTG_CHANGEData:o})})]}),(0,r.jsxs)("div",{className:"divCol divBox",style:{border:"1px solid #E7E7E7",marginTop:"15px",borderRadius:"10px"},children:[(0,r.jsxs)("div",{className:"divRowDColM",style:{width:"100%",padding:"10px 10px 5px 10px"},children:[(0,r.jsxs)("div",{className:"div50d100m datepicker-container",children:[(0,r.jsx)("span",{className:"datepicker-label",children:"T\u1eeb ng\xe0y"}),(0,r.jsx)(l(),{showIcon:!0,selected:h,onChange:this.handlePrStartDateChange,dateFormat:"dd/MM/yy",locale:"vi",className:"custom-datepicker"}),(0,r.jsx)("span",{className:"datepicker-label",children:"\u0111\u1ebfn ng\xe0y "}),(0,r.jsx)(l(),{showIcon:!0,selected:p,onChange:this.handlePrEndDateChange,dateFormat:"dd/MM/yy",locale:"vi",className:"custom-datepicker"})]}),(0,r.jsx)("div",{className:"div50d100m divRightDCenterM",children:(0,r.jsxs)("label",{className:"datepicker-label",children:["(D\u1eef li\u1ec7u c\u1eadp nh\u1eadt \u0111\u1ebfn ng\xe0y ",(0,c.convertYMD2DDMM)(O[O.length-1]),")"]})})]}),(0,r.jsxs)("div",{className:"divRowDColM ",style:{width:"100%"},children:[(0,r.jsx)("div",{className:"divColCenter div50d100m",style:{width:"50%",justifyContent:"center",margin:"3px"},children:(0,r.jsx)(ae,{fiscalDates:O,title:"PE C\u1ee7a VN-INDEX ",lineTitle:"PE",dataLine:k,color:"#0E448A",median:H})}),(0,r.jsx)("div",{className:"divColCenter div50d100m",style:{width:"50%",margin:"3px"},children:(0,r.jsx)(ae,{fiscalDates:O,title:"PB C\u1ee7a VN-INDEX ",lineTitle:"PB",dataLine:R,color:"#FD9E2B",median:L})})]})]}),(0,r.jsx)("div",{className:"divCol divBox",style:{border:"1px solid #E7E7E7",marginTop:"15px",borderRadius:"10px",padding:"10px"},children:(0,r.jsxs)("div",{className:"divCol divCenter",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"divRowDColM",style:{width:"100%"},children:[(0,r.jsx)("div",{className:"div50d100m divLeftDCenterM",children:(0,r.jsx)("h2",{className:"h2Title",children:"Di\u1ec5n bi\u1ebfn giao d\u1ecbch kh\u1ed1i ngo\u1ea1i"})}),(0,r.jsxs)("div",{className:"div50d100m divRightDCenterM",children:[(0,r.jsxs)("span",{className:"giaTriRongTitle",children:["Gi\xe1 tr\u1ecb r\xf2ng ",z]}),(0,r.jsx)("span",{className:"giaTriRongTitle ".concat(ee),style:{paddingLeft:"10px"},children:q})]})]}),(0,r.jsxs)("div",{className:"nav_submenu_roundButton_wrap",children:[(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(d===Re?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClickGDF(Re)},children:"Gi\xe1 tr\u1ecb GD"}),(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(d===Pe?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClickGDF(Pe)},children:"Kh\u1ed1i l\u01b0\u1ee3ng"})]}),(0,r.jsx)(ue,{labels:$,barData:X,donvi:W,heightChart:he})]})}),(0,r.jsxs)("div",{className:"divCol divBox",style:{border:"1px solid #E7E7E7",marginTop:"15px",borderRadius:"10px",padding:"10px"},children:[(0,r.jsxs)("div",{className:"divCol divCenter",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"divRowDColM",style:{width:"100%"},children:[(0,r.jsx)("div",{className:"div50d100m divLeftDCenterM",children:(0,r.jsx)("h2",{className:"h2Title",children:"Di\u1ec5n bi\u1ebfn giao d\u1ecbch t\u1ef1 doanh"})}),(0,r.jsxs)("div",{className:"div50d100m divRightDCenterM",children:[(0,r.jsxs)("span",{className:"giaTriRongTitle",children:["Gi\xe1 tr\u1ecb r\xf2ng ",Q]}),(0,r.jsx)("span",{className:"giaTriRongTitle ".concat(te),style:{paddingLeft:"10px"},children:J})]})]}),(0,r.jsxs)("div",{className:"nav_submenu_roundButton_wrap",children:[(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(f===Ee?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClickGDP(Ee)},children:"Gi\xe1 tr\u1ecb GD"}),(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(f===Ge?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClickGDP(Ge)},children:"Kh\u1ed1i l\u01b0\u1ee3ng"})]})]}),(0,r.jsx)(ue,{labels:Z,barData:F,donvi:U,heightChart:he})]})]}),s===ke&&(0,r.jsxs)("div",{className:"divCenter divBox divCol",style:{width:"100%"},children:[(0,r.jsx)(u.Z,{series:pe}),(0,r.jsx)(Y,{title:"",labels:_,lineTitle:"Trung v\u1ecb",dataLine:T,dotTitle:"Hi\u1ec7n t\u1ea1i",dataDot:D,minTitle:"Min",heightChart:2e3,dataMin:C,barTitle:"Max",max:w,xAxisMax:16})]})]})})})}catch(me){return console.log("error",me),(0,r.jsx)("div",{className:"bieuDoBox",children:"e"})}}}])&&Ne(t.prototype,n),o&&Ne(t,o),a}(o.Component),Ke=(0,i.$j)((function(e){return{ttckData:e.bctcReducer.ttckData,CKTG_CHANGEData:e.bctcReducer.CKTG_CHANGEData,VNINDEX_INDICATORSData:e.stockReducer.VNINDEX_INDICATORSData,GD_KHOI_NGOAI_TU_DOANHData:e.stockReducer.GD_KHOI_NGOAI_TU_DOANHData}}),(function(e){return{getTtckTg:function(){return e((0,d.oh)())},getCKTG_CHANGE:function(){return e((0,d.vO)())},getVNINDEX_INDICATORS:function(){return e((0,f.DX)())},getGD_KHOI_NGOAI_TU_DOANH:function(){return e((0,f._6)())}}}))(Se),Ae=(n(53948),n(45325)),Be=!0,Ie=function(){var e=(0,i.I0)();return(0,o.useEffect)((function(){}),[e]),(0,r.jsx)(Ae.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(Ke,{className:"text-muted small"})})}}},function(e){e.O(0,[523,260,196,868,896,496,226,325,472,774,888,179],(function(){return t=89365,e(e.s=t);var t}));var t=e.O();_N_E=t}]);