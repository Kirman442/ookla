import{n as a,y as h,eL as $,o as M,D as F,s as f,as as C,g as E,k as R,w as q,aS as L}from"./index-Bjl6Xt50.js";import{a as S}from"./BitmapContainer-CCRCOODh.js";import{m as U,u as V}from"./LayerView-B1EY5Mk-.js";import{v as W}from"./ExportStrategy-CtaejldP.js";import{i as A}from"./RefreshableLayerView-DjyCQlui.js";import{a as H}from"./ExportWMSImageParameters-eGf-mUoE.js";import"./WGLContainer-pYhwMxre.js";import"./LabelMetric-B3FZea_3.js";import"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import"./Texture-CHTf3W4N.js";import"./Program-CjY3cbxW.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-DSGaYS_i.js";import"./Container-C10zrCfD.js";import"./highlightReasons-Buzd4xt_.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./earcut-BP3RS8uO.js";import"./featureConversionUtils-DqJx4E2E.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-DLPswkPy.js";import"./Bitmap-CGxBoqhQ.js";const z=e=>{let t=class extends e{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(r,o){const{layer:s}=this;if(!r)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:d}=s;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(r);if(!i)return[];const{extent:p,width:n,height:m,x:c,y}=i;if(!(p&&n&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const g=await s.fetchFeatureInfo(p,n,m,c,y);return C(o),g}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h($)],t.prototype,"timeExtent",void 0),t=a([M("esri.layers.mixins.WMSLayerView")],t),t};let u=class extends z(A(U(V))){constructor(){super(...arguments),this.bitmapContainer=new S}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{E(t)||R.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new S,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:o,y:s}=e,{spatialReference:d}=t;let i,p=0,n=0;if(r.children.some(g=>{const{width:w,height:v,resolution:I,x:l,y:x}=g,P=l+I*w,b=x-I*v;return o>=l&&o<=P&&s<=x&&s>=b&&(i=new L({xmin:l,ymin:b,xmax:P,ymax:x,spatialReference:d}),p=w,n=v,!0)}),!i)return null;const m=i.width/p,c=Math.round((o-i.xmin)/m),y=Math.round((i.ymax-s)/m);return{extent:i,width:p,height:n,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,o){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...o})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([M("esri.views.2d.layers.WMSLayerView2D")],u);const mt=u;export{mt as default};
