/*! For license information please see chunk.653.366c51593e5b29961dae.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[653],{6653:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a})
const i=async(e,t,r=e.name)=>{const a=[],s=[]
for await(const o of e.getEntries()){const e=`${r}/${o.name}`
o.isFile?s.push(o.getFile().then((t=>Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>e})))):o.isDirectory&&t&&a.push(i(o,t,e))}return[...(await Promise.all(a)).flat(),...await Promise.all(s)]},a=async(e={})=>{e.recursive=e.recursive||!1
const t=await window.chooseFileSystemEntries({type:"open-directory"})
return i(t,e.recursive)}}}])
