from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,N=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${N} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,D=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${D} 1s linear infinite;
`,M=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,$=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,F=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${$} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=b("div")`
  position: absolute;
`,H=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:n})=>{let{icon:i,type:g,iconTheme:u}=n;return void 0!==i?"string"==typeof i?h.createElement(G,null,i):i:"blank"===g?null:h.createElement(H,null,h.createElement(B,{...u}),"loading"!==g&&h.createElement(W,null,"error"===g?h.createElement(L,{...u}):h.createElement(F,{...u})))},J=n=>`\n0% {transform: translate3d(0,${-200*n}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,V=n=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*n}%,-1px) scale(.6); opacity:0;}\n`,Y=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=h.memo((({toast:n,position:i,style:g,children:u})=>{let t=n.height?((n,i)=>{let g=n.includes("top")?1:-1,[h,u]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(g),V(g)];return{animation:i?`${x(h)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(u)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(n.position||i||"top-center",n.visible):{opacity:0},r=h.createElement(K,{toast:n}),o=h.createElement(X,{...n.ariaProps},p(n.message,n));return h.createElement(Y,{className:n.className,style:{...t,...g,...n.style}},"function"==typeof u?u({icon:r,message:o}):h.createElement(h.Fragment,null,r,o))}));!function(n,i,g,h){s.p=i,d=n,a=g,j=h}(h.createElement);var nn=({id:n,className:i,style:g,onHeightUpdate:u,children:t})=>{let r=h.useCallback((i=>{if(i){let g=()=>{let g=i.getBoundingClientRect().height;u(n,g)};g(),new MutationObserver(g).observe(i,{subtree:!0,childList:!0,characterData:!0})}}),[n,u]);return h.createElement("div",{ref:r,className:i,style:g},t)},gn=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,hn=({reverseOrder:n,position:i="top-center",toastOptions:g,gutter:u,children:t,containerStyle:r,containerClassName:o})=>{let{toasts:e,handlers:s}=C(g);return h.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:o,onMouseEnter:s.startPause,onMouseLeave:s.endPause},e.map((g=>{let r=g.position||i,o=((n,i)=>{let g=n.includes("top"),h=g?{top:0}:{bottom:0},u=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${i*(g?1:-1)}px)`,...h,...u}})(r,s.calculateOffset(g,{reverseOrder:n,gutter:u,defaultPosition:i}));return h.createElement(nn,{id:g.id,key:g.id,onHeightUpdate:s.updateHeight,className:g.visible?gn:"",style:o},"custom"===g.type?p(g.message,g):t?t(g):h.createElement(Q,{toast:g,position:r}))})))},un=P}},function(n){var i=function(i){return n(n.s=i)};n.O(0,[774,179],(function(){return i(1118),i(880)}));var g=n.O();_N_E=g}]);