from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=m`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=m`
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

  animation: ${A} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
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
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=m`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,F=m`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=m`
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
}`,G=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
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
`,H=b("div")`
  position: absolute;
`,W=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=m`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:n})=>{let{icon:t,type:i,iconTheme:r}=n;return void 0!==t?"string"==typeof t?e.createElement($,null,t):t:"blank"===i?null:e.createElement(W,null,e.createElement(U,{...r}),"loading"!==i&&e.createElement(H,null,"error"===i?e.createElement(L,{...r}):e.createElement(G,{...r})))},Y=n=>`\n0% {transform: translate3d(0,${-200*n}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=n=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*n}%,-1px) scale(.6); opacity:0;}\n`,J=b("div")`
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
`,Z=e.memo((({toast:n,position:t,style:i,children:r})=>{let u=n.height?((n,t)=>{let i=n.includes("top")?1:-1,[e,r]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(i),Q(i)];return{animation:t?`${m(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${m(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(n.position||t||"top-center",n.visible):{opacity:0},o=e.createElement(K,{toast:n}),h=e.createElement(X,{...n.ariaProps},j(n.message,n));return e.createElement(J,{className:n.className,style:{...u,...i,...n.style}},"function"==typeof r?r({icon:o,message:h}):e.createElement(e.Fragment,null,o,h))}));!function(n,t,i,e){g.p=t,y=n,p=i,z=e}(e.createElement);var nn=({id:n,className:t,style:i,onHeightUpdate:r,children:u})=>{let o=e.useCallback((t=>{if(t){let i=()=>{let i=t.getBoundingClientRect().height;r(n,i)};i(),new MutationObserver(i).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,r]);return e.createElement("div",{ref:o,className:t,style:i},u)},tn=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,en=({reverseOrder:n,position:t="top-center",toastOptions:i,gutter:r,children:u,containerStyle:o,containerClassName:h})=>{let{toasts:s,handlers:g}=N(i);return e.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:h,onMouseEnter:g.startPause,onMouseLeave:g.endPause},s.map((i=>{let o=i.position||t,h=((n,t)=>{let i=n.includes("top"),e=i?{top:0}:{bottom:0},r=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(i?1:-1)}px)`,...e,...r}})(o,g.calculateOffset(i,{reverseOrder:n,gutter:r,defaultPosition:t}));return e.createElement(nn,{id:i.id,key:i.id,onHeightUpdate:g.updateHeight,className:i.visible?tn:"",style:h},"custom"===i.type?j(i.message,i):u?u(i):e.createElement(Z,{toast:i,position:o}))})))},rn=I}},function(n){var t=function(t){return n(n.s=t)};n.O(0,[774,179],(function(){return t(91118),t(80880)}));var i=n.O();_N_E=i}]);