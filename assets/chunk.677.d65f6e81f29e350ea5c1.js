/*! For license information please see chunk.677.d65f6e81f29e350ea5c1.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[677],{5677:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n})
const s=async e=>{const t=await e.getFile()
return t.handle=e,t},n=async(e={})=>{const t=await window.chooseFileSystemEntries({accepts:[{description:e.description||"",mimeTypes:e.mimeTypes||["*/*"],extensions:e.extensions||[""]}],multiple:e.multiple||!1})
return e.multiple?Promise.all(t.map(s)):s(t)}}}])
