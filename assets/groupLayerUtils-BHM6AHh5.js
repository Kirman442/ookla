import{$ as l,j as y}from"./utils-nQB-f3dD.js";import{o as f}from"./jsonContext-CFQhnCK9.js";import{bs as v,b as d,f as s,i as I}from"./index-Bjl6Xt50.js";import{p as i}from"./resourceUtils-DhOa2e-y.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-bZXag55_.js";import"./saveUtils-uXQ2WBMY.js";import"./resourceUtils-Bt-gx2tO.js";const n="Group Layer",g="group-layer-save",A="group-layer-save-as",o=s.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function P(e){return{isValid:v(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function m(e,r){return{...f(e,"web-map",!0),initiator:r}}function u(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||(r.title=e.title),d(r,s.METADATA),I(r,o)}async function $(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:P,createJSONContext:t=>m(t,e),createItemData:u,errorNamePrefix:g,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function D(e,r,t){return y({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>m(a,e),createItemData:u,errorNamePrefix:A,newItem:r,setItemProperties:R,saveResources:(a,p)=>i(e.resourceReferences,p)},t)}export{$ as save,D as saveAs};
