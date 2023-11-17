/*! For license information please see chunk.147.79436b0744b7c494c824.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[147],{5147:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a})
const a=async(e,t={},i=null)=>{t.fileName=t.fileName||"Untitled",i=i||await window.chooseFileSystemEntries({type:"save-file",accepts:[{description:t.description||"",mimeTypes:[e.type],extensions:t.extensions||[""]}]})
const a=await i.createWritable()
return await a.write(e),await a.close(),i}}}])
