import{d as ae,h as ne,j as S,k as re,l as ie,m as N,n as K}from"./dom-yu4NPNd9.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 *//*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function J(i,a){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);a&&(u=u.filter(function(b){return Object.getOwnPropertyDescriptor(i,b).enumerable})),o.push.apply(o,u)}return o}function Q(i){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?J(Object(o),!0).forEach(function(u){oe(i,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):J(Object(o)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(o,u))})}return i}function oe(i,a,o){return a=se(a),a in i?Object.defineProperty(i,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[a]=o,i}function ue(i,a){if(typeof i!="object"||i===null)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var u=o.call(i,a||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(i)}function se(i){var a=ue(i,"string");return typeof a=="symbol"?a:String(a)}var W={activateTrap:function(a,o){if(a.length>0){var u=a[a.length-1];u!==o&&u.pause()}var b=a.indexOf(o);b===-1||a.splice(b,1),a.push(o)},deactivateTrap:function(a,o){var u=a.indexOf(o);u!==-1&&a.splice(u,1),a.length>0&&a[a.length-1].unpause()}},ce=function(a){return a.tagName&&a.tagName.toLowerCase()==="input"&&typeof a.select=="function"},le=function(a){return(a==null?void 0:a.key)==="Escape"||(a==null?void 0:a.key)==="Esc"||(a==null?void 0:a.keyCode)===27},C=function(a){return(a==null?void 0:a.key)==="Tab"||(a==null?void 0:a.keyCode)===9},fe=function(a){return C(a)&&!a.shiftKey},de=function(a){return C(a)&&a.shiftKey},X=function(a){return setTimeout(a,0)},Z=function(a,o){var u=-1;return a.every(function(b,s){return o(b)?(u=s,!1):!0}),u},B=function(a){for(var o=arguments.length,u=new Array(o>1?o-1:0),b=1;b<o;b++)u[b-1]=arguments[b];return typeof a=="function"?a.apply(void 0,u):a},A=function(a){return a.target.shadowRoot&&typeof a.composedPath=="function"?a.composedPath()[0]:a.target},ve=[],be=function(a,o){var u=(o==null?void 0:o.document)||document,b=(o==null?void 0:o.trapStack)||ve,s=Q({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:fe,isKeyBackward:de},o),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},g,h=function(t,e,r){return t&&t[e]!==void 0?t[e]:s[r||e]},w=function(t,e){var r=typeof(e==null?void 0:e.composedPath)=="function"?e.composedPath():void 0;return n.containerGroups.findIndex(function(c){var l=c.container,d=c.tabbableNodes;return l.contains(t)||(r==null?void 0:r.includes(l))||d.find(function(v){return v===t})})},E=function(t){var e=s[t];if(typeof e=="function"){for(var r=arguments.length,c=new Array(r>1?r-1:0),l=1;l<r;l++)c[l-1]=arguments[l];e=e.apply(void 0,c)}if(e===!0&&(e=void 0),!e){if(e===void 0||e===!1)return e;throw new Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var d=e;if(typeof e=="string"&&(d=u.querySelector(e),!d))throw new Error("`".concat(t,"` as selector refers to no known node"));return d},k=function(){var t=E("initialFocus");if(t===!1)return!1;if(t===void 0||!S(t,s.tabbableOptions))if(w(u.activeElement)>=0)t=u.activeElement;else{var e=n.tabbableGroups[0],r=e&&e.firstTabbableNode;t=r||E("fallbackFocus")}if(!t)throw new Error("Your focus-trap needs to have at least one focusable element");return t},D=function(){if(n.containerGroups=n.containers.map(function(t){var e=re(t,s.tabbableOptions),r=ie(t,s.tabbableOptions),c=e.length>0?e[0]:void 0,l=e.length>0?e[e.length-1]:void 0,d=r.find(function(p){return N(p)}),v=r.slice().reverse().find(function(p){return N(p)}),m=!!e.find(function(p){return K(p)>0});return{container:t,tabbableNodes:e,focusableNodes:r,posTabIndexesFound:m,firstTabbableNode:c,lastTabbableNode:l,firstDomTabbableNode:d,lastDomTabbableNode:v,nextTabbableNode:function(T){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,y=e.indexOf(T);return y<0?O?r.slice(r.indexOf(T)+1).find(function(R){return N(R)}):r.slice(0,r.indexOf(T)).reverse().find(function(R){return N(R)}):e[y+(O?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(t){return t.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!E("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(t){return t.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},_=function f(t){var e=t.activeElement;if(e)return e.shadowRoot&&e.shadowRoot.activeElement!==null?f(e.shadowRoot):e},F=function f(t){if(t!==!1&&t!==_(document)){if(!t||!t.focus){f(k());return}t.focus({preventScroll:!!s.preventScroll}),n.mostRecentlyFocusedNode=t,ce(t)&&t.select()}},U=function(t){var e=E("setReturnFocus",t);return e||(e===!1?!1:t)},q=function(t){var e=t.target,r=t.event,c=t.isBackward,l=c===void 0?!1:c;e=e||A(r),D();var d=null;if(n.tabbableGroups.length>0){var v=w(e,r),m=v>=0?n.containerGroups[v]:void 0;if(v<0)l?d=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:d=n.tabbableGroups[0].firstTabbableNode;else if(l){var p=Z(n.tabbableGroups,function(I){var x=I.firstTabbableNode;return e===x});if(p<0&&(m.container===e||S(e,s.tabbableOptions)&&!N(e,s.tabbableOptions)&&!m.nextTabbableNode(e,!1))&&(p=v),p>=0){var T=p===0?n.tabbableGroups.length-1:p-1,O=n.tabbableGroups[T];d=K(e)>=0?O.lastTabbableNode:O.lastDomTabbableNode}else C(r)||(d=m.nextTabbableNode(e,!1))}else{var y=Z(n.tabbableGroups,function(I){var x=I.lastTabbableNode;return e===x});if(y<0&&(m.container===e||S(e,s.tabbableOptions)&&!N(e,s.tabbableOptions)&&!m.nextTabbableNode(e))&&(y=v),y>=0){var R=y===n.tabbableGroups.length-1?0:y+1,z=n.tabbableGroups[R];d=K(e)>=0?z.firstTabbableNode:z.firstDomTabbableNode}else C(r)||(d=m.nextTabbableNode(e))}}else d=E("fallbackFocus");return d},L=function(t){var e=A(t);if(!(w(e,t)>=0)){if(B(s.clickOutsideDeactivates,t)){g.deactivate({returnFocus:s.returnFocusOnDeactivate});return}B(s.allowOutsideClick,t)||t.preventDefault()}},H=function(t){var e=A(t),r=w(e,t)>=0;if(r||e instanceof Document)r&&(n.mostRecentlyFocusedNode=e);else{t.stopImmediatePropagation();var c,l=!0;if(n.mostRecentlyFocusedNode)if(K(n.mostRecentlyFocusedNode)>0){var d=w(n.mostRecentlyFocusedNode),v=n.containerGroups[d].tabbableNodes;if(v.length>0){var m=v.findIndex(function(p){return p===n.mostRecentlyFocusedNode});m>=0&&(s.isKeyForward(n.recentNavEvent)?m+1<v.length&&(c=v[m+1],l=!1):m-1>=0&&(c=v[m-1],l=!1))}}else n.containerGroups.some(function(p){return p.tabbableNodes.some(function(T){return K(T)>0})})||(l=!1);else l=!1;l&&(c=q({target:n.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(n.recentNavEvent)})),F(c||n.mostRecentlyFocusedNode||k())}n.recentNavEvent=void 0},ee=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=t;var r=q({event:t,isBackward:e});r&&(C(t)&&t.preventDefault(),F(r))},M=function(t){if(le(t)&&B(s.escapeDeactivates,t)!==!1){t.preventDefault(),g.deactivate();return}(s.isKeyForward(t)||s.isKeyBackward(t))&&ee(t,s.isKeyBackward(t))},Y=function(t){var e=A(t);w(e,t)>=0||B(s.clickOutsideDeactivates,t)||B(s.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())},V=function(){if(n.active)return W.activateTrap(b,g),n.delayInitialFocusTimer=s.delayInitialFocus?X(function(){F(k())}):F(k()),u.addEventListener("focusin",H,!0),u.addEventListener("mousedown",L,{capture:!0,passive:!1}),u.addEventListener("touchstart",L,{capture:!0,passive:!1}),u.addEventListener("click",Y,{capture:!0,passive:!1}),u.addEventListener("keydown",M,{capture:!0,passive:!1}),g},$=function(){if(n.active)return u.removeEventListener("focusin",H,!0),u.removeEventListener("mousedown",L,!0),u.removeEventListener("touchstart",L,!0),u.removeEventListener("click",Y,!0),u.removeEventListener("keydown",M,!0),g},te=function(t){var e=t.some(function(r){var c=Array.from(r.removedNodes);return c.some(function(l){return l===n.mostRecentlyFocusedNode})});e&&F(k())},j=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(te):void 0,P=function(){j&&(j.disconnect(),n.active&&!n.paused&&n.containers.map(function(t){j.observe(t,{subtree:!0,childList:!0})}))};return g={get active(){return n.active},get paused(){return n.paused},activate:function(t){if(n.active)return this;var e=h(t,"onActivate"),r=h(t,"onPostActivate"),c=h(t,"checkCanFocusTrap");c||D(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=u.activeElement,e==null||e();var l=function(){c&&D(),V(),P(),r==null||r()};return c?(c(n.containers.concat()).then(l,l),this):(l(),this)},deactivate:function(t){if(!n.active)return this;var e=Q({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},t);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,$(),n.active=!1,n.paused=!1,P(),W.deactivateTrap(b,g);var r=h(e,"onDeactivate"),c=h(e,"onPostDeactivate"),l=h(e,"checkCanReturnFocus"),d=h(e,"returnFocus","returnFocusOnDeactivate");r==null||r();var v=function(){X(function(){d&&F(U(n.nodeFocusedBeforeActivation)),c==null||c()})};return d&&l?(l(U(n.nodeFocusedBeforeActivation)).then(v,v),this):(v(),this)},pause:function(t){if(n.paused||!n.active)return this;var e=h(t,"onPause"),r=h(t,"onPostPause");return n.paused=!0,e==null||e(),$(),P(),r==null||r(),this},unpause:function(t){if(!n.paused||!n.active)return this;var e=h(t,"onUnpause"),r=h(t,"onPostUnpause");return n.paused=!1,e==null||e(),D(),V(),P(),r==null||r(),this},updateContainerElements:function(t){var e=[].concat(t).filter(Boolean);return n.containers=e.map(function(r){return typeof r=="string"?u.querySelector(r):r}),n.active&&D(),P(),this}},g.updateContainerElements(a),g};const G=globalThis.calciteConfig,pe=(G==null?void 0:G.focusTrapStack)||[];function he(i,a){const{el:o}=i,u=(a==null?void 0:a.focusTrapEl)||o;if(!u)return;const b={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:u,setReturnFocus:s=>(ae(s),!1),...a==null?void 0:a.focusTrapOptions,document:o.ownerDocument,tabbableOptions:ne,trapStack:pe};i.focusTrap=be(u,b)}function ge(i,a){var o;i.focusTrapDisabled||(o=i.focusTrap)==null||o.activate(a)}function ye(i,a){var o;(o=i.focusTrap)==null||o.deactivate(a)}function Fe(i){var a;(a=i.focusTrap)==null||a.updateContainerElements(i.el)}export{ge as a,he as c,ye as d,Fe as u};
