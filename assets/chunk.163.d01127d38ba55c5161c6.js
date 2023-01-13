/*! For license information please see chunk.163.d01127d38ba55c5161c6.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[163],{4163:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a})
const i=async(e,t,r=e.name)=>{const a=[],s=[]
for await(const o of e.getEntries()){const e=`${r}/${o.name}`
o.isFile?s.push(o.getFile().then((t=>Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>e})))):o.isDirectory&&t&&a.push(i(o,t,e))}return[...(await Promise.all(a)).flat(),...await Promise.all(s)]},a=async(e={})=>{e.recursive=e.recursive||!1
const t=await window.chooseFileSystemEntries({type:"open-directory"})
return i(t,e.recursive)}}}])
