import{n as s,y as n,o as l,bx as h,dA as i,cg as f,e_ as g,ax as S,bv as y,U as R,e$ as w}from"./index-Bjl6Xt50.js";let e=class extends h{constructor(o){super(o),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const o=this.geometries.map(a=>a.toJSON()),t=this.geometries[0],r={};return r.outSR=i(this.outSpatialReference),r.inSR=i(t.spatialReference),r.geometries=JSON.stringify({geometryType:f(t),geometries:o}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(r.transformForward=this.transformForward),r}};s([n()],e.prototype,"geometries",void 0),s([n({json:{read:{source:"outSR"}}})],e.prototype,"outSpatialReference",void 0),s([n()],e.prototype,"transformation",void 0),s([n()],e.prototype,"transformForward",void 0),e=s([l("esri.rest.support.ProjectParameters")],e);const $=e,j=g($);async function F(o,t,r){t=j(t);const a=S(o),p={...a.query,f:"json",...t.toJSON()},c=t.outSpatialReference,m=f(t.geometries[0]),u=y(p,r);return R(a.path+"/project",u).then(({data:{geometries:d}})=>w(d,m,c))}export{F as n,$ as p};