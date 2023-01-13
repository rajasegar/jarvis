/*! For license information please see chunk.370.ca64c9d0c6106cbcce0e.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[370],{9370:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a})
const a=async(e,t={},i=null)=>{t.fileName=t.fileName||"Untitled",i=i||await window.chooseFileSystemEntries({type:"save-file",accepts:[{description:t.description||"",mimeTypes:[e.type],extensions:t.extensions||[""]}]})
const a=await i.createWritable()
return await a.write(e),await a.close(),i}}}])
