import{H as m,I as u,e4 as o,J as i,K as v}from"./index-Bjl6Xt50.js";import{b as g,t as a}from"./dom-yu4NPNd9.js";import{c as b,d as f}from"./conditionalSlot-Dv87AbmO.js";import{a as k,s as x,c as C}from"./loadable-C_PM9B8w.js";import{i as y,u as I,c as z,a as E,d as w,b as M,s as S}from"./t9n-BHFI2vEa.js";import{c as L,u as H,d as D,I as O}from"./interactive-DwBiffYe.js";import{c as T}from"./observers-BE5gl9Co.js";import{g as s}from"./component-CiBiWYk6.js";import{d as B}from"./icon-w0SQ9tCt.js";import"./guid-Cgw_FQNn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const t={title:"title",close:"close",imageContainer:"image-container",chipIcon:"chip-icon",textSlotted:"text--slotted",container:"container",imageSlotted:"image--slotted",closable:"closable",multiple:"multiple",selectable:"selectable",selectIcon:"select-icon",selectIconActive:"select-icon--active",nonInteractive:"non-interactive",isCircle:"is-circle"},K={image:"image"},c={close:"x",unchecked:"circle",checkedSingle:"circle-f",checked:"check-circle-f"},A=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-s-internal:0.25rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=s]) .close,:host([scale=s]) .select-icon--active{block-size:1rem;inline-size:1rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=s]) .container.is-circle{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-s-internal:0.375rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=m]) .close,:host([scale=m]) .image-container,:host([scale=m]) .select-icon--active{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]) .container.is-circle{block-size:2rem;inline-size:2rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-s-internal:0.5rem;--calcite-chip-spacing-l-internal:0.75rem}:host([scale=l]) .image-container,:host([scale=l]) .close,:host([scale=l]) .select-icon--active{block-size:2rem;inline-size:2rem}:host([scale=l]) .container.is-circle{block-size:2.75rem;inline-size:2.75rem}:host{display:inline-flex;cursor:default;border-radius:9999px}.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1);font-weight:var(--calcite-font-weight-medium);outline-color:transparent}.container:not(.is-circle){padding-inline:var(--calcite-chip-spacing-s-internal)}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .container.image--slotted{padding-inline-start:calc(0.125rem / 2)}:host([scale=s]) .container.is-circle{padding-inline:0}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:var(--calcite-chip-spacing-s-internal)}.container:not(.text--slotted) .title{display:none}.container:not(.image--slotted) .image-container{display:none}.container.closable{padding-inline-end:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted{padding-inline-start:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).image--slotted .image-container~.chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).selectable:not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.selectable):not(.text--slotted) .chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text-slotted).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container{margin-inline-end:0}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container~.chip-icon{margin-inline-start:calc(var(--calcite-chip-spacing-s-internal) * 2)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline:var(--calcite-chip-spacing-s-internal)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none}.close{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-color-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-color-transparent-hover);--calcite-chip-transparent-press:var(--calcite-color-transparent-press)}.close:hover{background-color:var(--calcite-chip-transparent-hover)}.close:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.close:active{background-color:var(--calcite-chip-transparent-press)}.close calcite-icon{color:inherit}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:relative;visibility:hidden;inline-size:0;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out}.select-icon.select-icon--active{visibility:visible;opacity:0.5}.container:not(.is-circle).image--slotted .select-icon.select-icon--active{margin-inline-end:var(--calcite-chip-spacing-s-internal)}:host([selected]) .select-icon{opacity:1}.container:hover .select-icon--active{opacity:1}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}:host([kind=neutral]){background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host([kind=neutral]) .container{border-color:transparent}:host([kind=neutral]) .close{color:var(--calcite-color-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-3))}:host([kind=inverse]){background-color:var(--calcite-color-inverse);color:var(--calcite-color-text-inverse)}:host([kind=inverse]) .container{border-color:transparent}:host([kind=inverse]) .close{color:var(--calcite-color-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-inverse))}:host([kind=brand]){background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([kind=brand]) .container{border-color:transparent}:host([kind=brand]) .close{color:var(--calcite-color-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1)}:host([appearance=outline-fill]) .close,:host([appearance=outline]) .close{color:var(--calcite-color-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-color-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]) .container,:host([kind=neutral][appearance=outline]) .container{border-color:var(--calcite-color-border-1)}:host([kind=inverse][appearance=outline-fill]) .container,:host([kind=inverse][appearance=outline]) .container{border-color:var(--calcite-color-border-inverse)}:host([kind=brand][appearance=outline-fill]) .container,:host([kind=brand][appearance=outline]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-color-text-inverse)}:host([closed]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,l=m(class extends u{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipClose=o(this,"calciteChipClose",6),this.calciteChipSelect=o(this,"calciteChipSelect",6),this.calciteInternalChipKeyEvent=o(this,"calciteInternalChipKeyEvent",6),this.mutationObserver=T("mutation",()=>this.updateHasText()),this.close=()=>{this.calciteChipClose.emit(),this.selected=!1,this.closed=!0},this.closeButtonKeyDownHandler=e=>{y(e.key)&&(e.preventDefault(),this.close())},this.handleSlotImageChange=e=>{this.hasImage=g(e)},this.handleEmittingEvent=()=>{this.interactive&&this.calciteChipSelect.emit()},this.disabled=!1,this.appearance="solid",this.kind="neutral",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.label=void 0,this.value=void 0,this.closed=!1,this.selectionMode="none",this.selected=!1,this.messageOverrides=void 0,this.messages=void 0,this.interactive=!1,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1,this.hasImage=!1}onMessagesChange(){}effectiveLocaleChange(){I(this,this.effectiveLocale)}connectedCallback(){var e;b(this),L(this),z(this),E(this),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}componentDidLoad(){k(this)}componentDidRender(){H(this)}disconnectedCallback(){var e;f(this),D(this),w(this),M(this),(e=this.mutationObserver)==null||e.disconnect()}async componentWillLoad(){x(this),await S(this),this.updateHasText()}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleEmittingEvent(),e.preventDefault();break;case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalChipKeyEvent.emit(e),e.preventDefault();break}}clickHandler(){!this.interactive&&this.closable&&this.closeButtonEl.focus()}async setFocus(){var e,n;await C(this),!this.disabled&&this.interactive?(e=this.containerEl)==null||e.focus():!this.disabled&&this.closable&&((n=this.closeButtonEl)==null||n.focus())}updateHasText(){this.hasText=this.el.textContent.trim().length>0}renderChipImage(){return i("div",{class:t.imageContainer},i("slot",{name:K.image,onSlotchange:this.handleSlotImageChange}))}renderSelectionIcon(){const e=this.selectionMode==="multiple"&&this.selected?c.checked:this.selectionMode==="multiple"?c.unchecked:this.selected?c.checkedSingle:void 0;return i("div",{class:{[t.selectIcon]:!0,[t.selectIconActive]:this.selectionMode==="multiple"||this.selected}},e?i("calcite-icon",{icon:e,scale:s(this.scale)}):null)}renderCloseButton(){return i("button",{"aria-label":this.messages.dismissLabel,class:t.close,onClick:this.close,onKeyDown:this.closeButtonKeyDownHandler,tabIndex:this.disabled?-1:0,ref:e=>this.closeButtonEl=e},i("calcite-icon",{icon:c.close,scale:s(this.scale)}))}renderIcon(){return i("calcite-icon",{class:t.chipIcon,flipRtl:this.iconFlipRtl,icon:this.icon,scale:s(this.scale)})}render(){const{disabled:e}=this,n=e||!e&&!this.interactive,h=this.selectionMode==="multiple"&&this.interactive?"checkbox":this.selectionMode!=="none"&&this.interactive?"radio":this.interactive?"button":void 0;return i(v,null,i(O,{disabled:e},i("div",{"aria-checked":this.selectionMode!=="none"&&this.interactive?a(this.selected):void 0,"aria-disabled":n?a(e):void 0,"aria-label":this.label,class:{[t.container]:!0,[t.textSlotted]:this.hasText,[t.imageSlotted]:this.hasImage,[t.selectable]:this.selectionMode!=="none",[t.multiple]:this.selectionMode==="multiple",[t.closable]:this.closable,[t.nonInteractive]:!this.interactive,[t.isCircle]:!this.closable&&!this.hasText&&(!this.icon||!this.hasImage)&&(this.selectionMode==="none"||!!this.selectionMode&&this.selectionMode!=="multiple"&&!this.selected)},onClick:this.handleEmittingEvent,role:h,tabIndex:n?-1:0,ref:p=>this.containerEl=p},this.selectionMode!=="none"&&this.renderSelectionIcon(),this.renderChipImage(),this.icon&&this.renderIcon(),i("span",{class:t.title},i("slot",null)),this.closable&&this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return A}},[1,"calcite-chip",{disabled:[516],appearance:[513],kind:[513],closable:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],label:[1],value:[8],closed:[1540],selectionMode:[1,"selection-mode"],selected:[1540],messageOverrides:[1040],messages:[1040],interactive:[4],defaultMessages:[32],effectiveLocale:[32],hasText:[32],hasImage:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"],[0,"click","clickHandler"]],{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function r(){if(typeof customElements>"u")return;["calcite-chip","calcite-icon"].forEach(e=>{switch(e){case"calcite-chip":customElements.get(e)||customElements.define(e,l);break;case"calcite-icon":customElements.get(e)||B();break}})}r();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const Q=l,V=r;export{Q as CalciteChip,V as defineCustomElement};
