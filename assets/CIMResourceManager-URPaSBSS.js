import{c as s}from"./fontUtils-B8bRB3Jd.js";import{p as o}from"./imageUtils-IM5A2mr-.js";class g{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,r){const h=this._resourceMap.get(e);if(h)return{width:h.width,height:h.height};let i=this._inFlightResourceMap.get(e);return i?i.then(t=>({width:t.width,height:t.height})):(i=o(e,r),this._inFlightResourceMap.set(e,i),i.then(t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height}),()=>({width:0,height:0})))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return s(e)}}export{g as i};
