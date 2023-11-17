/*! For license information please see chunk.261.d50e19339ea6ab059be5.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[261],{4261:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s})
const s=async(e={})=>new Promise((t=>{const i=document.createElement("input")
i.type="file"
const s=[...e.mimeTypes?e.mimeTypes:[],e.extensions?e.extensions:[]].join()
i.multiple=e.multiple||!1,i.accept=s||"*/*",i.addEventListener("change",(()=>{t(i.multiple?i.files:i.files[0])})),i.click()}))}}])
