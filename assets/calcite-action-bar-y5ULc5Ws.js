import{J as h,M as H,H as T,I as D,e4 as O,K as B}from"./index-Bjl6Xt50.js";import{c as M,d as G}from"./conditionalSlot-Dv87AbmO.js";import{g as k,p as A,b as E,f as P}from"./dom-yu4NPNd9.js";import{a as $,s as q,c as I}from"./loadable-C_PM9B8w.js";import{u as R,c as W,a as F,s as _,d as U,b as j}from"./t9n-BHFI2vEa.js";import{c as y}from"./observers-BE5gl9Co.js";import{S as m,d as J}from"./action-group-C8xQxGoj.js";import{S as K,d as Q,a as V}from"./action-menu-B354CEwR.js";import{d as X}from"./action--I57a_3o.js";import{d as Y}from"./icon-w0SQ9tCt.js";import{d as Z}from"./loader-DdkQLGb_.js";import{d as N}from"./debounce-Bd3Yf8RP.js";import"./guid-Cgw_FQNn.js";import"./focusTrapComponent-DLgxRuJx.js";import"./openCloseComponent-9u0Rjv15.js";import"./component-CiBiWYk6.js";import"./interactive-DwBiffYe.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const ee=150,te=2,C=n=>n.reduce((e,t)=>e+t,0)/n.length,oe=n=>{const e=n.filter(o=>o.slot!==m.menuActions),t=e==null?void 0:e.length;return{actionWidth:t?C(e.map(o=>o.clientWidth||0)):0,actionHeight:t?C(e.map(o=>o.clientHeight||0)):0}},ne=({width:n,actionWidth:e,layout:t,height:o,actionHeight:i,groupCount:c})=>{const s=t==="horizontal"?n:o,a=t==="horizontal"?e:i;return Math.floor((s-c*te)/a)},se=({layout:n,actionCount:e,actionWidth:t,width:o,actionHeight:i,height:c,groupCount:s})=>Math.max(e-ne({width:o,actionWidth:t,layout:n,height:c,actionHeight:i,groupCount:s}),0),x=n=>Array.from(n.querySelectorAll("calcite-action")).filter(e=>e.closest("calcite-action-menu")?e.slot===K.trigger:!0),ie=({actionGroups:n,expanded:e,overflowCount:t})=>{let o=t;n.reverse().forEach(i=>{let c=0;const s=x(i).reverse();s.forEach(a=>{a.slot===m.menuActions&&(a.removeAttribute("slot"),a.textEnabled=e)}),o>0&&s.some(a=>(s.filter(u=>!u.slot).length>1&&s.length>2&&!a.closest("calcite-action-menu")&&(a.textEnabled=!0,a.setAttribute("slot",m.menuActions),c++,c>1&&o--),o<1)),H(i)})},w={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function ae(n,e){var t;return n||((t=e.closest("calcite-shell-panel"))==null?void 0:t.position)||"start"}function f({el:n,expanded:e}){x(n).filter(t=>t.slot!==m.menuActions).forEach(t=>t.textEnabled=e),n.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(t=>t.expanded=e)}const ce=({tooltip:n,referenceElement:e,expanded:t,ref:o})=>(n&&(n.referenceElement=!t&&e?e:null),o&&o(e),e),le=({expanded:n,expandText:e,collapseText:t,toggle:o,el:i,position:c,tooltip:s,ref:a,scale:l})=>{const u=k(i)==="rtl",r=n?t:e,d=[w.chevronsLeft,w.chevronsRight];u&&d.reverse();const p=ae(c,i)==="end",g=p?d[1]:d[0],b=p?d[0]:d[1];return h("calcite-action",{icon:n?g:b,onClick:o,scale:l,text:r,textEnabled:n,title:!n&&!s?r:null,ref:L=>ce({tooltip:s,referenceElement:L,expanded:n,ref:a})})};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const re={actionGroupEnd:"action-group--end"},v={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},de=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}",S=T(class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=O(this,"calciteActionBarToggle",6),this.mutationObserver=y("mutation",()=>{const{el:e,expanded:t}=this;f({el:e,expanded:t}),this.overflowActions()}),this.resizeObserver=y("resize",e=>this.resizeHandlerEntries(e)),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(o=>{t.includes(o)||(o.menuOpen=!1)})}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:o}=e.contentRect;this.resize({width:t,height:o})},this.resize=N(({width:e,height:t})=>{const{el:o,expanded:i,expandDisabled:c,layout:s,overflowActionsDisabled:a}=this;if(a||s==="vertical"&&!t||s==="horizontal"&&!e)return;const l=x(o),u=c?l.length:l.length+1,r=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(r);const d=this.hasActionsEnd||this.hasBottomActions||!c?r.length+1:r.length,{actionHeight:p,actionWidth:g}=oe(l),b=se({layout:s,actionCount:u,actionHeight:p,actionWidth:g,height:t,width:e,groupCount:d});ie({actionGroups:r,expanded:i,overflowCount:b})},ee),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=A(e).filter(o=>o.matches("calcite-action-group"));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=E(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=E(e)},this.handleTooltipSlotChange=e=>{const t=A(e).filter(o=>o==null?void 0:o.matches("calcite-tooltip"));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:e,expanded:t}=this;f({el:e,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(e){var t,o;if(e){(t=this.resizeObserver)==null||t.disconnect();return}(o=this.resizeObserver)==null||o.observe(this.el),this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){R(this,this.effectiveLocale)}componentDidLoad(){const{el:e,expanded:t}=this;$(this),f({el:e,expanded:t}),this.overflowActions()}connectedCallback(){var o,i;const{el:e,expanded:t}=this;W(this),F(this),f({el:e,expanded:t}),(o=this.mutationObserver)==null||o.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||(i=this.resizeObserver)==null||i.observe(e),this.overflowActions(),M(this)}async componentWillLoad(){q(this),await _(this)}disconnectedCallback(){var e,t;(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),G(this),U(this),j(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await I(this),P(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(t=>t.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,el:o,position:i,toggleExpand:c,scale:s,layout:a,messages:l,actionsEndGroupLabel:u,overlayPositioning:r}=this,d=t?null:h(le,{collapseText:l.collapse,el:o,expandText:l.expand,expanded:e,position:i,scale:s,toggle:c,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return h("calcite-action-group",{class:re.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:u,layout:a,overlayPositioning:r,scale:s},h("slot",{name:v.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),h("slot",{name:v.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),h("slot",{name:v.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),d)}render(){return h(B,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},h("slot",{onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return de}},[1,"calcite-action-bar",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],overlayPositioning:[513,"overlay-positioning"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hasActionsEnd:[32],hasBottomActions:[32],expandTooltip:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]},void 0,{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function z(){if(typeof customElements>"u")return;["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-bar":customElements.get(e)||customElements.define(e,S);break;case"calcite-action":customElements.get(e)||X();break;case"calcite-action-group":customElements.get(e)||J();break;case"calcite-action-menu":customElements.get(e)||V();break;case"calcite-icon":customElements.get(e)||Y();break;case"calcite-loader":customElements.get(e)||Z();break;case"calcite-popover":customElements.get(e)||Q();break}})}z();const De=S,Oe=z;export{De as CalciteActionBar,Oe as defineCustomElement};
