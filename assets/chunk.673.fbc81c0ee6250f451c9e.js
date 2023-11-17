/*! For license information please see chunk.673.fbc81c0ee6250f451c9e.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[673],{8673:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i})
const a=async(e,t,r=e.name)=>{const i=[],o=[]
for await(const s of e.values()){const e=`${r}/${s.name}`
"file"===s.kind?o.push(s.getFile().then((t=>Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>e})))):"directory"===s.kind&&t&&i.push(a(s,t,e))}return[...(await Promise.all(i)).flat(),...await Promise.all(o)]},i=async(e={})=>{e.recursive=e.recursive||!1
const t=await window.showDirectoryPicker()
return a(t,e.recursive)}}}])
