import{U as m,cM as u,bK as r,cN as d}from"./index-Bjl6Xt50.js";function p(e,i,t){const a=e.thumbnail&&e.thumbnail.url;return a?m(a,{responseType:"image"}).then(s=>{const h=n(s.data,t);return t!=null&&t.node?(t.node.appendChild(h),t.node):h}):u(e).then(s=>s?i(s,t):null)}function n(e,i){const t=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,a=Math.max(e.width,e.height);let s=(i==null?void 0:i.maxSize)!=null?r(i.maxSize):d.maxSize;t&&(s=Math.min(a,s));const h=typeof(i==null?void 0:i.size)=="number"?i==null?void 0:i.size:null,l=Math.min(s,h!=null?r(h):a);if(l!==a){const o=e.width!==0&&e.height!==0?e.width/e.height:1;o>=1?(e.width=l,e.height=l/o):(e.width=l*o,e.height=l)}return e}export{p as previewWebStyleSymbol};
