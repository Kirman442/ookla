import{f0 as D,f1 as j,f2 as F,cN as L,bK as $,cT as k}from"./index-Bjl6Xt50.js";import{K as x,a as q,V as K}from"./CIMSymbolHelper-Ck2b1B4k.js";import{i as T}from"./CIMResourceManager-URPaSBSS.js";import"./BidiEngine-DL33fnW5.js";import"./fontUtils-B8bRB3Jd.js";import"./OptimizedGeometry-DLPswkPy.js";import"./GeometryUtils-BbBaKCIR.js";import"./enums-BRqP_wXA.js";import"./imageUtils-IM5A2mr-.js";const A=96/72;class U{constructor(a){this._spatialReference=a,this._imageDataCanvas=null,this._cimResourceManager=new T}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(a,o,r,l,i,t,s,y,v){if(!a)return null;const{data:g}=a;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g;t||(t=D(C));const c=await j.resolveSymbolOverrides(g,o,this._spatialReference,i,t,s,y),d=this._cimResourceManager,f=[];x.fetchResources(c,d,f),x.fetchFonts(c,d,f),f.length>0&&await Promise.all(f);const{width:n,height:h}=r,M=G(t,n,h,l),e=x.getEnvelope(c,M,d);if(!e)return null;let m=1,R=0,I=0;switch(C.type){case"CIMPointSymbol":case"CIMTextSymbol":{let w=1;e.width>n&&(w=n/e.width);let b=1;e.height>h&&(b=h/e.height),l==="preview"&&(e.width<n&&(w=n/e.width),e.height<h&&(b=h/e.height)),m=Math.min(w,b),R=e.x+e.width/2,I=e.y+e.height/2}break;case"CIMLineSymbol":{(v||e.height>h)&&(m=h/e.height),I=e.y+e.height/2;const w=e.x*m+n/2,b=(e.x+e.width)*m+n/2,{paths:S}=M;S[0][0][0]-=w/m,S[0][2][0]-=(b-n)/m}break;case"CIMPolygonSymbol":{R=e.x+e.width/2,I=e.y+e.height/2;const w=e.x*m+n/2,b=(e.x+e.width)*m+n/2,S=e.y*m+h/2,z=(e.y+e.height)*m+h/2,{rings:p}=M;w<0&&(p[0][0][0]-=w,p[0][3][0]-=w,p[0][4][0]-=w),S<0&&(p[0][0][1]+=S,p[0][1][1]+=S,p[0][4][1]+=S),b>n&&(p[0][1][0]-=b-n,p[0][2][0]-=b-n),z>h&&(p[0][2][1]+=z-h,p[0][3][1]+=z-h)}}const E={type:"cim",data:{type:"CIMSymbolReference",symbol:c}};return this.rasterize(E,n,h,R,I,m,t,1,M)}rasterize(a,o,r,l,i,t,s,y=0,v=null){const{data:g}=a;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g,c=this._canvas,d=(window.devicePixelRatio||1)*A;c.width=o*d,c.height=r*d,s||(s=D(C)),v||(v=G(s,o,r,"legend")),c.width+=2*y,c.height+=2*y;const f=c.getContext("2d",{willReadFrequently:!0}),n=K.createIdentity();return n.translate(-l,-i),n.scale(t*d,-t*d),n.translate(o*d/2+y,r*d/2+y),f.clearRect(0,0,c.width,c.height),new q(f,this._cimResourceManager,n,!0).drawSymbol(C,v),f.getImageData(0,0,c.width,c.height)}}function G(u,a,o,r){const i=-a/2+1,t=a/2-1,s=o/2-1,y=-o/2+1;switch(u){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[i,0],[0,0],[t,0]]]};default:return r==="legend"?{rings:[[[i,s],[t,0],[t,y],[i,y],[i,s]]]}:{rings:[[[i,s],[t,s],[t,y],[i,y],[i,s]]]}}}const _=new U(null),P=F(L.size),V=F(L.maxSize),O=F(L.lineWidth),N=1;async function W(u,a,o){const r=a==null?void 0:a.size;let l=r!=null&&typeof r=="object"&&"width"in r?r.width:r,i=r!=null&&typeof r=="object"&&"height"in r?r.height:r;if(l==null||i==null)if(o==="esriGeometryPolygon")l=P,i=P;else{const t=await B(u,a,o);t&&(l=t.width,i=t.height),o==="esriGeometryPolyline"&&(l=O),l=l!=null&&isFinite(l)?Math.min(l,V):P,i=i!=null&&isFinite(i)?Math.max(Math.min(i,V),N):P}return a.style==="legend"&&o==="esriGeometryPolyline"&&(l=O),{width:l,height:i}}async function B(u,a,o){const{feature:r,fieldMap:l,viewParams:i}=a.cimOptions||a,t=await j.resolveSymbolOverrides(u.data,r,null,l,o,null,i);if(!t)return null;(u=u.clone()).data={type:"CIMSymbolReference",symbol:t},u.data.primitiveOverrides=void 0;const s=[];return x.fetchResources(t,_.resourceManager,s),x.fetchFonts(t,_.resourceManager,s),s.length>0&&await Promise.all(s),x.getEnvelope(t,null,_.resourceManager)}async function ie(u,a={}){var R;const{node:o,opacity:r,symbolConfig:l}=a,i=l!=null&&typeof l=="object"&&"isSquareFill"in l&&l.isSquareFill,t=a.cimOptions||a,s=t.geometryType||D((R=u==null?void 0:u.data)==null?void 0:R.symbol),y=await W(u,a,s),{feature:v,fieldMap:g}=t,C=i||s!=="esriGeometryPolygon"?"preview":"legend",c=await _.rasterizeCIMSymbolAsync(u,v,y,C,g,s,null,t.viewParams,t.allowScalingUp);if(!c)return null;const{width:d,height:f}=c,n=document.createElement("canvas");n.width=d,n.height=f,n.getContext("2d").putImageData(c,0,0);const h=$(y.width),M=$(y.height),e=new Image(h,M);e.src=n.toDataURL(),e.ariaLabel=a.ariaLabel??null,e.alt=a.ariaLabel??"",r!=null&&(e.style.opacity=`${r}`);let m=e;if(a.effectView!=null){const I={shape:{type:"image",x:0,y:0,width:h,height:M,src:e.src},fill:null,stroke:null,offset:[0,0]};m=k([[I]],[h,M],{effectView:a.effectView,ariaLabel:a.ariaLabel})}return o&&m&&o.appendChild(m),m}export{ie as previewCIMSymbol};
