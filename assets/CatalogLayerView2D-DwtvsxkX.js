import{V as n,n as r,y as a,o}from"./index-Bjl6Xt50.js";import{m as s,u as l}from"./LayerView-B1EY5Mk-.js";import"./Container-C10zrCfD.js";import"./highlightReasons-Buzd4xt_.js";import"./enums-CYMvjYBC.js";import"./Texture-CHTf3W4N.js";let i=class extends s(l){constructor(){super(...arguments),this.layerViews=new n}get dynamicGroupLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.footprintLayer)})}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}isUpdating(){return this.layerViews.some(e=>e.updating)}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};r([a()],i.prototype,"dynamicGroupLayerView",null),r([a()],i.prototype,"footprintLayerView",null),r([a()],i.prototype,"layerViews",void 0),i=r([o("esri.views.2d.layers.CatalogLayerView2D")],i);const c=i;export{c as default};