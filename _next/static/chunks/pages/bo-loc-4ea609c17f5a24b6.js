(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[310],{11250:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bo-loc",function(){return n(16415)}])},70300:function(t,e,n){"use strict";var o=n(85893),a=n(67294),r=n(14631),c=n.n(r);function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return!e||"object"!==m(e)&&"function"!==typeof e?i(t):e}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=u(t);if(e){var a=u(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return h(this,n)}}var b=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(u,t);var e,n,a,r=d(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),l(i(e=r.call(this,t)),"handleSelect",(function(t){console.log("handleSelect",t),e.props.onChange(t)})),l(i(e),"handleChange",(function(t){e.props.onChange(t.target.value)})),l(i(e),"handleKeyDown",(function(t){"Enter"===t.key&&e.props.handleKeyDown(t)})),e}return e=u,(n=[{key:"render",value:function(){var t=this.props,e=t.values,n=t.value,a=[];if(e)for(var r=0;r<e.length;r++)a.push({id:e[r],label:e[r]});return(0,o.jsx)(c(),{items:a,shouldItemRender:function(t){return t.label.toLowerCase().indexOf(n.toLowerCase())>-1},getItemValue:function(t){return t.label},renderItem:function(t,e){return(0,o.jsx)("div",{style:{backgroundColor:e?"#eee":"transparent",textAlign:"left",paddingLeft:"5px"},children:t.label},t.id)},inputProps:{style:{width:"200px",height:"30px",border:"none",paddingLeft:"10px",borderRadius:"20px",backgroundColor:"#D9D9D9"},onKeyDown:this.handleKeyDown},value:this.props.value,onChange:this.handleChange,onSelect:this.handleSelect})}}])&&s(e.prototype,n),a&&s(e,a),u}(a.Component);e.Z=b},16415:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return gt}});var o=n(85893),a=n(67294),r=n(56225),c=(n(62444),n(41527)),i=(n(96486),n(94872)),s=n(1257),l=n(38585),u=n(22582),h=n(82945),f=n(14726),m=n(37585),d=n(56846),b=n(72367),p=n(24435),g=h.Z.Option,y=function(t){var e,n,a,r=t.itemName,c=t.displayNames,i=t.filters,s=t.handleFilterChange,l=t.handleRemoveFilter,u=t.handleFloorChange;return"floor"===r?(0,o.jsxs)("div",{className:"wrapItemLoc divRow divLeft",children:[(0,o.jsxs)("div",{className:"divCol divLeft",style:{flex:1},children:[(0,o.jsx)("span",{className:"colLocLabel",children:"S\xe0n"}),(0,o.jsx)("div",{className:"divRow",children:(0,o.jsxs)("select",{id:"market",value:i[r]&&i[r].value?i[r].value:"",onChange:function(t){return u(t.target.value)},style:{padding:"5px",width:"150px"},children:[(0,o.jsx)("option",{value:"",children:"T\u1ea5t c\u1ea3"}),(0,o.jsx)("option",{value:"HOSE",children:"HOSE"}),(0,o.jsx)("option",{value:"HNX",children:"HNX"}),(0,o.jsx)("option",{value:"UPCOM",children:"UPCOM"})]})})]}),(0,o.jsx)("button",{onClick:function(){return l(r)},className:"button_icon",children:(0,o.jsx)("img",{src:"./static/images/icon_del.png",alt:"Delete",className:"icon_in_button"})})]}):(0,o.jsxs)("div",{className:"wrapItemLoc divRow divLeft",children:[(0,o.jsxs)("div",{className:"divCol divLeft",style:{flex:1},children:[(0,o.jsx)("span",{className:"colLocLabel",children:c[r]?c[r]:r}),(0,o.jsx)("span",{className:"colLocSubLabel",children:"\u0110\u01a1n v\u1ecb t\u1ef7 \u0111\u1ed3ng"}),(0,o.jsxs)("div",{className:"divRow",children:[(0,o.jsxs)(h.Z,{className:"colLocSelect",value:i[r]&&i[r].type?i[r].type:"equal",onChange:function(t){return s(r,"type",t)},children:[(0,o.jsx)(g,{value:"equal",children:"B\u1eb1ng"}),(0,o.jsx)(g,{value:"range",children:"Kho\u1ea3ng"})]}),"range"===(null===(e=i[r])||void 0===e?void 0:e.type)?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{placeholder:"Min",style:{marginRight:10},onChange:function(t){return s(r,"min",t)}}),(0,o.jsx)(p.Z,{placeholder:"Max",onChange:function(t){return s(r,"max",t)}})]}):(0,o.jsx)(p.Z,{placeholder:"Nh\u1eadp gi\xe1 tr\u1ecb ".concat(r),onChange:function(t){return s(r,"value",t)},value:"range"!==(null===(n=i[r])||void 0===n?void 0:n.type)?null===(a=i[r])||void 0===a?void 0:a.value:null})]})]}),(0,o.jsx)("button",{onClick:function(){return l(r)},className:"button_icon",children:(0,o.jsx)("img",{src:"./static/images/icon_del.png",alt:"Delete",className:"icon_in_button"})})]})};n(70300);function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){N(t,e,n[e])}))}return t}function T(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}h.Z.Option;var O=function(t){var e=t.rowForCol,n=t.showItems,r=t.DataGoc,c=t.displayNames,i=t.saveBoLocCallback,s=t.filters,u=t.setFilters,h=t.callbackCheckSubItem,p=(t.stocks,(0,a.useState)(r)),g=p[0],v=p[1],O=(0,a.useState)(!1),C=O[0],j=O[1],x=(0,a.useState)(""),L=x[0],k=x[1],S=(0,a.useState)(""),D=S[0],w=S[1],P=function(t,e,n){u(_({},s,N({},t,_({},s[t],N({},e,n)))))},B=function(t){u(_({},s,N({},"floor",{type:"equal",value:t})))},I=function(t){h(t)},R=function(){var t=T(r);console.log("applyFilters filters",s),Object.keys(s).forEach((function(e){var n=s[e];"symbol"==e||"floor"==e?(console.log("applyFilters symbol",n),(0,l.isNullOrUndefined)(n.value)||(t=t.filter((function(t){return 0===t[e].indexOf(n.value)})))):"range"===n.type?(void 0!==n.min&&(t=t.filter((function(t){return t[e]>=n.min}))),void 0!==n.max&&(t=t.filter((function(t){return t[e]<=n.max})))):"equal"!==n.type&&void 0!==n.type||void 0===n.value||null===n.value||""===n.value||(t=t.filter((function(t){return t[e]===n.value})))})),v(t)},E=Object.keys(e).filter((function(t){return n.indexOf(t)>=0})).map((function(t){return{title:(0,o.jsx)("span",{style:{fontSize:"9pt",padding:"0px 0px"},children:c[t]?c[t]:t}),dataIndex:t,key:t,align:"symbol, floor, lastDates".indexOf(t)>=0?"left":"right",width:100,sorter:function(e,n){return e[t]-n[t]},render:function(e){return"lastDates"===t?(0,l.convertToQuarter)(e,!1):e}}}));return(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsxs)("div",{style:{width:"100%",marginBottom:16},className:"boxBoLoc",children:[(0,o.jsx)("div",{className:"dieuKienLocWrapper",children:Object.keys(r[0]||{}).map((function(t){return"symbol"!==t&&"lastDates"!==t&&n.indexOf(t)>=0?",lastNoXauDates,slcp,lastQuaterPrice,vonHoaP73".indexOf(t)<0&&(0,o.jsx)(y,{itemName:t,DataGoc:r,displayNames:c,filters:s,handleFilterChange:P,handleRemoveFilter:I,handleFloorChange:B},t):""}))}),(0,o.jsxs)("div",{className:"divRow divCenter divBoLocButton",children:[(0,o.jsx)(f.ZP,{className:"btnXanh",onClick:R,children:"\xc1p d\u1ee5ng b\u1ed9 l\u1ecdc"}),(0,o.jsx)(f.ZP,{className:"btnXam",onClick:function(){var t=T(r);u({}),v(t)},children:"\u0110\u1eb7t l\u1ea1i"}),(0,o.jsx)(f.ZP,{className:"btnXanh",onClick:function(){return j(!0)},children:"L\u01b0u b\u1ed9 l\u1ecdc"})]}),(0,o.jsx)(m.Z,{title:"L\u01b0u b\u1ed9 l\u1ecdc",visible:C,onOk:function(){j(!1),i(s,L)},onCancel:function(){return j(!1)},children:(0,o.jsx)(d.Z,{placeholder:"Nh\u1eadp t\xean b\u1ed9 l\u1ecdc",value:L,onChange:function(t){return k(t.target.value)}})})]}),(0,o.jsxs)("div",{className:"divCol boxDiv",style:{width:"100%"},children:[(0,o.jsxs)("div",{className:"divRow",style:{width:"100%"},children:[(0,o.jsx)("div",{className:"divRow divLeft",style:{width:"50%"},children:(0,o.jsxs)("div",{className:"divRow divRight",style:{paddingRight:"0px"},children:[(0,o.jsx)("input",{type:"text",value:D,onChange:function(t){var e=t.target.value;w(e),P("symbol","type","equal"),P("symbol","value",e)},placeholder:"T\xecm ki\u1ebfm m\xe3",className:"symbolInput"}),(0,o.jsx)("button",{className:"search",onClick:function(){R()},children:(0,o.jsx)("img",{src:"/static/images/search1x.png",style:{height:"20px",marginLeft:"5px",marginRight:"15px"}})})]})}),(0,o.jsx)("div",{className:"divRow divRight",style:{width:"50%"},children:(0,o.jsxs)(f.ZP,{className:"btnXanh",onClick:function(){return function(){console.log("exportExcel",g);var t=Object.keys(g[0]||{}).map((function(t){return c[t]})).join(","),e=g.map((function(t){return Object.values(t).map((function(t){return'"'.concat(t,'"')})).join(",")})),n=[t].concat(T(e)).join("\n"),o=new Blob([n],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),r=document.createElement("a");r.href=a,r.setAttribute("download","AzFin_BoLoc.csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}()},children:[(0,o.jsx)("img",{src:"./static/images/icon_download.png",alt:"Delete",className:"icon_in_button"}),"Xu\u1ea5t Excel"]})})]}),(0,o.jsx)(b.Z,{className:"custom-table",columns:E,dataSource:g,rowKey:"symbol",scroll:{x:"max-content",y:400},pagination:!1})]})]})},C=function(t){var e=t.mucTimKiemItems,n=t.callbackCheckSubItem,a=t.displayNames;return(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsx)("h2",{className:"h2Title",children:"Ch\u1ecdn Ti\xeau Ch\xed L\u1ecdc"}),e.map((function(t,e){return"chung"!==t.itemName&&(0,o.jsxs)("div",{style:{width:"100%",textAlign:"start",alignItems:"flex-start"},children:[(0,o.jsx)("h3",{className:"h3Title",children:t.itemName}),(0,o.jsx)("div",{className:"divRowWrap",style:{backgroundColor:"#F3F3F3",padding:"5px 5px",fontSize:"9pt"},children:t.subItems.map((function(t,e){return(0,o.jsxs)("div",{className:"divBoLocChonItem",children:[(0,o.jsx)("input",{type:"checkbox",checked:t.checked,onChange:function(){return n(t.subItemName)},style:{marginRight:"5px"}}),a[t.subItemName]]},e)}))})]},e)}))]})},j=function(t){var e=t.item,n=t.callbackSelect,a=t.callbackDelete;return(0,o.jsxs)("div",{className:"divRow divBoLocItem",style:L.container,children:[(0,o.jsxs)("span",{className:"boLocItemLabel",children:[" ",e.name]}),(0,o.jsx)("button",{style:L.button,onClick:function(){return n(e)},className:"button_icon",children:(0,o.jsx)("img",{src:"./static/images/icon_option.png",alt:"D\xf9ng",className:"icon_in_button"})}),(0,o.jsx)("button",{style:L.button,onClick:function(){return a(e.name)},className:"button_icon",children:(0,o.jsx)("img",{src:"./static/images/icon_del.png",alt:"Delete",className:"icon_in_button"})})]})},x=function(t){var e=t.boLocs,n=t.callbackSelect,a=t.callbackDelete,r=[];Object.keys(e).forEach((function(t){r.push({name:t,data:e[t]})}));var c=r.map((function(t){return(0,o.jsx)(j,{item:t,callbackSelect:n,callbackDelete:a},t.name)}));return(0,o.jsxs)("div",{className:"divCenter divCol",style:{width:"100%"},children:[(0,o.jsx)("h2",{className:"h2Title",children:"Ch\u1ecdn Ti\xeau Ch\xed L\u1ecdc"}),(0,o.jsx)("div",{className:"divCol divCenter",style:{width:"100%"},children:c})]})},L={container:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"8px",boxSizing:"border-box"}};function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){D(t,e,n[e])}))}return t}function B(t,e){return!e||"object"!==R(e)&&"function"!==typeof e?k(t):e}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var R=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function E(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=w(t);if(e){var a=w(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return B(this,n)}}var A={chung:{symbol:"CP",lastNoXauDates:"",slcp:"",lastDates:"Qu\xfd"},"Th\xf4ng tin c\u01a1 b\u1ea3n":{floor:"S\xe0n",vonhoa:"V\u1ed1n ho\xe1"},"\u0110\u1ecbnh gi\xe1":{PB:"PB",PE:"PE",PS:"PS"},"Kh\u1ea3 n\u0103ng sinh l\u1eddi":{roa:"ROA (cu\u1ed1i qu\xfd)",roe:"ROE (cu\u1ed1i qu\xfd)"},"Ch\u1ea5t l\u01b0\u1ee3ng t\xe0i s\u1ea3n":{lastNoXauTiLeBaoPhu:"N\u1ee3 x\u1ea5u (nh\xf3m 3-5)",lastTyLeNhomNo2345:"N\u1ee3 (nh\xf3m 2-5)",lastnoXauTiLeBaoPhu:"D\u1ef1 ph\xf2ng RR/ N\u1ee3 x\u1ea5u (nh\xf3m 3-5)",lastduPhongRuiRoTinDungNo2345:"D\u1ef1 ph\xf2ng RR/ N\u1ee3 (nh\xf3m 2-5)",lastnhTsTiLeLaiPhiTongTaiSan:"L\xe3i v\xe0 ph\xed ph\u1ea3i thu/ T\u1ed5ng TS"},"T\xe0i s\u1ea3n":{nhTsTiLeTaiSanVcsh:"T\u1ed5ng TS/ VCSH",lastTongTS:"T\u1ed5ng t\xe0i s\u1ea3n",lastVcsh:"VCSH",lastnhChoVayKhachHang:"Quy m\xf4 t\xedn d\u1ee5ng (Cho vay KH)",lastTangTruongTongTS:"T\u0103ng tr\u01b0\u1edfng t\u1ed5ng TS (YoY)",lastTangTruongVcsh:"T\u0103ng tr\u01b0\u1edfng VCSH (YoY)",lastnhTangTruongChoVayKhachHang:"T\u0103ng tr\u01b0\u1edfng quy m\xf4 t\xedn d\u1ee5ng (YoY)",lastnhToiTangTruongYoy5Nam:"T\u0103ng tr\u01b0\u1edfng t\u1ed5ng TS (YoY) 5 n\u0103m g\u1ea7n nh\u1ea5t",lastVcshYoy5Nam:"T\u0103ng tr\u01b0\u1edfng VCSH (YoY) - 5 n\u0103m g\u1ea7n nh\u1ea5t",lastQuiMoTinDungYoy5Nam:"T\u0103ng tr\u01b0\u1edfng quy m\xf4 t\xedn d\u1ee5ng (YoY) 5 n\u0103m"},"Hi\u1ec7u qu\u1ea3 ho\u1ea1t \u0111\u1ed9ng":{lastnhSlNIM:"NIM",lastnhSlYOAE:"L\xe3i cho vay (YOAE)",lastnhSlCOF:"Chi ph\xed v\u1ed1n (COF)",lastnhTiLeLaiHDDV_TOI:"L\xe3i thu\u1ea7n t\u1eeb H\u0110 DV/ T\u1ed5ng thu nh\u1eadp H\u0110 (TOI)",lastnhToiTangTruongYoy:"T\u0103ng tr\u01b0\u1edfng TOI (YoY)",lastTangTruongLnst:"T\u0103ng tr\u01b0\u1edfng LNST (YoY)",nhToiTangTruongYoy5Nam:"T\u0103ng tr\u01b0\u1edfng TOI (YoY) - 5 n\u0103m g\u1ea7n nh\u1ea5t",lasttangTruongLNSTCtyMeNam:"T\u0103ng tr\u01b0\u1edfng LNST(YoY) - 5 n\u0103m g\u1ea7n nh\u1ea5t"},"C\u1ed5 t\u1ee9c":{ctcp5:"C\u1ed5 t\u1ee9c TB 5 n\u0103m g\u1ea7n nh\u1ea5t/ Gi\xe1 CP",ctcp3:"C\u1ed5 t\u1ee9c TB 3 n\u0103m g\u1ea7n nh\u1ea5t/ Gi\xe1 CP"}},H=Object.keys(A).map((function(t){return{itemName:t,subItems:Object.keys(A[t]).map((function(t){return{subItemName:t,checked:!1}}))}})),G="ACB",Y={lastDates:"2024-06-30",floor:"HOSE",PB:"1.45",PE:"6.60",PS:"1.96",roa:2.1,roe:16,slcp:4466657900,lastQuaterPrice:23.8,vonHoaP73:10630645802e4,ctcp5:.6,ctcp3:1.1,lastNoXauDates:"01/06/2024",lastNoXauTiLeBaoPhu:78,lastTyLeNhomNo2345:2.01,lastnoXauTiLeBaoPhu:78,lastduPhongRuiRoTinDungNo2345:57,lastnhTsTiLeLaiPhiTongTaiSan:null,lastTongTS:769679,lastVcsh:74793,lastnhChoVayKhachHang:550172,lastTangTruongTongTS:22,lastTangTruongVcsh:19,lastnhTangTruongChoVayKhachHang:27,lastnhToiTangTruongYoy5Nam:18,lastVcshYoy5Nam:26,lastQuiMoTinDungYoy5Nam:17,lastnhSlNIM:3.9,lastnhSlYOAE:6.9,lastnhSlCOF:3.3,lastnhTiLeLaiHDDV_TOI:null,lastnhToiTangTruongYoy:6,lastTangTruongLnst:15.6,nhToiTangTruongYoy5Nam:18,lasttangTruongLNSTCtyMeNam:-100},q=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(h,t);var e,n,a,r=E(h);function h(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),D(k(e=r.call(this,t)),"handleSubMenuClick",(function(t){e.setState({subMenu1Path:t})})),D(k(e),"setFilters",(function(t){e.setState({filters:t})})),D(k(e),"callbackCheckSubItem",(function(t){var n=e.state.mucTimKiemItems;n=n.map((function(e){return P({},e,{subItems:e.subItems.map((function(e){return e.subItemName===t?P({},e,{checked:!e.checked}):e}))})})),e.setState({mucTimKiemItems:n})})),D(k(e),"saveBoLocCallback",(function(t,n){var o=e.state.mucTimKiemItems,a=e.props.userLoginData;(0,c.bh)().dispatch((0,s.uD)({userLoginData:a,mucTimKiemItems:o,filters:t,filterName:n}))})),D(k(e),"callbackSelectBoLoc",(function(t){console.log("callbackSelectBoLoc ",t),e.setState({mucTimKiemItems:t.data.mucTimKiemItems})})),D(k(e),"callbackDelete",(function(t){var n=e.props.userLoginData.uid;(0,c.bh)().dispatch((0,s.a8)({uid:n,name:t}))})),e.state={mucTimKiemItems:H,filters:{}},e}return e=h,(n=[{key:"componentWillReceiveProps",value:function(t){var e=t.userLoginData;null===this.props.userLoginData&&null!==e&&(0,c.bh)().dispatch((0,s.Ly)(e.uid))}},{key:"componentDidMount",value:function(){null!==this.props.userLoginData&&(0,c.bh)().dispatch((0,s.Ly)(this.props.userLoginData.uid)),(0,c.bh)().dispatch((0,s.VX)()),(0,c.bh)().dispatch((0,i.eb)())}},{key:"render",value:function(){var t=this.state,e=t.mucTimKiemItems,n=t.filters,a=this.props,r=a.BO_LOC_NGAN_HANG_Data,c=a.BO_LOC_NGAN_HANG_DA_LUU_Data,i=a.userLoginData,s=a.stocks,h=(0,u.K8)(i,"".concat(u.Cx.GSP_CB)),f=P({symbol:G},Y),m={},d=",symbol, floor, lastDates";e.map((function(t){t.subItems.map((function(t){t.checked&&(d+=",".concat(t.subItemName))}))})),Object.keys(A).forEach((function(t){var e=A[t];Object.keys(e).forEach((function(t){m[t]=e[t]}))}));try{if((0,l.isNullOrUndefined)(r))return(0,o.jsx)("div",{className:"bieuDoBox",children:"-"});var b="";return b=""!==h?(0,o.jsx)("div",{className:"boxGocNhin",children:h}):(0,o.jsx)(O,{rowForCol:f,stocks:s,showItems:d,DataGoc:r,displayNames:m,saveBoLocCallback:this.saveBoLocCallback,filters:n,setFilters:this.setFilters,callbackCheckSubItem:this.callbackCheckSubItem}),(0,o.jsx)("div",{className:"divColCenter",children:(0,o.jsxs)("div",{className:"divCenter divCol",style:{width:"100%"},children:[(0,o.jsxs)("div",{className:"divRow2ColOnMobile",children:[(0,o.jsx)("div",{className:"divBoLocDaLuuWrap",children:(0,o.jsx)(x,{boLocs:c,callbackSelect:this.callbackSelectBoLoc,callbackDelete:this.callbackDelete})}),(0,o.jsx)("div",{className:"divBoLocChonTieuChiLocWrap",children:(0,o.jsx)(C,{mucTimKiemItems:e,callbackCheckSubItem:this.callbackCheckSubItem,displayNames:m})})]}),b]})})}catch(p){return console.log("error",p),(0,o.jsx)("div",{className:"bieuDoBox",children:"e"})}}}])&&S(e.prototype,n),a&&S(e,a),h}(a.Component),K={getHome:i.eb,FGET_BO_LOC_NGAN_HANG:s.VX,FGET_BO_LOC_NGAN_HANG_DA_LUU:s.Ly,FSAVE_BO_LOC_NGAN_HANG:s.uD,FXOA_BO_LOC_NGAN_HANG:s.a8},F=(0,r.$j)((function(t){return{BO_LOC_NGAN_HANG_Data:t.stockReducer.BO_LOC_NGAN_HANG_Data,BO_LOC_NGAN_HANG_DA_LUU_Data:t.stockReducer.BO_LOC_NGAN_HANG_DA_LUU_Data,userLoginData:t.userReducer.userLoginData,stocks:t.homeReducer.stocks}}),K)(q);function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){U(t,e,n[e])}))}return t}function Z(t,e){return!e||"object"!==z(e)&&"function"!==typeof e?V(t):e}function W(t,e){return(W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var z=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function $(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=X(t);if(e){var a=X(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Z(this,n)}}var J={chung:{symbol:"CP",lastNoXauDates:"",slcp:"",lastDates:"Qu\xfd"},"Th\xf4ng tin c\u01a1 b\u1ea3n":{floor:"S\xe0n",vonhoa:"V\u1ed1n ho\xe1"},"\u0110\u1ecbnh gi\xe1":{PB:"PB",PE:"PE",PS:"PS"},"Kh\u1ea3 n\u0103ng sinh l\u1eddi":{roa:"ROA (cu\u1ed1i qu\xfd)",roe:"ROE (cu\u1ed1i qu\xfd)"},"C\xe2n \u0111\u1ed1i k\u1ebf to\xe1n":{pthutts:"Kho\u1ea3n ph\u1ea3i thu/ T\u1ed5ng t\xe0i s\u1ea3n",htkhotts:"H\xe0ng t\u1ed3n kho/ T\u1ed5ng t\xe0i s\u1ea3n",tscdtts:"T\xe0i s\u1ea3n c\u1ed1 \u0111\u1ecbnh/ T\u1ed5ng t\xe0i s\u1ea3n",tsddtts:"T\xe0i s\u1ea3n d\u1edf dang/ T\u1ed5ng t\xe0i s\u1ea3n",tsddtscd:"T\xe0i s\u1ea3n d\u1edf dang/ T\xe0i s\u1ea3n c\u1ed1 \u0111inh",ttsvcsh:"T\u1ed5ng T\xe0i s\u1ea3n/ VCSH",nvrvcsh:"N\u1ee3 vay r\xf2ng/ VCSH",ncdvcsh:"N\u1ee3 chi\u1ebfm d\u1ee5ng/ VCSH",tttdtcth:"(Ng\u01b0\u1eddi mua tr\u1ea3 ti\u1ec1n tr\u01b0\u1edbc + Doanh thu ch\u01b0a th\u1ef1c hi\u1ec7n)/ VCSH",tthtk3y:"T\u0103ng tr\u01b0\u1edfng H\xe0ng t\u1ed3n kho (b\xecnh qu\xe2n 3 n\u0103m g\u1ea7n nh\u1ea5t)",tthtk5y:"T\u0103ng tr\u01b0\u1edfng H\xe0ng t\u1ed3n kho (b\xecnh qu\xe2n 5 n\u0103m g\u1ea7n nh\u1ea5t)",tttscd3y:"T\u0103ng tr\u01b0\u1edfng TSC\u0110 (b\xecnh qu\xe2n 3 n\u0103m g\u1ea7n nh\u1ea5t)",tttscd5y:"T\u0103ng tr\u01b0\u1edfng TSC\u0110 (b\xecnh qu\xe2n 5 n\u0103m g\u1ea7n nh\u1ea5t)",tttsdd3y:"T\u0103ng tr\u01b0\u1edfng TSDD (b\xecnh qu\xe2n 3 n\u0103m g\u1ea7n nh\u1ea5t)",tttsdd5y:"T\u0103ng tr\u01b0\u1edfng TSDD (b\xecnh qu\xe2n 5 n\u0103m g\u1ea7n nh\u1ea5t)"},"Doanh thu thu\u1ea7n":{ttdtqoq:"T\u0103ng tr\u01b0\u1edfng Doanh thu thu\u1ea7n (qu\xfd g\u1ea7n nh\u1ea5t, QoQ)",ttdtyoy:"T\u0103ng tr\u01b0\u1edfng Doanh thu thu\u1ea7n (qu\xfd g\u1ea7n nh\u1ea5t, YoY)",ttdt3y:"T\u0103ng tr\u01b0\u1edfng Doanh thu thu\u1ea7n (b\xecnh qu\xe2n 3 n\u0103m g\u1ea7n nh\u1ea5t)",ttdt5y:"T\u0103ng tr\u01b0\u1edfng Doanh thu thu\u1ea7n (b\xecnh qu\xe2n 5 n\u0103m g\u1ea7n nh\u1ea5t)"},LNG:{ttlngqoq:"T\u0103ng tr\u01b0\u1edfng LNG (qu\xfd g\u1ea7n nh\u1ea5t, QoQ)",ttlngyoy:"T\u0103ng tr\u01b0\u1edfng LNG (qu\xfd g\u1ea7n nh\u1ea5t, YoY)",ttlng3y:"T\u0103ng tr\u01b0\u1edfng LNG (b\xecnh qu\xe2n 3 n\u0103m g\u1ea7n nh\u1ea5t)",ttlng5y:"T\u0103ng tr\u01b0\u1edfng LNG (b\xecnh qu\xe2n 5 n\u0103m g\u1ea7n nh\u1ea5t)"},LNST:{ttlnstqoq:"T\u0103ng tr\u01b0\u1edfng LNST (qu\xfd g\u1ea7n nh\u1ea5t, QoQ)",ttlnstyoy:"T\u0103ng tr\u01b0\u1edfng LNST (qu\xfd g\u1ea7n nh\u1ea5t, YoY)",ttlnst3y:"T\u0103ng tr\u01b0\u1edfng LNST (b\xecnh qu\xe2n 3 n\u0103m g\u1ea7n nh\u1ea5t)",ttlnst5y:"T\u0103ng tr\u01b0\u1edfng LNST (b\xecnh qu\xe2n 5 n\u0103m g\u1ea7n nh\u1ea5t)"},"Bi\xean LN":{blng:"Bi\xean LNG",blnr:"Bi\xean LNR"},"C\u1ed5 t\u1ee9c":{ctcp3:"C\u1ed5 t\u1ee9c/ Gi\xe1 c\u1ed5 phi\u1ebfu",ctcp5:"C\u1ed5 t\u1ee9c trung b\xecnh 3 n\u0103m g\u1ea7n nh\u1ea5t/ Gi\xe1 c\u1ed5 phi\u1ebfu"}},tt="HPG",et={lastDates:"2024-06-30",floor:"HOSE",PB:"1.48",PE:"14.40",PS:"1.21",roa:5.4,roe:7,slcp:6396264270,lastQuaterPrice:28.3,vonHoaP73:0xa4a1abca22a8,ctcp5:.6,ctcp3:.7,pthutts:6,htkhotts:19,tscdtts:0,tsddtts:22,tsddtscd:0,ttsvcsh:190,nvrvcsh:41,ncdvcsh:-40.1,tttdtcth:0,tthtk3y:0,tthtk5y:21,tttscd3y:null,tttscd5y:null,tttsdd3y:93,tttsdd5y:-1,ttdtqoq:28,ttdtyoy:-272,ttdt5y:16,ttlngqoq:26,ttlngyoy:-236,ttlng5y:2,ttlnstqoq:16,ttlnstyoy:127,ttlnst5y:-100,blng:17,blnr:11},nt=Object.keys(J).map((function(t){return{itemName:t,subItems:Object.keys(J[t]).map((function(t){return{subItemName:t,checked:!1}}))}})),ot=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&W(t,e)}(h,t);var e,n,a,r=$(h);function h(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),U(V(e=r.call(this,t)),"handleSubMenuClick",(function(t){e.setState({subMenu1Path:t})})),U(V(e),"setFilters",(function(t){e.setState({filters:t})})),U(V(e),"callbackCheckSubItem",(function(t){var n=e.state.mucTimKiemItems;n=n.map((function(e){return Q({},e,{subItems:e.subItems.map((function(e){return e.subItemName===t?Q({},e,{checked:!e.checked}):e}))})})),e.setState({mucTimKiemItems:n})})),U(V(e),"saveBoLocCallback",(function(t,n){var o=e.state.mucTimKiemItems,a=e.props.userLoginData;(0,c.bh)().dispatch((0,s.nY)({userLoginData:a,mucTimKiemItems:o,filters:t,filterName:n}))})),U(V(e),"callbackSelectBoLoc",(function(t){console.log("callbackSelectBoLoc ",t),e.setState({mucTimKiemItems:t.data.mucTimKiemItems})})),U(V(e),"callbackDelete",(function(t){var n=e.props.userLoginData.uid;(0,c.bh)().dispatch((0,s.PY)({uid:n,name:t}))})),e.state={mucTimKiemItems:nt,filters:{}},e}return e=h,(n=[{key:"componentWillReceiveProps",value:function(t){var e=t.userLoginData;null===this.props.userLoginData&&null!==e&&(0,c.bh)().dispatch((0,s.b_)(e.uid))}},{key:"componentDidMount",value:function(){(0,c.bh)().dispatch((0,s.mO)()),(0,c.bh)().dispatch((0,i.eb)())}},{key:"render",value:function(){var t=this.state,e=t.mucTimKiemItems,n=t.filters,a=this.props,r=a.BO_LOC_DOANH_NGHIEP_Data,c=a.DS_BO_LOC_DN_DA_LUU_Data,i=a.userLoginData,s=a.stocks,h=Q({symbol:tt},et),f=(0,u.K8)(i,"".concat(u.Cx.GSP_CB)),m={},d=",symbol, lastDates";e.map((function(t){t.subItems.map((function(t){t.checked&&(d+=",".concat(t.subItemName))}))})),Object.keys(J).forEach((function(t){var e=J[t];Object.keys(e).forEach((function(t){m[t]=e[t]}))}));try{if((0,l.isNullOrUndefined)(r))return(0,o.jsx)("div",{className:"bieuDoBox",children:"-"});var b="";return b=""!==f?(0,o.jsx)("div",{className:"boxGocNhin",children:f}):(0,o.jsx)(O,{rowForCol:h,stocks:s,showItems:d,DataGoc:r,displayNames:m,saveBoLocCallback:this.saveBoLocCallback,filters:n,setFilters:this.setFilters,callbackCheckSubItem:this.callbackCheckSubItem}),(0,o.jsx)("div",{className:"divColCenter",children:(0,o.jsxs)("div",{className:"divCenter divCol",style:{width:"100%"},children:[(0,o.jsxs)("div",{className:"divRow2ColOnMobile",children:[(0,o.jsx)("div",{className:"divBoLocDaLuuWrap",children:(0,o.jsx)(x,{boLocs:c,callbackSelect:this.callbackSelectBoLoc,callbackDelete:this.callbackDelete})}),(0,o.jsx)("div",{className:"divBoLocChonTieuChiLocWrap",children:(0,o.jsx)(C,{mucTimKiemItems:e,callbackCheckSubItem:this.callbackCheckSubItem,displayNames:m})})]}),b]})})}catch(p){return console.log("error",p),(0,o.jsx)("div",{className:"bieuDoBox",children:"e"})}}}])&&M(e.prototype,n),a&&M(e,a),h}(a.Component),at={getHome:i.eb,FGET_BO_LOC_DOANH_NGHIEP_DATA:s.mO,FGET_DS_BO_LOC_DN_DA_LUU:s.b_,FSAVE_DS_BO_LOC_DN:s.nY,FXOA_DS_BO_LOC_DN:s.PY},rt=(0,r.$j)((function(t){return{BO_LOC_DOANH_NGHIEP_Data:t.stockReducer.BO_LOC_DOANH_NGHIEP_Data,DS_BO_LOC_DN_DA_LUU_Data:t.stockReducer.DS_BO_LOC_DN_DA_LUU_Data,userLoginData:t.userReducer.userLoginData,stocks:t.homeReducer.stocks}}),at)(ot),ct=(n(53948),n(45325));function it(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function st(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function lt(t){return(lt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ut(t,e){return!e||"object"!==ft(e)&&"function"!==typeof e?it(t):e}function ht(t,e){return(ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ft=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function mt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=lt(t);if(e){var a=lt(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return ut(this,n)}}var dt="subMenuBoLoc_NH",bt="subMenuBoLoc_DN",pt=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ht(t,e)}(c,t);var e,n,a,r=mt(c);function c(t){var e,n,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),e=r.call(this,t),n=it(e),a=function(t){e.setState({subMenu1Path:t})},(o="handleSubMenuClick")in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,e.state={subMenu1Path:bt},e}return e=c,(n=[{key:"render",value:function(){var t=this,e=this.state.subMenu1Path;return(0,o.jsxs)(ct.Z,{navmenu:!1,container:!1,className:"divCenter",children:[(0,o.jsxs)("div",{className:"nav_submenu_roundButton_wrap divCenter",children:[(0,o.jsx)("button",{className:"nav_h1menu_solid_submenu_item_left ".concat(e===bt?"nav_h1menu_solid_submenu_item_active":""),onClick:function(){return t.handleSubMenuClick(bt)},children:"B\u1ed9 L\u1ecdc C\u1ed5 Phi\u1ebfu Th\u01b0\u1eddng"}),(0,o.jsx)("button",{className:"nav_h1menu_solid_submenu_item_right ".concat(e===dt?"nav_h1menu_solid_submenu_item_active":""),onClick:function(){return t.handleSubMenuClick(dt)},children:"B\u1ed9 L\u1ecdc C\u1ed5 Phi\u1ebfu Ng\xe2n H\xe0ng"})]}),e===bt&&(0,o.jsx)(rt,{className:"text-muted small"}),e===dt&&(0,o.jsx)(F,{className:"text-muted small"})]})}}])&&st(e.prototype,n),a&&st(e,a),c}(a.Component),gt=(0,r.$j)((function(t){return{ttckData:t.bctcReducer.ttckData,userLoginData:t.userReducer.userLoginData}}),(function(t){return{getTtckTg:function(){return t(getTtckTg())}}}))(pt)}},function(t){t.O(0,[523,260,868,631,822,325,774,888,179],(function(){return e=11250,t(t.s=e);var e}));var e=t.O();_N_E=e}]);