/*! For license information please see chunk.589.347cc121cfd24fb3ceb5.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[589],{4589:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n})
const s=async e=>{const t=await e.getFile()
return t.handle=e,t},n=async(e={})=>{const t=await window.chooseFileSystemEntries({accepts:[{description:e.description||"",mimeTypes:e.mimeTypes||["*/*"],extensions:e.extensions||[""]}],multiple:e.multiple||!1})
return e.multiple?Promise.all(t.map(s)):s(t)}}}])
