/*! For license information please see chunk.863.1328244933843385ca9b.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[863],{9863:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a})
const a=async(e,t={},i=null)=>{t.fileName=t.fileName||"Untitled"
const a={}
t.mimeTypes?(t.mimeTypes.push(e.type),t.mimeTypes.map((e=>{a[e]=t.extensions||[]}))):a[e.type]=t.extensions||[],i=i||await window.showSaveFilePicker({types:[{description:t.description||"",accept:a}]})
const s=await i.createWritable()
return await s.write(e),await s.close(),i}}}])
