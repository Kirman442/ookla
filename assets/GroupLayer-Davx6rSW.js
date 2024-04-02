function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/groupLayerUtils-BHM6AHh5.js","assets/utils-nQB-f3dD.js","assets/index-Bjl6Xt50.js","assets/index-DDC_OWQP.css","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/jsonContext-CFQhnCK9.js","assets/saveAPIKeyUtils-bZXag55_.js","assets/saveUtils-uXQ2WBMY.js","assets/resourceUtils-DhOa2e-y.js","assets/resourceUtils-Bt-gx2tO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{bi as u,bj as v,d3 as c,d4 as m,fn as f,fo as _,d5 as w,bd as g,fp as I,t as L,w as h,dw as O,fq as S,S as A,O as V,dC as $,fr as y,fs as P,n as r,y as l,dF as p,aJ as E,ft as M,aT as C,ee as b,o as T,bm as x,_ as j,k as G}from"./index-Bjl6Xt50.js";import{a as R}from"./lazyLayerLoader-AOu4yFjB.js";import{r as F}from"./saveUtils-uXQ2WBMY.js";const H=Symbol("WebScene");let s=class extends u(v(c(m(f(_(w(x))))))){constructor(e){super(e),this.allLayers=new g({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=I(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=L(async(i,t,a)=>{const{save:o,saveAs:n}=await j(()=>import("./groupLayerUtils-BHM6AHh5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));switch(i){case y.SAVE:return o(this,t);case y.SAVE_AS:return n(this,a,t)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([h(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&H in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(C(()=>this.tables,"before-add",t=>{t.preventDefault(),G.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},M),h(()=>this.visible,this._onVisibilityChange.bind(this),b)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===O.USER}_writeLayers(e,i,t,a){const o=[];if(!e)return o;e.forEach(n=>{const d=S(n,a.webmap?a.webmap.getLayerJSONFromResourceInfo(n):null,a);d!=null&&d.layerType&&o.push(d)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:a,layerType:o}=i;if(o==="GroupLayer"&&a)return new A({id:a,portal:t==null?void 0:t.portal})}writePortalItem(e,i){e!=null&&e.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return F(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:R},e).catch(t=>{if(V(t),this.sourceIsPortalItem)throw t});return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return $(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(y.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(y.SAVE_AS,i,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(h(()=>e.visible,i=>this._onChildVisibilityChange(e,i),b),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!P(this).initialized)return;const t=this.layers;let a=t.find(o=>o.visible);switch(e){case"exclusive":t.length&&!a&&(a=t.at(0),a.visible=!0),this._turnOffOtherLayers(a);break;case"inherited":t.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};r([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),r([l({readOnly:!0})],s.prototype,"allTables",void 0),r([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),r([l()],s.prototype,"fullExtent",void 0),r([l({readOnly:!0})],s.prototype,"sourceIsPortalItem",null),r([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),r([p("layers")],s.prototype,"_writeLayers",null),r([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),r([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:(e==null?void 0:e.type)==="Group Layer"&&(t==null?void 0:t.initiator)!==this}}}},"web-scene":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),r([E("web-map","portalItem",["itemId"])],s.prototype,"readPortalItem",null),r([p("web-map","portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),r([l()],s.prototype,"spatialReference",void 0),r([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),r([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{e!=="inherited"&&(i[t]=e)}}}}})],s.prototype,"visibilityMode",null),s=r([T("esri.layers.GroupLayer")],s);const J=s;export{J as default};