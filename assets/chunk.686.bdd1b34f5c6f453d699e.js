/*! For license information please see chunk.686.bdd1b34f5c6f453d699e.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[686],{8686:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a})
const s=async e=>{const t=await e.getFile()
return t.handle=e,t},a=async(e={})=>{const t={}
e.mimeTypes?e.mimeTypes.map((i=>{t[i]=e.extensions||[]})):t["*/*"]=e.extensions||[]
const i=await window.showOpenFilePicker({types:[{description:e.description||"",accept:t}],multiple:e.multiple||!1}),a=await Promise.all(i.map(s))
return e.multiple?a:a[0]}}}])
