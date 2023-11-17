"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[376],{3334:(t,e,r)=>{r.r(e),r.d(e,{AST:()=>s,ASTv1:()=>s,ASTv2:()=>n,BlockSymbolTable:()=>yr,KEYWORDS_TYPES:()=>$r,Path:()=>tr,ProgramSymbolTable:()=>br,Source:()=>V,SourceSlice:()=>k,SourceSpan:()=>_,SpanList:()=>dt,SymbolTable:()=>gr,Walker:()=>tr,WalkerPath:()=>ze,builders:()=>Y,cannotRemoveNode:()=>Fe,cannotReplaceNode:()=>Ue,generateSyntaxError:()=>Ve,getTemplateLocals:()=>Ur,hasSpan:()=>ft,isKeyword:()=>Rr,loc:()=>mt,maybeLoc:()=>gt,node:()=>nt,normalize:()=>Ar,preprocess:()=>fr,print:()=>He,sortByLoc:()=>zt,traverse:()=>Xe})
var s={}
r.r(s)
var n={}
r.r(n),r.d(n,{ARGUMENT_RESOLUTION:()=>rt,AppendContent:()=>kt,ArgReference:()=>Dt,Args:()=>at,Block:()=>Ot,CallExpression:()=>Nt,ComponentArg:()=>ut,DeprecatedCallExpression:()=>At,ElementModifier:()=>pt,FreeVarReference:()=>_t,GlimmerComment:()=>bt,HtmlAttr:()=>ct,HtmlComment:()=>vt,HtmlText:()=>yt,InterpolateExpression:()=>Lt,InvokeBlock:()=>wt,InvokeComponent:()=>St,LiteralExpression:()=>Pt,LocalVarReference:()=>Bt,LooseModeResolution:()=>et,NamedArgument:()=>lt,NamedArguments:()=>ot,NamedBlock:()=>Ht,NamedBlocks:()=>It,PathExpression:()=>xt,PositionalArguments:()=>it,STRICT_RESOLUTION:()=>tt,SimpleElement:()=>Et,SplatAttr:()=>ht,StrictResolution:()=>X,Template:()=>qt,ThisReference:()=>Ct,isLiteral:()=>Tt,loadResolution:()=>st,node:()=>nt})
var a={}
r.r(a),r.d(a,{SourceLocation:()=>pe,id:()=>de,prepareBlock:()=>ve,prepareMustache:()=>be,preparePartialBlock:()=>we,preparePath:()=>ge,prepareProgram:()=>ke,prepareRawBlock:()=>ye,stripComment:()=>fe,stripFlags:()=>me})
const i=Object.freeze([])
function o(){return i}function l(){return Object.create(null)}var c
o(),o()
const{keys:h}=Object
let u=null!==(c=Object.assign)&&void 0!==c?c:function(t){for(let e=1;e<arguments.length;e++){let r=arguments[e]
if(null===r||"object"!=typeof r)continue
let s=h(r)
for(let e=0;e<s.length;e++){let n=s[e]
t[n]=r[n]}}return t}
const p=(...t)=>t
function d(t){return t.length>0}function m(t,e="unexpected empty list"){if(!d(t))throw new Error(e)}"function"==typeof Symbol&&"symbol"==typeof Symbol()&&Symbol,[1,2,3].forEach((t=>t)),[1,-1].forEach((t=>{return function(t){return(t|=0)>-536870913?function(t){return~t}(t):function(t){return 536870912|t}(t)}((e=t,(e|=0)<0?function(t){return-536870913&t}(e):function(t){return~t}(e)))
var e})),"function"==typeof WeakSet&&WeakSet,console
const f=console,g=Object.freeze({line:1,column:0}),b=Object.freeze({source:"(synthetic)",start:g,end:g}),y=(Object.freeze({source:"(temporary)",start:g,end:g}),Object.freeze({source:"(nonexistent)",start:g,end:g})),v=Object.freeze({source:"(broken)",start:g,end:g})
class k{constructor(t){this.loc=t.loc,this.chars=t.chars}static synthetic(t){let e=_.synthetic(t)
return new k({loc:e,chars:t})}static load(t,e){return new k({loc:_.load(t,e[1]),chars:e[0]})}getString(){return this.chars}serialize(){return[this.chars,this.loc.serialize()]}}const w="MATCH_ANY",S="IS_INVISIBLE"
class E{constructor(t){this._whens=t}first(t){for(let e of this._whens){let r=e.match(t)
if(d(r))return r[0]}return null}}class P{constructor(){this._map=new Map}get(t,e){let r=this._map.get(t)
return r||(r=e(),this._map.set(t,r),r)}add(t,e){this._map.set(t,e)}match(t){let e=function(t){switch(t){case"Broken":case"InternalsSynthetic":case"NonExistent":return S
default:return t}}(t),r=[],s=this._map.get(e),n=this._map.get(w)
return s&&r.push(s),n&&r.push(n),r}}function T(t){return t(new x).check()}class x{constructor(){this._whens=new P}check(){return(t,e)=>this.matchFor(t.kind,e.kind)(t,e)}matchFor(t,e){let r=this._whens.match(t)
return new E(r).first(e)}when(t,e,r){return this._whens.get(t,(()=>new P)).add(e,r),this}}const N="BROKEN"
class A{constructor(t){this.data=t}static forHbsPos(t,e){return new C(t,e,null).wrap()}static broken(t=g){return new D("Broken",t).wrap()}get offset(){let t=this.data.toCharPos()
return null===t?null:t.offset}eql(t){return B(this.data,t.data)}until(t){return H(this.data,t.data)}move(t){let e=this.data.toCharPos()
if(null===e)return A.broken()
{let r=e.offset+t
return e.source.check(r)?new L(e.source,r).wrap():A.broken()}}collapsed(){return H(this.data,this.data)}toJSON(){return this.data.toJSON()}}class L{constructor(t,e){this.source=t,this.charPos=e,this.kind="CharPosition",this._locPos=null}toCharPos(){return this}toJSON(){let t=this.toHbsPos()
return null===t?g:t.toJSON()}wrap(){return new A(this)}get offset(){return this.charPos}toHbsPos(){let t=this._locPos
if(null===t){let e=this.source.hbsPosFor(this.charPos)
this._locPos=t=null===e?N:new C(this.source,e,this.charPos)}return t===N?null:t}}class C{constructor(t,e,r=null){this.source=t,this.hbsPos=e,this.kind="HbsPosition",this._charPos=null===r?null:new L(t,r)}toCharPos(){let t=this._charPos
if(null===t){let e=this.source.charPosFor(this.hbsPos)
this._charPos=t=null===e?N:new L(this.source,e)}return t===N?null:t}toJSON(){return this.hbsPos}wrap(){return new A(this)}toHbsPos(){return this}}class D{constructor(t,e){this.kind=t,this.pos=e}toCharPos(){return null}toJSON(){return this.pos}wrap(){return new A(this)}get offset(){return null}}const B=T((t=>t.when("HbsPosition","HbsPosition",(({hbsPos:t},{hbsPos:e})=>t.column===e.column&&t.line===e.line)).when("CharPosition","CharPosition",(({charPos:t},{charPos:e})=>t===e)).when("CharPosition","HbsPosition",(({offset:t},e)=>{var r
return t===(null===(r=e.toCharPos())||void 0===r?void 0:r.offset)})).when("HbsPosition","CharPosition",((t,{offset:e})=>{var r
return(null===(r=t.toCharPos())||void 0===r?void 0:r.offset)===e})).when(w,w,(()=>!1))))
class _{constructor(t){this.data=t,this.isInvisible="CharPosition"!==t.kind&&"HbsPosition"!==t.kind}static get NON_EXISTENT(){return new I("NonExistent",y).wrap()}static load(t,e){return"number"==typeof e?_.forCharPositions(t,e,e):"string"==typeof e?_.synthetic(e):Array.isArray(e)?_.forCharPositions(t,e[0],e[1]):"NonExistent"===e?_.NON_EXISTENT:"Broken"===e?_.broken(v):void function(t,e="unexpected unreachable branch"){throw f.log("unreachable",t),f.log(`${e} :: ${JSON.stringify(t)} (${t})`),new Error("code reached unreachable")}(e)}static forHbsLoc(t,e){let r=new C(t,e.start),s=new C(t,e.end)
return new O(t,{start:r,end:s},e).wrap()}static forCharPositions(t,e,r){let s=new L(t,e),n=new L(t,r)
return new q(t,{start:s,end:n}).wrap()}static synthetic(t){return new I("InternalsSynthetic",y,t).wrap()}static broken(t=v){return new I("Broken",t).wrap()}getStart(){return this.data.getStart().wrap()}getEnd(){return this.data.getEnd().wrap()}get loc(){let t=this.data.toHbsSpan()
return null===t?v:t.toHbsLoc()}get module(){return this.data.getModule()}get startPosition(){return this.loc.start}get endPosition(){return this.loc.end}toJSON(){return this.loc}withStart(t){return H(t.data,this.data.getEnd())}withEnd(t){return H(this.data.getStart(),t.data)}asString(){return this.data.asString()}toSlice(t){let e=this.data.asString()
return new k({loc:this,chars:t||e})}get start(){return this.loc.start}set start(t){this.data.locDidUpdate({start:t})}get end(){return this.loc.end}set end(t){this.data.locDidUpdate({end:t})}get source(){return this.module}collapse(t){switch(t){case"start":return this.getStart().collapsed()
case"end":return this.getEnd().collapsed()}}extend(t){return H(this.data.getStart(),t.data.getEnd())}serialize(){return this.data.serialize()}slice({skipStart:t=0,skipEnd:e=0}){return H(this.getStart().move(t).data,this.getEnd().move(-e).data)}sliceStartChars({skipStart:t=0,chars:e}){return H(this.getStart().move(t).data,this.getStart().move(t+e).data)}sliceEndChars({skipEnd:t=0,chars:e}){return H(this.getEnd().move(t-e).data,this.getStart().move(-t).data)}}class q{constructor(t,e){this.source=t,this.charPositions=e,this.kind="CharPosition",this._locPosSpan=null}wrap(){return new _(this)}asString(){return this.source.slice(this.charPositions.start.charPos,this.charPositions.end.charPos)}getModule(){return this.source.module}getStart(){return this.charPositions.start}getEnd(){return this.charPositions.end}locDidUpdate(){}toHbsSpan(){let t=this._locPosSpan
if(null===t){let e=this.charPositions.start.toHbsPos(),r=this.charPositions.end.toHbsPos()
t=this._locPosSpan=null===e||null===r?N:new O(this.source,{start:e,end:r})}return t===N?null:t}serialize(){let{start:{charPos:t},end:{charPos:e}}=this.charPositions
return t===e?t:[t,e]}toCharPosSpan(){return this}}class O{constructor(t,e,r=null){this.source=t,this.hbsPositions=e,this.kind="HbsPosition",this._charPosSpan=null,this._providedHbsLoc=r}serialize(){let t=this.toCharPosSpan()
return null===t?"Broken":t.wrap().serialize()}wrap(){return new _(this)}updateProvided(t,e){this._providedHbsLoc&&(this._providedHbsLoc[e]=t),this._charPosSpan=null,this._providedHbsLoc={start:t,end:t}}locDidUpdate({start:t,end:e}){void 0!==t&&(this.updateProvided(t,"start"),this.hbsPositions.start=new C(this.source,t,null)),void 0!==e&&(this.updateProvided(e,"end"),this.hbsPositions.end=new C(this.source,e,null))}asString(){let t=this.toCharPosSpan()
return null===t?"":t.asString()}getModule(){return this.source.module}getStart(){return this.hbsPositions.start}getEnd(){return this.hbsPositions.end}toHbsLoc(){return{start:this.hbsPositions.start.hbsPos,end:this.hbsPositions.end.hbsPos}}toHbsSpan(){return this}toCharPosSpan(){let t=this._charPosSpan
if(null===t){let e=this.hbsPositions.start.toCharPos(),r=this.hbsPositions.end.toCharPos()
if(!e||!r)return t=this._charPosSpan=N,null
t=this._charPosSpan=new q(this.source,{start:e,end:r})}return t===N?null:t}}class I{constructor(t,e,r=null){this.kind=t,this.loc=e,this.string=r}serialize(){switch(this.kind){case"Broken":case"NonExistent":return this.kind
case"InternalsSynthetic":return this.string||""}}wrap(){return new _(this)}asString(){return this.string||""}locDidUpdate({start:t,end:e}){void 0!==t&&(this.loc.start=t),void 0!==e&&(this.loc.end=e)}getModule(){return"an unknown module"}getStart(){return new D(this.kind,this.loc.start)}getEnd(){return new D(this.kind,this.loc.end)}toCharPosSpan(){return this}toHbsSpan(){return null}toHbsLoc(){return v}}const H=T((t=>t.when("HbsPosition","HbsPosition",((t,e)=>new O(t.source,{start:t,end:e}).wrap())).when("CharPosition","CharPosition",((t,e)=>new q(t.source,{start:t,end:e}).wrap())).when("CharPosition","HbsPosition",((t,e)=>{let r=e.toCharPos()
return null===r?new I("Broken",v).wrap():H(t,r)})).when("HbsPosition","CharPosition",((t,e)=>{let r=t.toCharPos()
return null===r?new I("Broken",v).wrap():H(r,e)})).when(S,w,(t=>new I(t.kind,v).wrap())).when(w,S,((t,e)=>new I(e.kind,v).wrap()))))
class V{constructor(t,e="an unknown module"){this.source=t,this.module=e}check(t){return t>=0&&t<=this.source.length}slice(t,e){return this.source.slice(t,e)}offsetFor(t,e){return A.forHbsPos(this,{line:t,column:e})}spanFor({start:t,end:e}){return _.forHbsLoc(this,{start:{line:t.line,column:t.column},end:{line:e.line,column:e.column}})}hbsPosFor(t){let e=0,r=0
if(t>this.source.length)return null
for(;;){let s=this.source.indexOf("\n",r)
if(t<=s||-1===s)return{line:e+1,column:t-r}
e+=1,r=s+1}}charPosFor(t){let{line:e,column:r}=t,s=this.source.length,n=0,a=0
for(;;){if(a>=s)return s
let t=this.source.indexOf("\n",a)
if(-1===t&&(t=this.source.length),n===e-1)return a+r>t?t:a+r
if(-1===t)return 0
n+=1,a=t+1}}}class R{constructor(t,e,r,s){this.original=t,this.loc=s,this.type="PathExpression",this.this=!1,this.data=!1,this._head=void 0
let n=r.slice()
"ThisHead"===e.type?this.this=!0:"AtHead"===e.type?(this.data=!0,n.unshift(e.name.slice(1))):n.unshift(e.name),this.parts=n}get head(){if(this._head)return this._head
let t
t=this.this?"this":this.data?`@${this.parts[0]}`:this.parts[0]
let e=this.loc.collapse("start").sliceStartChars({chars:t.length}).loc
return this._head=Y.head(t,e)}get tail(){return this.this?this.parts:this.parts.slice(1)}}let $
function F(){return $||($=new V("","(synthetic)")),$}function U(t){switch(t.type){case"AtHead":case"VarHead":return{original:t.name,parts:[t.name]}
case"ThisHead":return{original:"this",parts:[]}}}function M(t,e){let r,[s,...n]=t.split(".")
return r="this"===s?{type:"ThisHead",loc:Q(e||null)}:"@"===s[0]?{type:"AtHead",name:s,loc:Q(e||null)}:{type:"VarHead",name:s,loc:Q(e||null)},{head:r,tail:n}}function z(t){return{type:"ThisHead",loc:Q(t||null)}}function j(t,e){return{type:"AtHead",name:t,loc:Q(e||null)}}function G(t,e){return{type:"VarHead",name:t,loc:Q(e||null)}}function W(t,e){if("string"!=typeof t){if("type"in t)return t
{let{head:r,tail:s}=M(t.head,_.broken()),{original:n}=U(r)
return new R([n,...s].join("."),r,s,Q(e||null))}}let{head:r,tail:s}=M(t,_.broken())
return new R(t,r,s,Q(e||null))}function K(t,e,r){return{type:t,value:e,original:e,loc:Q(r||null)}}function J(t,e){return{type:"Hash",pairs:t||[],loc:Q(e||null)}}function Q(...t){if(1===t.length){let e=t[0]
return e&&"object"==typeof e?_.forHbsLoc(F(),e):_.forHbsLoc(F(),b)}{let[e,r,s,n,a]=t,i=a?new V("",a):F()
return _.forHbsLoc(i,{start:{line:e,column:r},end:{line:s,column:n}})}}const Y={mustache:function(t,e,r,s,n,a){return"string"==typeof t&&(t=W(t)),{type:"MustacheStatement",path:t,params:e||[],hash:r||J([]),escaped:!s,trusting:!!s,loc:Q(n||null),strip:a||{open:!1,close:!1}}},block:function(t,e,r,s,n,a,i,o,l){let c,h
return c="Template"===s.type?u({},s,{type:"Block"}):s,h=null!=n&&"Template"===n.type?u({},n,{type:"Block"}):n,{type:"BlockStatement",path:W(t),params:e||[],hash:r||J([]),program:c||null,inverse:h||null,loc:Q(a||null),openStrip:i||{open:!1,close:!1},inverseStrip:o||{open:!1,close:!1},closeStrip:l||{open:!1,close:!1}}},partial:function(t,e,r,s,n){return{type:"PartialStatement",name:t,params:e||[],hash:r||J([]),indent:s||"",strip:{open:!1,close:!1},loc:Q(n||null)}},comment:function(t,e){return{type:"CommentStatement",value:t,loc:Q(e||null)}},mustacheComment:function(t,e){return{type:"MustacheCommentStatement",value:t,loc:Q(e||null)}},element:function(t,e){let r,{attrs:s,blockParams:n,modifiers:a,comments:i,children:o,loc:l}=e,c=!1
return"object"==typeof t?(c=t.selfClosing,r=t.name):"/"===t.slice(-1)?(r=t.slice(0,-1),c=!0):r=t,{type:"ElementNode",tag:r,selfClosing:c,attributes:s||[],blockParams:n||[],modifiers:a||[],comments:i||[],children:o||[],loc:Q(l||null)}},elementModifier:function(t,e,r,s){return{type:"ElementModifierStatement",path:W(t),params:e||[],hash:r||J([]),loc:Q(s||null)}},attr:function(t,e,r){return{type:"AttrNode",name:t,value:e,loc:Q(r||null)}},text:function(t,e){return{type:"TextNode",chars:t||"",loc:Q(e||null)}},sexpr:function(t,e,r,s){return{type:"SubExpression",path:W(t),params:e||[],hash:r||J([]),loc:Q(s||null)}},concat:function(t,e){if(!d(t))throw new Error("b.concat requires at least one part")
return{type:"ConcatStatement",parts:t||[],loc:Q(e||null)}},hash:J,pair:function(t,e,r){return{type:"HashPair",key:t,value:e,loc:Q(r||null)}},literal:K,program:function(t,e,r){return{type:"Template",body:t||[],blockParams:e||[],loc:Q(r||null)}},blockItself:function(t,e,r=!1,s){return{type:"Block",body:t||[],blockParams:e||[],chained:r,loc:Q(s||null)}},template:function(t,e,r){return{type:"Template",body:t||[],blockParams:e||[],loc:Q(r||null)}},loc:Q,pos:function(t,e){return{line:t,column:e}},path:W,fullPath:function(t,e,r){let{original:s,parts:n}=U(t),a=[...s,...n,...e].join(".")
return new R(a,t,e,Q(r||null))},head:function(t,e){return"@"===t[0]?j(t,e):"this"===t?z(e):G(t,e)},at:j,var:G,this:z,blockName:function(t,e){return{type:"NamedBlockName",name:t,loc:Q(e||null)}},string:Z("StringLiteral"),boolean:Z("BooleanLiteral"),number:Z("NumberLiteral"),undefined:()=>K("UndefinedLiteral",void 0),null:()=>K("NullLiteral",null)}
function Z(t){return function(e,r){return K(t,e,r)}}class X{constructor(){this.isAngleBracket=!1}resolution(){return 31}serialize(){return"Strict"}}const tt=new X
class et{constructor(t,e=!1){this.ambiguity=t,this.isAngleBracket=e}static namespaced(t,e=!1){return new et({namespaces:[t],fallback:!1},e)}static fallback(){return new et({namespaces:[],fallback:!0})}static append({invoke:t}){return new et({namespaces:["Component","Helper"],fallback:!t})}static trustingAppend({invoke:t}){return new et({namespaces:["Helper"],fallback:!t})}static attr(){return new et({namespaces:["Helper"],fallback:!0})}resolution(){if(0===this.ambiguity.namespaces.length)return 31
if(1!==this.ambiguity.namespaces.length)return this.ambiguity.fallback?34:35
if(this.ambiguity.fallback)return 36
switch(this.ambiguity.namespaces[0]){case"Helper":return 37
case"Modifier":return 38
case"Component":return 39}}serialize(){return 0===this.ambiguity.namespaces.length?"Loose":1===this.ambiguity.namespaces.length?this.ambiguity.fallback?["ambiguous","Attr"]:["ns",this.ambiguity.namespaces[0]]:this.ambiguity.fallback?["ambiguous","Append"]:["ambiguous","Invoke"]}}const rt=et.fallback()
function st(t){if("string"==typeof t)switch(t){case"Loose":return et.fallback()
case"Strict":return tt}switch(t[0]){case"ambiguous":switch(t[1]){case"Append":return et.append({invoke:!1})
case"Attr":return et.attr()
case"Invoke":return et.append({invoke:!0})}case"ns":return et.namespaced(t[1])}}function nt(t){if(void 0!==t){const e=t
return{fields:()=>class{constructor(t){this.type=e,u(this,t)}}}}return{fields:()=>class{constructor(t){u(this,t)}}}}class at extends(nt().fields()){static empty(t){return new at({loc:t,positional:it.empty(t),named:ot.empty(t)})}static named(t){return new at({loc:t.loc,positional:it.empty(t.loc.collapse("end")),named:t})}nth(t){return this.positional.nth(t)}get(t){return this.named.get(t)}isEmpty(){return this.positional.isEmpty()&&this.named.isEmpty()}}class it extends(nt().fields()){static empty(t){return new it({loc:t,exprs:[]})}get size(){return this.exprs.length}nth(t){return this.exprs[t]||null}isEmpty(){return 0===this.exprs.length}}class ot extends(nt().fields()){static empty(t){return new ot({loc:t,entries:[]})}get size(){return this.entries.length}get(t){let e=this.entries.filter((e=>e.name.chars===t))[0]
return e?e.value:null}isEmpty(){return 0===this.entries.length}}class lt{constructor(t){this.loc=t.name.loc.extend(t.value.loc),this.name=t.name,this.value=t.value}}class ct extends(nt("HtmlAttr").fields()){}class ht extends(nt("SplatAttr").fields()){}class ut extends(nt().fields()){toNamedArgument(){return new lt({name:this.name,value:this.value})}}class pt extends(nt("ElementModifier").fields()){}class dt{constructor(t=[]){this._span=t}static range(t,e=_.NON_EXISTENT){return new dt(t.map(mt)).getRangeOffset(e)}add(t){this._span.push(t)}getRangeOffset(t){if(0===this._span.length)return t
{let t=this._span[0],e=this._span[this._span.length-1]
return t.extend(e)}}}function mt(t){if(Array.isArray(t)){let e=t[0],r=t[t.length-1]
return mt(e).extend(mt(r))}return t instanceof _?t:t.loc}function ft(t){return!Array.isArray(t)||0!==t.length}function gt(t,e){return ft(t)?mt(t):e}class bt extends(nt("GlimmerComment").fields()){}class yt extends(nt("HtmlText").fields()){}class vt extends(nt("HtmlComment").fields()){}class kt extends(nt("AppendContent").fields()){get callee(){return"Call"===this.value.type?this.value.callee:this.value}get args(){return"Call"===this.value.type?this.value.args:at.empty(this.value.loc.collapse("end"))}}class wt extends(nt("InvokeBlock").fields()){}class St extends(nt("InvokeComponent").fields()){get args(){let t=this.componentArgs.map((t=>t.toNamedArgument()))
return at.named(new ot({loc:dt.range(t,this.callee.loc.collapse("end")),entries:t}))}}class Et extends(nt("SimpleElement").fields()){get args(){let t=this.componentArgs.map((t=>t.toNamedArgument()))
return at.named(new ot({loc:dt.range(t,this.tag.loc.collapse("end")),entries:t}))}}class Pt extends(nt("Literal").fields()){toSlice(){return new k({loc:this.loc,chars:this.value})}}function Tt(t,e){return"Literal"===t.type&&(void 0===e||("null"===e?null===t.value:typeof t.value===e))}class xt extends(nt("Path").fields()){}class Nt extends(nt("Call").fields()){}class At extends(nt("DeprecatedCall").fields()){}class Lt extends(nt("Interpolate").fields()){}class Ct extends(nt("This").fields()){}class Dt extends(nt("Arg").fields()){}class Bt extends(nt("Local").fields()){}class _t extends(nt("Free").fields()){}class qt extends(nt().fields()){}class Ot extends(nt().fields()){}class It extends(nt().fields()){get(t){return this.blocks.filter((e=>e.name.chars===t))[0]||null}}class Ht extends(nt().fields()){get args(){let t=this.componentArgs.map((t=>t.toNamedArgument()))
return at.named(new ot({loc:dt.range(t,this.name.loc.collapse("end")),entries:t}))}}const Vt=/[\xA0"&]/,Rt=new RegExp(Vt.source,"g"),$t=/[\xA0&<>]/,Ft=new RegExp($t.source,"g")
function Ut(t){switch(t.charCodeAt(0)){case 160:return"&nbsp;"
case 34:return"&quot;"
case 38:return"&amp;"
default:return t}}function Mt(t){switch(t.charCodeAt(0)){case 160:return"&nbsp;"
case 38:return"&amp;"
case 60:return"&lt;"
case 62:return"&gt;"
default:return t}}function zt(t,e){return t.loc.isInvisible||e.loc.isInvisible?0:t.loc.startPosition.line<e.loc.startPosition.line||t.loc.startPosition.line===e.loc.startPosition.line&&t.loc.startPosition.column<e.loc.startPosition.column?-1:t.loc.startPosition.line===e.loc.startPosition.line&&t.loc.startPosition.column===e.loc.startPosition.column?0:1}const jt=Object.create(null)
"area base br col command embed hr img input keygen link meta param source track wbr".split(" ").forEach((t=>{jt[t]=!0}))
const Gt=/\S/
class Wt{constructor(t){this.buffer="",this.options=t}handledByOverride(t,e=!1){if(void 0!==this.options.override){let r=this.options.override(t,this.options)
if("string"==typeof r)return e&&""!==r&&Gt.test(r[0])&&(r=` ${r}`),this.buffer+=r,!0}return!1}Node(t){switch(t.type){case"MustacheStatement":case"BlockStatement":case"PartialStatement":case"MustacheCommentStatement":case"CommentStatement":case"TextNode":case"ElementNode":case"AttrNode":case"Block":case"Template":return this.TopLevelStatement(t)
case"StringLiteral":case"BooleanLiteral":case"NumberLiteral":case"UndefinedLiteral":case"NullLiteral":case"PathExpression":case"SubExpression":return this.Expression(t)
case"Program":return this.Block(t)
case"ConcatStatement":return this.ConcatStatement(t)
case"Hash":return this.Hash(t)
case"HashPair":return this.HashPair(t)
case"ElementModifierStatement":return this.ElementModifierStatement(t)}}Expression(t){switch(t.type){case"StringLiteral":case"BooleanLiteral":case"NumberLiteral":case"UndefinedLiteral":case"NullLiteral":return this.Literal(t)
case"PathExpression":return this.PathExpression(t)
case"SubExpression":return this.SubExpression(t)}}Literal(t){switch(t.type){case"StringLiteral":return this.StringLiteral(t)
case"BooleanLiteral":return this.BooleanLiteral(t)
case"NumberLiteral":return this.NumberLiteral(t)
case"UndefinedLiteral":return this.UndefinedLiteral(t)
case"NullLiteral":return this.NullLiteral(t)}}TopLevelStatement(t){switch(t.type){case"MustacheStatement":return this.MustacheStatement(t)
case"BlockStatement":return this.BlockStatement(t)
case"PartialStatement":return this.PartialStatement(t)
case"MustacheCommentStatement":return this.MustacheCommentStatement(t)
case"CommentStatement":return this.CommentStatement(t)
case"TextNode":return this.TextNode(t)
case"ElementNode":return this.ElementNode(t)
case"Block":case"Template":return this.Block(t)
case"AttrNode":return this.AttrNode(t)}}Block(t){t.chained&&(t.body[0].chained=!0),this.handledByOverride(t)||this.TopLevelStatements(t.body)}TopLevelStatements(t){t.forEach((t=>this.TopLevelStatement(t)))}ElementNode(t){this.handledByOverride(t)||(this.OpenElementNode(t),this.TopLevelStatements(t.children),this.CloseElementNode(t))}OpenElementNode(t){this.buffer+=`<${t.tag}`
const e=[...t.attributes,...t.modifiers,...t.comments].sort(zt)
for(const r of e)switch(this.buffer+=" ",r.type){case"AttrNode":this.AttrNode(r)
break
case"ElementModifierStatement":this.ElementModifierStatement(r)
break
case"MustacheCommentStatement":this.MustacheCommentStatement(r)}t.blockParams.length&&this.BlockParams(t.blockParams),t.selfClosing&&(this.buffer+=" /"),this.buffer+=">"}CloseElementNode(t){t.selfClosing||jt[t.tag.toLowerCase()]||(this.buffer+=`</${t.tag}>`)}AttrNode(t){if(this.handledByOverride(t))return
let{name:e,value:r}=t
this.buffer+=e,("TextNode"!==r.type||r.chars.length>0)&&(this.buffer+="=",this.AttrNodeValue(r))}AttrNodeValue(t){"TextNode"===t.type?(this.buffer+='"',this.TextNode(t,!0),this.buffer+='"'):this.Node(t)}TextNode(t,e){var r
this.handledByOverride(t)||("raw"===this.options.entityEncoding?this.buffer+=t.chars:this.buffer+=e?(r=t.chars,Vt.test(r)?r.replace(Rt,Ut):r):function(t){return $t.test(t)?t.replace(Ft,Mt):t}(t.chars))}MustacheStatement(t){this.handledByOverride(t)||(this.buffer+=t.escaped?"{{":"{{{",t.strip.open&&(this.buffer+="~"),this.Expression(t.path),this.Params(t.params),this.Hash(t.hash),t.strip.close&&(this.buffer+="~"),this.buffer+=t.escaped?"}}":"}}}")}BlockStatement(t){this.handledByOverride(t)||(t.chained?(this.buffer+=t.inverseStrip.open?"{{~":"{{",this.buffer+="else "):this.buffer+=t.openStrip.open?"{{~#":"{{#",this.Expression(t.path),this.Params(t.params),this.Hash(t.hash),t.program.blockParams.length&&this.BlockParams(t.program.blockParams),t.chained?this.buffer+=t.inverseStrip.close?"~}}":"}}":this.buffer+=t.openStrip.close?"~}}":"}}",this.Block(t.program),t.inverse&&(t.inverse.chained||(this.buffer+=t.inverseStrip.open?"{{~":"{{",this.buffer+="else",this.buffer+=t.inverseStrip.close?"~}}":"}}"),this.Block(t.inverse)),t.chained||(this.buffer+=t.closeStrip.open?"{{~/":"{{/",this.Expression(t.path),this.buffer+=t.closeStrip.close?"~}}":"}}"))}BlockParams(t){this.buffer+=` as |${t.join(" ")}|`}PartialStatement(t){this.handledByOverride(t)||(this.buffer+="{{>",this.Expression(t.name),this.Params(t.params),this.Hash(t.hash),this.buffer+="}}")}ConcatStatement(t){this.handledByOverride(t)||(this.buffer+='"',t.parts.forEach((t=>{"TextNode"===t.type?this.TextNode(t,!0):this.Node(t)})),this.buffer+='"')}MustacheCommentStatement(t){this.handledByOverride(t)||(this.buffer+=`{{!--${t.value}--}}`)}ElementModifierStatement(t){this.handledByOverride(t)||(this.buffer+="{{",this.Expression(t.path),this.Params(t.params),this.Hash(t.hash),this.buffer+="}}")}CommentStatement(t){this.handledByOverride(t)||(this.buffer+=`\x3c!--${t.value}--\x3e`)}PathExpression(t){this.handledByOverride(t)||(this.buffer+=t.original)}SubExpression(t){this.handledByOverride(t)||(this.buffer+="(",this.Expression(t.path),this.Params(t.params),this.Hash(t.hash),this.buffer+=")")}Params(t){t.length&&t.forEach((t=>{this.buffer+=" ",this.Expression(t)}))}Hash(t){this.handledByOverride(t,!0)||t.pairs.forEach((t=>{this.buffer+=" ",this.HashPair(t)}))}HashPair(t){this.handledByOverride(t)||(this.buffer+=t.key,this.buffer+="=",this.Node(t.value))}StringLiteral(t){this.handledByOverride(t)||(this.buffer+=JSON.stringify(t.value))}BooleanLiteral(t){this.handledByOverride(t)||(this.buffer+=t.value)}NumberLiteral(t){this.handledByOverride(t)||(this.buffer+=t.value)}UndefinedLiteral(t){this.handledByOverride(t)||(this.buffer+="undefined")}NullLiteral(t){this.handledByOverride(t)||(this.buffer+="null")}print(t){let{options:e}=this
if(e.override){let r=e.override(t,e)
if(void 0!==r)return r}return this.buffer="",this.Node(t),this.buffer}}var Kt=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"]
function Jt(t,e){var r,s,n,a,i=e&&e.loc
i&&(r=i.start.line,s=i.end.line,n=i.start.column,a=i.end.column,t+=" - "+r+":"+n)
for(var o=Error.prototype.constructor.call(this,t),l=0;l<Kt.length;l++)this[Kt[l]]=o[Kt[l]]
Error.captureStackTrace&&Error.captureStackTrace(this,Jt)
try{i&&(this.lineNumber=r,this.endLineNumber=s,Object.defineProperty?(Object.defineProperty(this,"column",{value:n,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:a,enumerable:!0})):(this.column=n,this.endColumn=a))}catch(t){}}Jt.prototype=new Error
const Qt=Jt
function Yt(){this.parents=[]}function Zt(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash")}function Xt(t){Zt.call(this,t),this.acceptKey(t,"program"),this.acceptKey(t,"inverse")}function te(t){this.acceptRequired(t,"name"),this.acceptArray(t.params),this.acceptKey(t,"hash")}Yt.prototype={constructor:Yt,mutating:!1,acceptKey:function(t,e){var r=this.accept(t[e])
if(this.mutating){if(r&&!Yt.prototype[r.type])throw new Qt('Unexpected node type "'+r.type+'" found when accepting '+e+" on "+t.type)
t[e]=r}},acceptRequired:function(t,e){if(this.acceptKey(t,e),!t[e])throw new Qt(t.type+" requires "+e)},acceptArray:function(t){for(var e=0,r=t.length;e<r;e++)this.acceptKey(t,e),t[e]||(t.splice(e,1),e--,r--)},accept:function(t){if(t){if(!this[t.type])throw new Qt("Unknown type: "+t.type,t)
this.current&&this.parents.unshift(this.current),this.current=t
var e=this[t.type](t)
return this.current=this.parents.shift(),!this.mutating||e?e:!1!==e?t:void 0}},Program:function(t){this.acceptArray(t.body)},MustacheStatement:Zt,Decorator:Zt,BlockStatement:Xt,DecoratorBlock:Xt,PartialStatement:te,PartialBlockStatement:function(t){te.call(this,t),this.acceptKey(t,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:Zt,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(t){this.acceptArray(t.pairs)},HashPair:function(t){this.acceptRequired(t,"value")}}
const ee=Yt
function re(t){void 0===t&&(t={}),this.options=t}function se(t,e,r){void 0===e&&(e=t.length)
var s=t[e-1],n=t[e-2]
return s?"ContentStatement"===s.type?(n||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(s.original):void 0:r}function ne(t,e,r){void 0===e&&(e=-1)
var s=t[e+1],n=t[e+2]
return s?"ContentStatement"===s.type?(n||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(s.original):void 0:r}function ae(t,e,r){var s=t[null==e?0:e+1]
if(s&&"ContentStatement"===s.type&&(r||!s.rightStripped)){var n=s.value
s.value=s.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),s.rightStripped=s.value!==n}}function ie(t,e,r){var s=t[null==e?t.length-1:e-1]
if(s&&"ContentStatement"===s.type&&(r||!s.leftStripped)){var n=s.value
return s.value=s.value.replace(r?/\s+$/:/[ \t]+$/,""),s.leftStripped=s.value!==n,s.leftStripped}}re.prototype=new ee,re.prototype.Program=function(t){var e=!this.options.ignoreStandalone,r=!this.isRootSeen
this.isRootSeen=!0
for(var s=t.body,n=0,a=s.length;n<a;n++){var i=s[n],o=this.accept(i)
if(o){var l=se(s,n,r),c=ne(s,n,r),h=o.openStandalone&&l,u=o.closeStandalone&&c,p=o.inlineStandalone&&l&&c
o.close&&ae(s,n,!0),o.open&&ie(s,n,!0),e&&p&&(ae(s,n),ie(s,n)&&"PartialStatement"===i.type&&(i.indent=/([ \t]+$)/.exec(s[n-1].original)[1])),e&&h&&(ae((i.program||i.inverse).body),ie(s,n)),e&&u&&(ae(s,n),ie((i.inverse||i.program).body))}}return t},re.prototype.BlockStatement=re.prototype.DecoratorBlock=re.prototype.PartialBlockStatement=function(t){this.accept(t.program),this.accept(t.inverse)
var e=t.program||t.inverse,r=t.program&&t.inverse,s=r,n=r
if(r&&r.chained)for(s=r.body[0].program;n.chained;)n=n.body[n.body.length-1].program
var a={open:t.openStrip.open,close:t.closeStrip.close,openStandalone:ne(e.body),closeStandalone:se((s||e).body)}
if(t.openStrip.close&&ae(e.body,null,!0),r){var i=t.inverseStrip
i.open&&ie(e.body,null,!0),i.close&&ae(s.body,null,!0),t.closeStrip.open&&ie(n.body,null,!0),!this.options.ignoreStandalone&&se(e.body)&&ne(s.body)&&(ie(e.body),ae(s.body))}else t.closeStrip.open&&ie(e.body,null,!0)
return a},re.prototype.Decorator=re.prototype.MustacheStatement=function(t){return t.strip},re.prototype.PartialStatement=re.prototype.CommentStatement=function(t){var e=t.strip||{}
return{inlineStandalone:!0,open:e.open,close:e.close}}
const oe=re
var le=function(){var t=function(t,e,r,s){for(r=r||{},s=t.length;s--;r[t[s]]=e);return r},e=[2,44],r=[1,20],s=[5,14,15,19,29,34,39,44,47,48,52,56,60],n=[1,35],a=[1,38],i=[1,30],o=[1,31],l=[1,32],c=[1,33],h=[1,34],u=[1,37],p=[14,15,19,29,34,39,44,47,48,52,56,60],d=[14,15,19,29,34,44,47,48,52,56,60],m=[15,18],f=[14,15,19,29,34,47,48,52,56,60],g=[33,64,71,79,80,81,82,83,84],b=[23,33,55,64,67,71,74,79,80,81,82,83,84],y=[1,51],v=[23,33,55,64,67,71,74,79,80,81,82,83,84,86],k=[2,43],w=[55,64,71,79,80,81,82,83,84],S=[1,58],E=[1,59],P=[1,66],T=[33,64,71,74,79,80,81,82,83,84],x=[23,64,71,79,80,81,82,83,84],N=[1,76],A=[64,67,71,79,80,81,82,83,84],L=[33,74],C=[23,33,55,67,71,74],D=[1,106],B=[1,118],_=[71,76],q={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,expr:49,mustache_repetition0:50,mustache_option0:51,OPEN_UNESCAPED:52,mustache_repetition1:53,mustache_option1:54,CLOSE_UNESCAPED:55,OPEN_PARTIAL:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,sexpr:63,OPEN_SEXPR:64,sexpr_repetition0:65,sexpr_option0:66,CLOSE_SEXPR:67,hash:68,hash_repetition_plus0:69,hashSegment:70,ID:71,EQUALS:72,blockParams:73,OPEN_BLOCK_PARAMS:74,blockParams_repetition_plus0:75,CLOSE_BLOCK_PARAMS:76,path:77,dataName:78,STRING:79,NUMBER:80,BOOLEAN:81,UNDEFINED:82,NULL:83,DATA:84,pathSegments:85,SEP:86,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",52:"OPEN_UNESCAPED",55:"CLOSE_UNESCAPED",56:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",64:"OPEN_SEXPR",67:"CLOSE_SEXPR",71:"ID",72:"EQUALS",74:"OPEN_BLOCK_PARAMS",76:"CLOSE_BLOCK_PARAMS",79:"STRING",80:"NUMBER",81:"BOOLEAN",82:"UNDEFINED",83:"NULL",84:"DATA",86:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[49,1],[49,1],[63,5],[68,1],[70,3],[73,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[78,2],[77,1],[85,3],[85,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[50,0],[50,2],[51,0],[51,1],[53,0],[53,2],[54,0],[54,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[65,0],[65,2],[66,0],[66,1],[69,1],[69,2],[75,1],[75,2]],performAction:function(t,e,r,s,n,a,i){var o=a.length-1
switch(n){case 1:return a[o-1]
case 2:this.$=s.prepareProgram(a[o])
break
case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:this.$=a[o]
break
case 9:this.$={type:"CommentStatement",value:s.stripComment(a[o]),strip:s.stripFlags(a[o],a[o]),loc:s.locInfo(this._$)}
break
case 10:this.$={type:"ContentStatement",original:a[o],value:a[o],loc:s.locInfo(this._$)}
break
case 11:this.$=s.prepareRawBlock(a[o-2],a[o-1],a[o],this._$)
break
case 12:this.$={path:a[o-3],params:a[o-2],hash:a[o-1]}
break
case 13:this.$=s.prepareBlock(a[o-3],a[o-2],a[o-1],a[o],!1,this._$)
break
case 14:this.$=s.prepareBlock(a[o-3],a[o-2],a[o-1],a[o],!0,this._$)
break
case 15:this.$={open:a[o-5],path:a[o-4],params:a[o-3],hash:a[o-2],blockParams:a[o-1],strip:s.stripFlags(a[o-5],a[o])}
break
case 16:case 17:this.$={path:a[o-4],params:a[o-3],hash:a[o-2],blockParams:a[o-1],strip:s.stripFlags(a[o-5],a[o])}
break
case 18:this.$={strip:s.stripFlags(a[o-1],a[o-1]),program:a[o]}
break
case 19:var l=s.prepareBlock(a[o-2],a[o-1],a[o],a[o],!1,this._$),c=s.prepareProgram([l],a[o-1].loc)
c.chained=!0,this.$={strip:a[o-2].strip,program:c,chain:!0}
break
case 21:this.$={path:a[o-1],strip:s.stripFlags(a[o-2],a[o])}
break
case 22:case 23:this.$=s.prepareMustache(a[o-3],a[o-2],a[o-1],a[o-4],s.stripFlags(a[o-4],a[o]),this._$)
break
case 24:this.$={type:"PartialStatement",name:a[o-3],params:a[o-2],hash:a[o-1],indent:"",strip:s.stripFlags(a[o-4],a[o]),loc:s.locInfo(this._$)}
break
case 25:this.$=s.preparePartialBlock(a[o-2],a[o-1],a[o],this._$)
break
case 26:this.$={path:a[o-3],params:a[o-2],hash:a[o-1],strip:s.stripFlags(a[o-4],a[o])}
break
case 29:this.$={type:"SubExpression",path:a[o-3],params:a[o-2],hash:a[o-1],loc:s.locInfo(this._$)}
break
case 30:this.$={type:"Hash",pairs:a[o],loc:s.locInfo(this._$)}
break
case 31:this.$={type:"HashPair",key:s.id(a[o-2]),value:a[o],loc:s.locInfo(this._$)}
break
case 32:this.$=s.id(a[o-1])
break
case 35:this.$={type:"StringLiteral",value:a[o],original:a[o],loc:s.locInfo(this._$)}
break
case 36:this.$={type:"NumberLiteral",value:Number(a[o]),original:Number(a[o]),loc:s.locInfo(this._$)}
break
case 37:this.$={type:"BooleanLiteral",value:"true"===a[o],original:"true"===a[o],loc:s.locInfo(this._$)}
break
case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:s.locInfo(this._$)}
break
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:s.locInfo(this._$)}
break
case 40:this.$=s.preparePath(!0,a[o],this._$)
break
case 41:this.$=s.preparePath(!1,a[o],this._$)
break
case 42:a[o-2].push({part:s.id(a[o]),original:a[o],separator:a[o-1]}),this.$=a[o-2]
break
case 43:this.$=[{part:s.id(a[o]),original:a[o]}]
break
case 44:case 46:case 48:case 56:case 62:case 68:case 76:case 80:case 84:case 88:case 92:this.$=[]
break
case 45:case 47:case 49:case 57:case 63:case 69:case 77:case 81:case 85:case 89:case 93:case 97:case 99:a[o-1].push(a[o])
break
case 96:case 98:this.$=[a[o]]}},table:[t([5,14,15,19,29,34,48,52,56,60],e,{3:1,4:2,6:3}),{1:[3]},{5:[1,4]},t([5,39,44,47],[2,2],{7:5,8:6,9:7,10:8,11:9,12:10,13:11,24:15,27:16,16:17,59:19,14:[1,12],15:r,19:[1,23],29:[1,21],34:[1,22],48:[1,13],52:[1,14],56:[1,18],60:[1,24]}),{1:[2,1]},t(s,[2,45]),t(s,[2,3]),t(s,[2,4]),t(s,[2,5]),t(s,[2,6]),t(s,[2,7]),t(s,[2,8]),t(s,[2,9]),{20:26,49:25,63:27,64:n,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},{20:26,49:39,63:27,64:n,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},t(p,e,{6:3,4:40}),t(d,e,{6:3,4:41}),t(m,[2,46],{17:42}),{20:26,49:43,63:27,64:n,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},t(f,e,{6:3,4:44}),t([5,14,15,18,19,29,34,39,44,47,48,52,56,60],[2,10]),{20:45,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},{20:46,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},{20:47,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},{20:26,49:48,63:27,64:n,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},t(g,[2,76],{50:49}),t(b,[2,27]),t(b,[2,28]),t(b,[2,33]),t(b,[2,34]),t(b,[2,35]),t(b,[2,36]),t(b,[2,37]),t(b,[2,38]),t(b,[2,39]),{20:26,49:50,63:27,64:n,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},t(b,[2,41],{86:y}),{71:a,85:52},t(v,k),t(w,[2,80],{53:53}),{25:54,38:56,39:S,43:57,44:E,45:55,47:[2,52]},{28:60,43:61,44:E,47:[2,54]},{13:63,15:r,18:[1,62]},t(g,[2,84],{57:64}),{26:65,47:P},t(T,[2,56],{30:67}),t(T,[2,62],{35:68}),t(x,[2,48],{21:69}),t(g,[2,88],{61:70}),{20:26,33:[2,78],49:72,51:71,63:27,64:n,68:73,69:74,70:75,71:N,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},t(A,[2,92],{65:77}),{71:[1,78]},t(b,[2,40],{86:y}),{20:26,49:80,54:79,55:[2,82],63:27,64:n,68:81,69:74,70:75,71:N,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},{26:82,47:P},{47:[2,53]},t(p,e,{6:3,4:83}),{47:[2,20]},{20:84,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},t(f,e,{6:3,4:85}),{26:86,47:P},{47:[2,55]},t(s,[2,11]),t(m,[2,47]),{20:26,33:[2,86],49:88,58:87,63:27,64:n,68:89,69:74,70:75,71:N,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},t(s,[2,25]),{20:90,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},t(L,[2,58],{20:26,63:27,77:28,78:29,85:36,69:74,70:75,31:91,49:92,68:93,64:n,71:N,79:i,80:o,81:l,82:c,83:h,84:u}),t(L,[2,64],{20:26,63:27,77:28,78:29,85:36,69:74,70:75,36:94,49:95,68:96,64:n,71:N,79:i,80:o,81:l,82:c,83:h,84:u}),{20:26,22:97,23:[2,50],49:98,63:27,64:n,68:99,69:74,70:75,71:N,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},{20:26,33:[2,90],49:101,62:100,63:27,64:n,68:102,69:74,70:75,71:N,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},{33:[1,103]},t(g,[2,77]),{33:[2,79]},t([23,33,55,67,74],[2,30],{70:104,71:[1,105]}),t(C,[2,96]),t(v,k,{72:D}),{20:26,49:108,63:27,64:n,66:107,67:[2,94],68:109,69:74,70:75,71:N,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},t(v,[2,42]),{55:[1,110]},t(w,[2,81]),{55:[2,83]},t(s,[2,13]),{38:56,39:S,43:57,44:E,45:112,46:111,47:[2,74]},t(T,[2,68],{40:113}),{47:[2,18]},t(s,[2,14]),{33:[1,114]},t(g,[2,85]),{33:[2,87]},{33:[1,115]},{32:116,33:[2,60],73:117,74:B},t(T,[2,57]),t(L,[2,59]),{33:[2,66],37:119,73:120,74:B},t(T,[2,63]),t(L,[2,65]),{23:[1,121]},t(x,[2,49]),{23:[2,51]},{33:[1,122]},t(g,[2,89]),{33:[2,91]},t(s,[2,22]),t(C,[2,97]),{72:D},{20:26,49:123,63:27,64:n,71:a,77:28,78:29,79:i,80:o,81:l,82:c,83:h,84:u,85:36},{67:[1,124]},t(A,[2,93]),{67:[2,95]},t(s,[2,23]),{47:[2,19]},{47:[2,75]},t(L,[2,70],{20:26,63:27,77:28,78:29,85:36,69:74,70:75,41:125,49:126,68:127,64:n,71:N,79:i,80:o,81:l,82:c,83:h,84:u}),t(s,[2,24]),t(s,[2,21]),{33:[1,128]},{33:[2,61]},{71:[1,130],75:129},{33:[1,131]},{33:[2,67]},t(m,[2,12]),t(f,[2,26]),t(C,[2,31]),t(b,[2,29]),{33:[2,72],42:132,73:133,74:B},t(T,[2,69]),t(L,[2,71]),t(p,[2,15]),{71:[1,135],76:[1,134]},t(_,[2,98]),t(d,[2,16]),{33:[1,136]},{33:[2,73]},{33:[2,32]},t(_,[2,99]),t(p,[2,17])],defaultActions:{4:[2,1],55:[2,53],57:[2,20],61:[2,55],73:[2,79],81:[2,83],85:[2,18],89:[2,87],99:[2,51],102:[2,91],109:[2,95],111:[2,19],112:[2,75],117:[2,61],120:[2,67],133:[2,73],134:[2,32]},parseError:function(t,e){if(!e.recoverable){var r=new Error(t)
throw r.hash=e,r}this.trace(t)},parse:function(t){var e=[0],r=[null],s=[],n=this.table,a="",i=0,o=0,l=0,c=s.slice.call(arguments,1),h=Object.create(this.lexer),u={yy:{}}
for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(u.yy[p]=this.yy[p])
h.setInput(t,u.yy),u.yy.lexer=h,u.yy.parser=this,void 0===h.yylloc&&(h.yylloc={})
var d=h.yylloc
s.push(d)
var m,f=h.options&&h.options.ranges
"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError
for(var g,b,y,v,k,w,S,E,P,T={};;){if(y=e[e.length-1],this.defaultActions[y]?v=this.defaultActions[y]:(null==g&&(m=void 0,"number"!=typeof(m=h.lex()||1)&&(m=this.symbols_[m]||m),g=m),v=n[y]&&n[y][g]),void 0===v||!v.length||!v[0]){var x
for(w in P=[],n[y])this.terminals_[w]&&w>2&&P.push("'"+this.terminals_[w]+"'")
x=h.showPosition?"Parse error on line "+(i+1)+":\n"+h.showPosition()+"\nExpecting "+P.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(x,{text:h.match,token:this.terminals_[g]||g,line:h.yylineno,loc:d,expected:P})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+y+", token: "+g)
switch(v[0]){case 1:e.push(g),r.push(h.yytext),s.push(h.yylloc),e.push(v[1]),g=null,b?(g=b,b=null):(o=h.yyleng,a=h.yytext,i=h.yylineno,d=h.yylloc,l>0&&l--)
break
case 2:if(S=this.productions_[v[1]][1],T.$=r[r.length-S],T._$={first_line:s[s.length-(S||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(S||1)].first_column,last_column:s[s.length-1].last_column},f&&(T._$.range=[s[s.length-(S||1)].range[0],s[s.length-1].range[1]]),void 0!==(k=this.performAction.apply(T,[a,o,i,u.yy,v[1],r,s].concat(c))))return k
S&&(e=e.slice(0,-1*S*2),r=r.slice(0,-1*S),s=s.slice(0,-1*S)),e.push(this.productions_[v[1]][0]),r.push(T.$),s.push(T._$),E=n[e[e.length-2]][e[e.length-1]],e.push(E)
break
case 3:return!0}}return!0}},O=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t)
this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0]
return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g)
this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e
var s=this.match.split(/(?:\r\n?|\n)/g)
this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1)
var n=this.yylloc.range
return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===s.length?this.yylloc.first_column:0)+s[s.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length)
return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match
return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-")
return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,s,n
if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r
if(this._backtrack){for(var a in n)this[a]=n[a]
return!1}return!1},next:function(){if(this.done)return this.EOF
var t,e,r,s
this._input||(this.done=!0),this._more||(this.yytext="",this.match="")
for(var n=this._currentRules(),a=0;a<n.length;a++)if((r=this._input.match(this.rules[n[a]]))&&(!e||r[0].length>e[0].length)){if(e=r,s=a,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,n[a])))return t
if(this._backtrack){e=!1
continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,r,s){function n(t,r){return e.yytext=e.yytext.substring(t,e.yyleng-r+t)}switch(r){case 0:if("\\\\"===e.yytext.slice(-2)?(n(0,1),this.begin("mu")):"\\"===e.yytext.slice(-1)?(n(0,1),this.begin("emu")):this.begin("mu"),e.yytext)return 15
break
case 1:case 5:return 15
case 2:return this.popState(),15
case 3:return this.begin("raw"),15
case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(n(5,9),18)
case 6:case 22:return this.popState(),14
case 7:return 64
case 8:return 67
case 9:return 19
case 10:return this.popState(),this.begin("raw"),23
case 11:return 56
case 12:return 60
case 13:return 29
case 14:return 47
case 15:case 16:return this.popState(),44
case 17:return 34
case 18:return 39
case 19:return 52
case 20:case 23:return 48
case 21:this.unput(e.yytext),this.popState(),this.begin("com")
break
case 24:return 72
case 25:case 26:case 41:return 71
case 27:return 86
case 28:break
case 29:return this.popState(),55
case 30:return this.popState(),33
case 31:return e.yytext=n(1,2).replace(/\\"/g,'"'),79
case 32:return e.yytext=n(1,2).replace(/\\'/g,"'"),79
case 33:return 84
case 34:case 35:return 81
case 36:return 82
case 37:return 83
case 38:return 80
case 39:return 74
case 40:return 76
case 42:return e.yytext=e.yytext.replace(/\\([\\\]])/g,"$1"),71
case 43:return"INVALID"
case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}}
return t}()
function I(){this.yy={}}return q.lexer=O,I.prototype=q,q.Parser=I,new I}()
const ce=le
function he(){this.padding=0}function ue(t,e){if(e=e.path?e.path.original:e,t.path.original!==e){var r={loc:t.path.loc}
throw new Qt(t.path.original+" doesn't match "+e,r)}}function pe(t,e){this.source=t,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}}function de(t){return/^\[.*\]$/.test(t)?t.substring(1,t.length-1):t}function me(t,e){return{open:"~"===t.charAt(2),close:"~"===e.charAt(e.length-3)}}function fe(t){return t.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function ge(t,e,r){r=this.locInfo(r)
for(var s=t?"@":"",n=[],a=0,i=0,o=e.length;i<o;i++){var l=e[i].part,c=e[i].original!==l
if(s+=(e[i].separator||"")+l,c||".."!==l&&"."!==l&&"this"!==l)n.push(l)
else{if(n.length>0)throw new Qt("Invalid path: "+s,{loc:r})
".."===l&&a++}}return{type:"PathExpression",data:t,depth:a,parts:n,original:s,loc:r}}function be(t,e,r,s,n,a){var i=s.charAt(3)||s.charAt(2),o="{"!==i&&"&"!==i
return{type:/\*/.test(s)?"Decorator":"MustacheStatement",path:t,params:e,hash:r,escaped:o,strip:n,loc:this.locInfo(a)}}function ye(t,e,r,s){ue(t,r)
var n={type:"Program",body:e,strip:{},loc:s=this.locInfo(s)}
return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:n,openStrip:{},inverseStrip:{},closeStrip:{},loc:s}}function ve(t,e,r,s,n,a){s&&s.path&&ue(t,s)
var i,o,l=/\*/.test(t.open)
if(e.blockParams=t.blockParams,r){if(l)throw new Qt("Unexpected inverse block on decorator",r)
r.chain&&(r.program.body[0].closeStrip=s.strip),o=r.strip,i=r.program}return n&&(n=i,i=e,e=n),{type:l?"DecoratorBlock":"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:e,inverse:i,openStrip:t.strip,inverseStrip:o,closeStrip:s&&s.strip,loc:this.locInfo(a)}}function ke(t,e){if(!e&&t.length){var r=t[0].loc,s=t[t.length-1].loc
r&&s&&(e={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:s.end.line,column:s.end.column}})}return{type:"Program",body:t,strip:{},loc:e}}function we(t,e,r,s){return ue(t,r),{type:"PartialBlockStatement",name:t.path,params:t.params,hash:t.hash,program:e,openStrip:t.strip,closeStrip:r&&r.strip,loc:this.locInfo(s)}}he.prototype=new ee,he.prototype.pad=function(t){for(var e="",r=0,s=this.padding;r<s;r++)e+="  "
return e+(t+"\n")},he.prototype.Program=function(t){var e,r,s="",n=t.body
if(t.blockParams){var a="BLOCK PARAMS: ["
for(e=0,r=t.blockParams.length;e<r;e++)a+=" "+t.blockParams[e]
a+=" ]",s+=this.pad(a)}for(e=0,r=n.length;e<r;e++)s+=this.accept(n[e])
return this.padding--,s},he.prototype.MustacheStatement=function(t){return this.pad("{{ "+this.SubExpression(t)+" }}")},he.prototype.Decorator=function(t){return this.pad("{{ DIRECTIVE "+this.SubExpression(t)+" }}")},he.prototype.BlockStatement=he.prototype.DecoratorBlock=function(t){var e=""
return e+=this.pad(("DecoratorBlock"===t.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,e+=this.pad(this.SubExpression(t)),t.program&&(e+=this.pad("PROGRAM:"),this.padding++,e+=this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e+=this.pad("{{^}}"),this.padding++,e+=this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e},he.prototype.PartialStatement=function(t){var e="PARTIAL:"+t.name.original
return t.params[0]&&(e+=" "+this.accept(t.params[0])),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")},he.prototype.PartialBlockStatement=function(t){var e="PARTIAL BLOCK:"+t.name.original
return t.params[0]&&(e+=" "+this.accept(t.params[0])),t.hash&&(e+=" "+this.accept(t.hash)),e+=" "+this.pad("PROGRAM:"),this.padding++,e+=this.accept(t.program),this.padding--,this.pad("{{> "+e+" }}")},he.prototype.ContentStatement=function(t){return this.pad("CONTENT[ '"+t.value+"' ]")},he.prototype.CommentStatement=function(t){return this.pad("{{! '"+t.value+"' }}")},he.prototype.SubExpression=function(t){for(var e,r=t.params,s=[],n=0,a=r.length;n<a;n++)s.push(this.accept(r[n]))
return r="["+s.join(", ")+"]",e=t.hash?" "+this.accept(t.hash):"",this.accept(t.path)+" "+r+e},he.prototype.PathExpression=function(t){var e=t.parts.join("/")
return(t.data?"@":"")+"PATH:"+e},he.prototype.StringLiteral=function(t){return'"'+t.value+'"'},he.prototype.NumberLiteral=function(t){return"NUMBER{"+t.value+"}"},he.prototype.BooleanLiteral=function(t){return"BOOLEAN{"+t.value+"}"},he.prototype.UndefinedLiteral=function(){return"UNDEFINED"},he.prototype.NullLiteral=function(){return"NULL"},he.prototype.Hash=function(t){for(var e=t.pairs,r=[],s=0,n=e.length;s<n;s++)r.push(this.accept(e[s]))
return"HASH{"+r.join(", ")+"}"},he.prototype.HashPair=function(t){return t.key+"="+this.accept(t.value)}
var Se={}
for(var Ee in a)Object.prototype.hasOwnProperty.call(a,Ee)&&(Se[Ee]=a[Ee])
function Pe(t,e){return"Program"===t.type?t:(ce.yy=Se,ce.yy.locInfo=function(t){return new pe(e&&e.srcName,t)},ce.parse(t))}function Te(t,e){var r=Pe(t,e)
return new oe(e).accept(r)}var xe={Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",amp:"&",AMP:"&",andand:"⩕",And:"⩓",and:"∧",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angmsd:"∡",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",apacir:"⩯",ap:"≈",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxHd:"╤",boxhD:"╥",boxHD:"╦",boxhu:"┴",boxHu:"╧",boxhU:"╨",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsolb:"⧅",bsol:"\\",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",capand:"⩄",capbrcup:"⩉",capcap:"⩋",cap:"∩",Cap:"⋒",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cir:"○",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cup:"∪",Cup:"⋓",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",Darr:"↡",dArr:"⇓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",ddagger:"‡",ddarr:"⇊",DD:"ⅅ",dd:"ⅆ",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrowBar:"⤓",downarrow:"↓",DownArrow:"↓",Downarrow:"⇓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVectorBar:"⥖",DownLeftVector:"↽",DownRightTeeVector:"⥟",DownRightVectorBar:"⥗",DownRightVector:"⇁",DownTeeArrow:"↧",DownTee:"⊤",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",Ecirc:"Ê",ecirc:"ê",ecir:"≖",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",edot:"ė",eDot:"≑",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp13:" ",emsp14:" ",emsp:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",ge:"≥",gE:"≧",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",gescc:"⪩",ges:"⩾",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gla:"⪥",gl:"≷",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gtcc:"⪧",gtcir:"⩺",gt:">",GT:">",Gt:"≫",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",harrcir:"⥈",harr:"↔",hArr:"⇔",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",Im:"ℑ",imof:"⊷",imped:"Ƶ",Implies:"⇒",incare:"℅",in:"∈",infin:"∞",infintie:"⧝",inodot:"ı",intcal:"⊺",int:"∫",Int:"∬",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larrb:"⇤",larrbfs:"⤟",larr:"←",Larr:"↞",lArr:"⇐",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",latail:"⤙",lAtail:"⤛",lat:"⪫",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",LeftArrowBar:"⇤",leftarrow:"←",LeftArrow:"←",Leftarrow:"⇐",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVectorBar:"⥙",LeftDownVector:"⇃",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTeeArrow:"↤",LeftTee:"⊣",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangleBar:"⧏",LeftTriangle:"⊲",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVectorBar:"⥘",LeftUpVector:"↿",LeftVectorBar:"⥒",LeftVector:"↼",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",lescc:"⪨",les:"⩽",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",llarr:"⇇",ll:"≪",Ll:"⋘",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoustache:"⎰",lmoust:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftrightarrow:"⟷",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longmapsto:"⟼",longrightarrow:"⟶",LongRightArrow:"⟶",Longrightarrow:"⟹",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",ltcc:"⪦",ltcir:"⩹",lt:"<",LT:"<",Lt:"≪",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",midast:"*",midcir:"⫰",mid:"∣",middot:"·",minusb:"⊟",minus:"−",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natural:"♮",naturals:"ℕ",natur:"♮",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",ne:"≠",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nlE:"≦̸",nle:"≰",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangleBar:"⧏̸",NotLeftTriangle:"⋪",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangleBar:"⧐̸",NotRightTriangle:"⋫",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",nparallel:"∦",npar:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",nprec:"⊀",npreceq:"⪯̸",npre:"⪯̸",nrarrc:"⤳̸",nrarr:"↛",nrArr:"⇏",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",Ocirc:"Ô",ocirc:"ô",ocir:"⊚",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",orarr:"↻",Or:"⩔",or:"∨",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",otimesas:"⨶",Otimes:"⨷",otimes:"⊗",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",para:"¶",parallel:"∥",par:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plus:"+",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",prap:"⪷",Pr:"⪻",pr:"≺",prcue:"≼",precapprox:"⪷",prec:"≺",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",pre:"⪯",prE:"⪳",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportional:"∝",Proportion:"∷",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarr:"→",Rarr:"↠",rArr:"⇒",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",Re:"ℜ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrowBar:"⇥",rightarrow:"→",RightArrow:"→",Rightarrow:"⇒",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVectorBar:"⥕",RightDownVector:"⇂",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTeeArrow:"↦",RightTee:"⊢",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangleBar:"⧐",RightTriangle:"⊳",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVectorBar:"⥔",RightUpVector:"↾",RightVectorBar:"⥓",RightVector:"⇀",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoustache:"⎱",rmoust:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",scap:"⪸",Scaron:"Š",scaron:"š",Sc:"⪼",sc:"≻",sccue:"≽",sce:"⪰",scE:"⪴",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdotb:"⊡",sdot:"⋅",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",solbar:"⌿",solb:"⧄",sol:"/",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squ:"□",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succapprox:"⪸",succ:"≻",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",Sup:"⋑",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"\t",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",therefore:"∴",Therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",ThinSpace:" ",thinsp:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",timesbar:"⨱",timesb:"⊠",times:"×",timesd:"⨰",tint:"∭",toea:"⤨",topbot:"⌶",topcir:"⫱",top:"⊤",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",uarr:"↑",Uarr:"↟",uArr:"⇑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrowBar:"⤒",uparrow:"↑",UpArrow:"↑",Uparrow:"⇑",UpArrowDownArrow:"⇅",updownarrow:"↕",UpDownArrow:"↕",Updownarrow:"⇕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTeeArrow:"↥",UpTee:"⊥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",Vcy:"В",vcy:"в",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",veebar:"⊻",vee:"∨",Vee:"⋁",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xharr:"⟷",xhArr:"⟺",Xi:"Ξ",xi:"ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",yuml:"ÿ",Yuml:"Ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",zfr:"𝔷",Zfr:"ℨ",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"},Ne=/^#[xX]([A-Fa-f0-9]+)$/,Ae=/^#([0-9]+)$/,Le=/^([A-Za-z0-9]+)$/,Ce=function(){function t(t){this.named=t}return t.prototype.parse=function(t){if(t){var e=t.match(Ne)
return e?String.fromCharCode(parseInt(e[1],16)):(e=t.match(Ae))?String.fromCharCode(parseInt(e[1],10)):(e=t.match(Le))?this.named[e[1]]:void 0}},t}(),De=/[\t\n\f ]/,Be=/[A-Za-z]/,_e=/\r\n?/g
function qe(t){return De.test(t)}function Oe(t){return Be.test(t)}var Ie=function(){function t(t,e,r){void 0===r&&(r="precompile"),this.delegate=t,this.entityParser=e,this.mode=r,this.state="beforeData",this.line=-1,this.column=-1,this.input="",this.index=-1,this.tagNameBuffer="",this.states={beforeData:function(){var t=this.peek()
if("<"!==t||this.isIgnoredEndTag()){if("precompile"===this.mode&&"\n"===t){var e=this.tagNameBuffer.toLowerCase()
"pre"!==e&&"textarea"!==e||this.consume()}this.transitionTo("data"),this.delegate.beginData()}else this.transitionTo("tagOpen"),this.markTagStart(),this.consume()},data:function(){var t=this.peek(),e=this.tagNameBuffer
"<"!==t||this.isIgnoredEndTag()?"&"===t&&"script"!==e&&"style"!==e?(this.consume(),this.delegate.appendToData(this.consumeCharRef()||"&")):(this.consume(),this.delegate.appendToData(t)):(this.delegate.finishData(),this.transitionTo("tagOpen"),this.markTagStart(),this.consume())},tagOpen:function(){var t=this.consume()
"!"===t?this.transitionTo("markupDeclarationOpen"):"/"===t?this.transitionTo("endTagOpen"):("@"===t||":"===t||Oe(t))&&(this.transitionTo("tagName"),this.tagNameBuffer="",this.delegate.beginStartTag(),this.appendToTagName(t))},markupDeclarationOpen:function(){var t=this.consume()
"-"===t&&"-"===this.peek()?(this.consume(),this.transitionTo("commentStart"),this.delegate.beginComment()):"DOCTYPE"===t.toUpperCase()+this.input.substring(this.index,this.index+6).toUpperCase()&&(this.consume(),this.consume(),this.consume(),this.consume(),this.consume(),this.consume(),this.transitionTo("doctype"),this.delegate.beginDoctype&&this.delegate.beginDoctype())},doctype:function(){qe(this.consume())&&this.transitionTo("beforeDoctypeName")},beforeDoctypeName:function(){var t=this.consume()
qe(t)||(this.transitionTo("doctypeName"),this.delegate.appendToDoctypeName&&this.delegate.appendToDoctypeName(t.toLowerCase()))},doctypeName:function(){var t=this.consume()
qe(t)?this.transitionTo("afterDoctypeName"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypeName&&this.delegate.appendToDoctypeName(t.toLowerCase())},afterDoctypeName:function(){var t=this.consume()
if(!qe(t))if(">"===t)this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")
else{var e=t.toUpperCase()+this.input.substring(this.index,this.index+5).toUpperCase(),r="PUBLIC"===e.toUpperCase(),s="SYSTEM"===e.toUpperCase();(r||s)&&(this.consume(),this.consume(),this.consume(),this.consume(),this.consume(),this.consume()),r?this.transitionTo("afterDoctypePublicKeyword"):s&&this.transitionTo("afterDoctypeSystemKeyword")}},afterDoctypePublicKeyword:function(){var t=this.peek()
qe(t)?(this.transitionTo("beforeDoctypePublicIdentifier"),this.consume()):'"'===t?(this.transitionTo("doctypePublicIdentifierDoubleQuoted"),this.consume()):"'"===t?(this.transitionTo("doctypePublicIdentifierSingleQuoted"),this.consume()):">"===t&&(this.consume(),this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData"))},doctypePublicIdentifierDoubleQuoted:function(){var t=this.consume()
'"'===t?this.transitionTo("afterDoctypePublicIdentifier"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypePublicIdentifier&&this.delegate.appendToDoctypePublicIdentifier(t)},doctypePublicIdentifierSingleQuoted:function(){var t=this.consume()
"'"===t?this.transitionTo("afterDoctypePublicIdentifier"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypePublicIdentifier&&this.delegate.appendToDoctypePublicIdentifier(t)},afterDoctypePublicIdentifier:function(){var t=this.consume()
qe(t)?this.transitionTo("betweenDoctypePublicAndSystemIdentifiers"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):'"'===t?this.transitionTo("doctypeSystemIdentifierDoubleQuoted"):"'"===t&&this.transitionTo("doctypeSystemIdentifierSingleQuoted")},betweenDoctypePublicAndSystemIdentifiers:function(){var t=this.consume()
qe(t)||(">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):'"'===t?this.transitionTo("doctypeSystemIdentifierDoubleQuoted"):"'"===t&&this.transitionTo("doctypeSystemIdentifierSingleQuoted"))},doctypeSystemIdentifierDoubleQuoted:function(){var t=this.consume()
'"'===t?this.transitionTo("afterDoctypeSystemIdentifier"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypeSystemIdentifier&&this.delegate.appendToDoctypeSystemIdentifier(t)},doctypeSystemIdentifierSingleQuoted:function(){var t=this.consume()
"'"===t?this.transitionTo("afterDoctypeSystemIdentifier"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypeSystemIdentifier&&this.delegate.appendToDoctypeSystemIdentifier(t)},afterDoctypeSystemIdentifier:function(){var t=this.consume()
qe(t)||">"===t&&(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData"))},commentStart:function(){var t=this.consume()
"-"===t?this.transitionTo("commentStartDash"):">"===t?(this.delegate.finishComment(),this.transitionTo("beforeData")):(this.delegate.appendToCommentData(t),this.transitionTo("comment"))},commentStartDash:function(){var t=this.consume()
"-"===t?this.transitionTo("commentEnd"):">"===t?(this.delegate.finishComment(),this.transitionTo("beforeData")):(this.delegate.appendToCommentData("-"),this.transitionTo("comment"))},comment:function(){var t=this.consume()
"-"===t?this.transitionTo("commentEndDash"):this.delegate.appendToCommentData(t)},commentEndDash:function(){var t=this.consume()
"-"===t?this.transitionTo("commentEnd"):(this.delegate.appendToCommentData("-"+t),this.transitionTo("comment"))},commentEnd:function(){var t=this.consume()
">"===t?(this.delegate.finishComment(),this.transitionTo("beforeData")):(this.delegate.appendToCommentData("--"+t),this.transitionTo("comment"))},tagName:function(){var t=this.consume()
qe(t)?this.transitionTo("beforeAttributeName"):"/"===t?this.transitionTo("selfClosingStartTag"):">"===t?(this.delegate.finishTag(),this.transitionTo("beforeData")):this.appendToTagName(t)},endTagName:function(){var t=this.consume()
qe(t)?(this.transitionTo("beforeAttributeName"),this.tagNameBuffer=""):"/"===t?(this.transitionTo("selfClosingStartTag"),this.tagNameBuffer=""):">"===t?(this.delegate.finishTag(),this.transitionTo("beforeData"),this.tagNameBuffer=""):this.appendToTagName(t)},beforeAttributeName:function(){var t=this.peek()
qe(t)?this.consume():"/"===t?(this.transitionTo("selfClosingStartTag"),this.consume()):">"===t?(this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):"="===t?(this.delegate.reportSyntaxError("attribute name cannot start with equals sign"),this.transitionTo("attributeName"),this.delegate.beginAttribute(),this.consume(),this.delegate.appendToAttributeName(t)):(this.transitionTo("attributeName"),this.delegate.beginAttribute())},attributeName:function(){var t=this.peek()
qe(t)?(this.transitionTo("afterAttributeName"),this.consume()):"/"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.transitionTo("selfClosingStartTag")):"="===t?(this.transitionTo("beforeAttributeValue"),this.consume()):">"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):'"'===t||"'"===t||"<"===t?(this.delegate.reportSyntaxError(t+" is not a valid character within attribute names"),this.consume(),this.delegate.appendToAttributeName(t)):(this.consume(),this.delegate.appendToAttributeName(t))},afterAttributeName:function(){var t=this.peek()
qe(t)?this.consume():"/"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.transitionTo("selfClosingStartTag")):"="===t?(this.consume(),this.transitionTo("beforeAttributeValue")):">"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.transitionTo("attributeName"),this.delegate.beginAttribute(),this.consume(),this.delegate.appendToAttributeName(t))},beforeAttributeValue:function(){var t=this.peek()
qe(t)?this.consume():'"'===t?(this.transitionTo("attributeValueDoubleQuoted"),this.delegate.beginAttributeValue(!0),this.consume()):"'"===t?(this.transitionTo("attributeValueSingleQuoted"),this.delegate.beginAttributeValue(!0),this.consume()):">"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):(this.transitionTo("attributeValueUnquoted"),this.delegate.beginAttributeValue(!1),this.consume(),this.delegate.appendToAttributeValue(t))},attributeValueDoubleQuoted:function(){var t=this.consume()
'"'===t?(this.delegate.finishAttributeValue(),this.transitionTo("afterAttributeValueQuoted")):"&"===t?this.delegate.appendToAttributeValue(this.consumeCharRef()||"&"):this.delegate.appendToAttributeValue(t)},attributeValueSingleQuoted:function(){var t=this.consume()
"'"===t?(this.delegate.finishAttributeValue(),this.transitionTo("afterAttributeValueQuoted")):"&"===t?this.delegate.appendToAttributeValue(this.consumeCharRef()||"&"):this.delegate.appendToAttributeValue(t)},attributeValueUnquoted:function(){var t=this.peek()
qe(t)?(this.delegate.finishAttributeValue(),this.consume(),this.transitionTo("beforeAttributeName")):"/"===t?(this.delegate.finishAttributeValue(),this.consume(),this.transitionTo("selfClosingStartTag")):"&"===t?(this.consume(),this.delegate.appendToAttributeValue(this.consumeCharRef()||"&")):">"===t?(this.delegate.finishAttributeValue(),this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):(this.consume(),this.delegate.appendToAttributeValue(t))},afterAttributeValueQuoted:function(){var t=this.peek()
qe(t)?(this.consume(),this.transitionTo("beforeAttributeName")):"/"===t?(this.consume(),this.transitionTo("selfClosingStartTag")):">"===t?(this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):this.transitionTo("beforeAttributeName")},selfClosingStartTag:function(){">"===this.peek()?(this.consume(),this.delegate.markTagAsSelfClosing(),this.delegate.finishTag(),this.transitionTo("beforeData")):this.transitionTo("beforeAttributeName")},endTagOpen:function(){var t=this.consume();("@"===t||":"===t||Oe(t))&&(this.transitionTo("endTagName"),this.tagNameBuffer="",this.delegate.beginEndTag(),this.appendToTagName(t))}},this.reset()}return t.prototype.reset=function(){this.transitionTo("beforeData"),this.input="",this.tagNameBuffer="",this.index=0,this.line=1,this.column=0,this.delegate.reset()},t.prototype.transitionTo=function(t){this.state=t},t.prototype.tokenize=function(t){this.reset(),this.tokenizePart(t),this.tokenizeEOF()},t.prototype.tokenizePart=function(t){for(this.input+=function(t){return t.replace(_e,"\n")}(t);this.index<this.input.length;){var e=this.states[this.state]
if(void 0===e)throw new Error("unhandled state "+this.state)
e.call(this)}},t.prototype.tokenizeEOF=function(){this.flushData()},t.prototype.flushData=function(){"data"===this.state&&(this.delegate.finishData(),this.transitionTo("beforeData"))},t.prototype.peek=function(){return this.input.charAt(this.index)},t.prototype.consume=function(){var t=this.peek()
return this.index++,"\n"===t?(this.line++,this.column=0):this.column++,t},t.prototype.consumeCharRef=function(){var t=this.input.indexOf(";",this.index)
if(-1!==t){var e=this.input.slice(this.index,t),r=this.entityParser.parse(e)
if(r){for(var s=e.length;s;)this.consume(),s--
return this.consume(),r}}},t.prototype.markTagStart=function(){this.delegate.tagOpen()},t.prototype.appendToTagName=function(t){this.tagNameBuffer+=t,this.delegate.appendToTagName(t)},t.prototype.isIgnoredEndTag=function(){var t=this.tagNameBuffer
return"title"===t&&"</title>"!==this.input.substring(this.index,this.index+8)||"style"===t&&"</style>"!==this.input.substring(this.index,this.index+8)||"script"===t&&"<\/script>"!==this.input.substring(this.index,this.index+9)},t}()
function He(t,e={entityEncoding:"transformed"}){return t?new Wt(e).print(t):""}function Ve(t,e){let{module:r,loc:s}=e,{line:n,column:a}=s.start,i=e.asString(),o=i?`\n\n|\n|  ${i.split("\n").join("\n|  ")}\n|\n\n`:"",l=new Error(`${t}: ${o}(error occurred in '${r}' @ line ${n} : column ${a})`)
return l.name="SyntaxError",l.location=e,l.code=i,l}!function(){function t(t,e){void 0===e&&(e={}),this.options=e,this.token=null,this.startLine=1,this.startColumn=0,this.tokens=[],this.tokenizer=new Ie(this,t,e.mode),this._currentAttribute=void 0}t.prototype.tokenize=function(t){return this.tokens=[],this.tokenizer.tokenize(t),this.tokens},t.prototype.tokenizePart=function(t){return this.tokens=[],this.tokenizer.tokenizePart(t),this.tokens},t.prototype.tokenizeEOF=function(){return this.tokens=[],this.tokenizer.tokenizeEOF(),this.tokens[0]},t.prototype.reset=function(){this.token=null,this.startLine=1,this.startColumn=0},t.prototype.current=function(){var t=this.token
if(null===t)throw new Error("token was unexpectedly null")
if(0===arguments.length)return t
for(var e=0;e<arguments.length;e++)if(t.type===arguments[e])return t
throw new Error("token type was unexpectedly "+t.type)},t.prototype.push=function(t){this.token=t,this.tokens.push(t)},t.prototype.currentAttribute=function(){return this._currentAttribute},t.prototype.addLocInfo=function(){this.options.loc&&(this.current().loc={start:{line:this.startLine,column:this.startColumn},end:{line:this.tokenizer.line,column:this.tokenizer.column}}),this.startLine=this.tokenizer.line,this.startColumn=this.tokenizer.column},t.prototype.beginDoctype=function(){this.push({type:"Doctype",name:""})},t.prototype.appendToDoctypeName=function(t){this.current("Doctype").name+=t},t.prototype.appendToDoctypePublicIdentifier=function(t){var e=this.current("Doctype")
void 0===e.publicIdentifier?e.publicIdentifier=t:e.publicIdentifier+=t},t.prototype.appendToDoctypeSystemIdentifier=function(t){var e=this.current("Doctype")
void 0===e.systemIdentifier?e.systemIdentifier=t:e.systemIdentifier+=t},t.prototype.endDoctype=function(){this.addLocInfo()},t.prototype.beginData=function(){this.push({type:"Chars",chars:""})},t.prototype.appendToData=function(t){this.current("Chars").chars+=t},t.prototype.finishData=function(){this.addLocInfo()},t.prototype.beginComment=function(){this.push({type:"Comment",chars:""})},t.prototype.appendToCommentData=function(t){this.current("Comment").chars+=t},t.prototype.finishComment=function(){this.addLocInfo()},t.prototype.tagOpen=function(){},t.prototype.beginStartTag=function(){this.push({type:"StartTag",tagName:"",attributes:[],selfClosing:!1})},t.prototype.beginEndTag=function(){this.push({type:"EndTag",tagName:""})},t.prototype.finishTag=function(){this.addLocInfo()},t.prototype.markTagAsSelfClosing=function(){this.current("StartTag").selfClosing=!0},t.prototype.appendToTagName=function(t){this.current("StartTag","EndTag").tagName+=t},t.prototype.beginAttribute=function(){this._currentAttribute=["","",!1]},t.prototype.appendToAttributeName=function(t){this.currentAttribute()[0]+=t},t.prototype.beginAttributeValue=function(t){this.currentAttribute()[2]=t},t.prototype.appendToAttributeValue=function(t){this.currentAttribute()[1]+=t},t.prototype.finishAttributeValue=function(){this.current("StartTag").attributes.push(this._currentAttribute)},t.prototype.reportSyntaxError=function(t){this.current().syntaxError=t}}()
const Re={Program:p("body"),Template:p("body"),Block:p("body"),MustacheStatement:p("path","params","hash"),BlockStatement:p("path","params","hash","program","inverse"),ElementModifierStatement:p("path","params","hash"),PartialStatement:p("name","params","hash"),CommentStatement:p(),MustacheCommentStatement:p(),ElementNode:p("attributes","modifiers","children","comments"),AttrNode:p("value"),TextNode:p(),ConcatStatement:p("parts"),SubExpression:p("path","params","hash"),PathExpression:p(),PathHead:p(),StringLiteral:p(),BooleanLiteral:p(),NumberLiteral:p(),NullLiteral:p(),UndefinedLiteral:p(),Hash:p("pairs"),HashPair:p("value"),NamedBlock:p("attributes","modifiers","children","comments"),SimpleElement:p("attributes","modifiers","children","comments"),Component:p("head","attributes","modifiers","children","comments")},$e=function(){function t(t,e,r,s){let n=Error.call(this,t)
this.key=s,this.message=t,this.node=e,this.parent=r,this.stack=n.stack}return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}()
function Fe(t,e,r){return new $e("Cannot remove a node unless it is part of an array",t,e,r)}function Ue(t,e,r){return new $e("Cannot replace a node with multiple nodes unless it is part of an array",t,e,r)}function Me(t,e){return new $e("Replacing and removing in key handlers is not yet supported.",t,null,e)}class ze{constructor(t,e=null,r=null){this.node=t,this.parent=e,this.parentKey=r}get parentNode(){return this.parent?this.parent.node:null}parents(){return{[Symbol.iterator]:()=>new je(this)}}}class je{constructor(t){this.path=t}next(){return this.path.parent?(this.path=this.path.parent,{done:!1,value:this.path}):{done:!0,value:null}}}function Ge(t){return"function"==typeof t?t:t.enter}function We(t){return"function"==typeof t?void 0:t.exit}function Ke(t,e){let r,s,n,{node:a,parent:i,parentKey:o}=e,l=function(t,e){if(("Template"===e||"Block"===e)&&t.Program)return t.Program
let r=t[e]
return void 0!==r?r:t.All}(t,a.type)
if(void 0!==l&&(r=Ge(l),s=We(l)),void 0!==r&&(n=r(a,e)),null!=n){if(JSON.stringify(a)!==JSON.stringify(n))return Array.isArray(n)?(Ye(t,n,i,o),n):Ke(t,new ze(n,i,o))||n
n=void 0}if(void 0===n){let r=Re[a.type]
for(let s=0;s<r.length;s++)Qe(t,l,e,r[s])
void 0!==s&&(n=s(a,e))}return n}function Je(t,e,r){t[e]=r}function Qe(t,e,r,s){let n,a,{node:i}=r,o=function(t,e){return t[e]}(i,s)
if(o){if(void 0!==e){let t=function(t,e){let r="function"!=typeof t?t.keys:void 0
if(void 0===r)return
let s=r[e]
return void 0!==s?s:r.All}(e,s)
void 0!==t&&(n=Ge(t),a=We(t))}if(void 0!==n&&void 0!==n(i,s))throw Me(i,s)
if(Array.isArray(o))Ye(t,o,r,s)
else{let e=Ke(t,new ze(o,r,s))
void 0!==e&&function(t,e,r,s){if(null===s)throw Fe(r,t,e)
if(Array.isArray(s)){if(1!==s.length)throw 0===s.length?Fe(r,t,e):Ue(r,t,e)
Je(t,e,s[0])}else Je(t,e,s)}(i,s,o,e)}if(void 0!==a&&void 0!==a(i,s))throw Me(i,s)}}function Ye(t,e,r,s){for(let n=0;n<e.length;n++){let a=e[n],i=Ke(t,new ze(a,r,s))
void 0!==i&&(n+=Ze(e,n,i)-1)}}function Ze(t,e,r){return null===r?(t.splice(e,1),0):Array.isArray(r)?(t.splice(e,1,...r),r.length):(t.splice(e,1,r),1)}function Xe(t,e){Ke(e,new ze(t))}class tr{constructor(t){this.order=t,this.stack=[]}visit(t,e){t&&(this.stack.push(t),"post"===this.order?(this.children(t,e),e(t,this)):(e(t,this),this.children(t,e)),this.stack.pop())}children(t,e){switch(t.type){case"Block":case"Template":return er.Program(this,t,e)
case"ElementNode":return er.ElementNode(this,t,e)
case"BlockStatement":return er.BlockStatement(this,t,e)
default:return}}}const er={Program(t,e,r){for(let s=0;s<e.body.length;s++)t.visit(e.body[s],r)},Template(t,e,r){for(let s=0;s<e.body.length;s++)t.visit(e.body[s],r)},Block(t,e,r){for(let s=0;s<e.body.length;s++)t.visit(e.body[s],r)},ElementNode(t,e,r){for(let s=0;s<e.children.length;s++)t.visit(e.children[s],r)},BlockStatement(t,e,r){t.visit(e.program,r),t.visit(e.inverse||null,r)}}
let rr=/[!"#%-,\.\/;->@\[-\^`\{-~]/
function sr(t,e){(function(t){switch(t.type){case"Block":case"Template":return t.body
case"ElementNode":return t.children}})(t).push(e)}function nr(t){return"StringLiteral"===t.type||"BooleanLiteral"===t.type||"NumberLiteral"===t.type||"NullLiteral"===t.type||"UndefinedLiteral"===t.type}function ar(t){return t[0]===t[0].toUpperCase()&&t[0]!==t[0].toLowerCase()}const ir={close:!1,open:!1},or=new class{pos(t,e){return{line:t,column:e}}blockItself({body:t,blockParams:e,chained:r=!1,loc:s}){return{type:"Block",body:t||[],blockParams:e||[],chained:r,loc:s}}template({body:t,blockParams:e,loc:r}){return{type:"Template",body:t||[],blockParams:e||[],loc:r}}mustache({path:t,params:e,hash:r,trusting:s,loc:n,strip:a=ir}){return{type:"MustacheStatement",path:t,params:e,hash:r,escaped:!s,trusting:s,loc:n,strip:a||{open:!1,close:!1}}}block({path:t,params:e,hash:r,defaultBlock:s,elseBlock:n=null,loc:a,openStrip:i=ir,inverseStrip:o=ir,closeStrip:l=ir}){return{type:"BlockStatement",path:t,params:e,hash:r,program:s,inverse:n,loc:a,openStrip:i,inverseStrip:o,closeStrip:l}}comment(t,e){return{type:"CommentStatement",value:t,loc:e}}mustacheComment(t,e){return{type:"MustacheCommentStatement",value:t,loc:e}}concat(t,e){return{type:"ConcatStatement",parts:t,loc:e}}element({tag:t,selfClosing:e,attrs:r,blockParams:s,modifiers:n,comments:a,children:i,loc:o}){return{type:"ElementNode",tag:t,selfClosing:e,attributes:r||[],blockParams:s||[],modifiers:n||[],comments:a||[],children:i||[],loc:o}}elementModifier({path:t,params:e,hash:r,loc:s}){return{type:"ElementModifierStatement",path:t,params:e,hash:r,loc:s}}attr({name:t,value:e,loc:r}){return{type:"AttrNode",name:t,value:e,loc:r}}text({chars:t,loc:e}){return{type:"TextNode",chars:t,loc:e}}sexpr({path:t,params:e,hash:r,loc:s}){return{type:"SubExpression",path:t,params:e,hash:r,loc:s}}path({head:t,tail:e,loc:r}){let{original:s}=function(t){switch(t.type){case"AtHead":case"VarHead":return{original:t.name,parts:[t.name]}
case"ThisHead":return{original:"this",parts:[]}}}(t),n=[...s,...e].join(".")
return new R(n,t,e,r)}head(t,e){return"@"===t[0]?this.atName(t,e):"this"===t?this.this(e):this.var(t,e)}this(t){return{type:"ThisHead",loc:t}}atName(t,e){return{type:"AtHead",name:t,loc:e}}var(t,e){return{type:"VarHead",name:t,loc:e}}hash(t,e){return{type:"Hash",pairs:t||[],loc:e}}pair({key:t,value:e,loc:r}){return{type:"HashPair",key:t,value:e,loc:r}}literal({type:t,value:e,loc:r}){return{type:t,value:e,original:e,loc:r}}undefined(){return this.literal({type:"UndefinedLiteral",value:void 0})}null(){return this.literal({type:"NullLiteral",value:null})}string(t,e){return this.literal({type:"StringLiteral",value:t,loc:e})}boolean(t,e){return this.literal({type:"BooleanLiteral",value:t,loc:e})}number(t,e){return this.literal({type:"NumberLiteral",value:t,loc:e})}}
class lr{constructor(t,e=new Ce(xe),r="precompile"){this.elementStack=[],this.currentAttribute=null,this.currentNode=null,this.source=t,this.lines=t.source.split(/(?:\r\n?|\n)/g),this.tokenizer=new Ie(this,e,r)}offset(){let{line:t,column:e}=this.tokenizer
return this.source.offsetFor(t,e)}pos({line:t,column:e}){return this.source.offsetFor(t,e)}finish(t){return u({},t,{loc:t.loc.until(this.offset())})}get currentAttr(){return this.currentAttribute}get currentTag(){return this.currentNode}get currentStartTag(){return this.currentNode}get currentEndTag(){return this.currentNode}get currentComment(){return this.currentNode}get currentData(){return this.currentNode}acceptTemplate(t){return this[t.type](t)}acceptNode(t){return this[t.type](t)}currentElement(){return this.elementStack[this.elementStack.length-1]}sourceForNode(t,e){let r,s,n,a=t.loc.start.line-1,i=a-1,o=t.loc.start.column,l=[]
for(e?(s=e.loc.end.line-1,n=e.loc.end.column):(s=t.loc.end.line-1,n=t.loc.end.column);i<s;)i++,r=this.lines[i],i===a?a===s?l.push(r.slice(o,n)):l.push(r.slice(o)):i===s?l.push(r.slice(0,n)):l.push(r)
return l.join("\n")}}class cr extends lr{get isTopLevel(){return 0===this.elementStack.length}Program(t){let e,r=[]
e=this.isTopLevel?or.template({body:r,blockParams:t.blockParams,loc:this.source.spanFor(t.loc)}):or.blockItself({body:r,blockParams:t.blockParams,chained:t.chained,loc:this.source.spanFor(t.loc)})
let s,n=t.body.length
if(this.elementStack.push(e),0===n)return this.elementStack.pop()
for(s=0;s<n;s++)this.acceptNode(t.body[s])
let a=this.elementStack.pop()
if(a!==e){let t=a
throw Ve(`Unclosed element \`${t.tag}\``,t.loc)}return e}BlockStatement(t){if("comment"===this.tokenizer.state)return void this.appendToCommentData(this.sourceForNode(t))
if("data"!==this.tokenizer.state&&"beforeData"!==this.tokenizer.state)throw Ve("A block may only be used inside an HTML element or another block.",this.source.spanFor(t.loc))
let{path:e,params:r,hash:s}=hr(this,t)
t.program.loc||(t.program.loc=y),t.inverse&&!t.inverse.loc&&(t.inverse.loc=y)
let n=this.Program(t.program),a=t.inverse?this.Program(t.inverse):null,i=or.block({path:e,params:r,hash:s,defaultBlock:n,elseBlock:a,loc:this.source.spanFor(t.loc),openStrip:t.openStrip,inverseStrip:t.inverseStrip,closeStrip:t.closeStrip})
sr(this.currentElement(),i)}MustacheStatement(t){let e,{tokenizer:r}=this
if("comment"===r.state)return void this.appendToCommentData(this.sourceForNode(t))
let{escaped:s,loc:n,strip:a}=t
if(nr(t.path))e=or.mustache({path:this.acceptNode(t.path),params:[],hash:or.hash([],this.source.spanFor(t.path.loc).collapse("end")),trusting:!s,loc:this.source.spanFor(n),strip:a})
else{let{path:r,params:i,hash:o}=hr(this,t)
e=or.mustache({path:r,params:i,hash:o,trusting:!s,loc:this.source.spanFor(n),strip:a})}switch(r.state){case"tagOpen":case"tagName":throw Ve("Cannot use mustaches in an elements tagname",e.loc)
case"beforeAttributeName":ur(this.currentStartTag,e)
break
case"attributeName":case"afterAttributeName":this.beginAttributeValue(!1),this.finishAttributeValue(),ur(this.currentStartTag,e),r.transitionTo("beforeAttributeName")
break
case"afterAttributeValueQuoted":ur(this.currentStartTag,e),r.transitionTo("beforeAttributeName")
break
case"beforeAttributeValue":this.beginAttributeValue(!1),this.appendDynamicAttributeValuePart(e),r.transitionTo("attributeValueUnquoted")
break
case"attributeValueDoubleQuoted":case"attributeValueSingleQuoted":case"attributeValueUnquoted":this.appendDynamicAttributeValuePart(e)
break
default:sr(this.currentElement(),e)}return e}appendDynamicAttributeValuePart(t){this.finalizeTextPart()
let e=this.currentAttr
e.isDynamic=!0,e.parts.push(t)}finalizeTextPart(){let t=this.currentAttr.currentPart
null!==t&&(this.currentAttr.parts.push(t),this.startTextPart())}startTextPart(){this.currentAttr.currentPart=null}ContentStatement(t){!function(t,e){let r=e.loc.start.line,s=e.loc.start.column,n=function(t,e){if(""===e)return{lines:t.split("\n").length-1,columns:0}
let r=t.split(e)[0].split(/\n/),s=r.length-1
return{lines:s,columns:r[s].length}}(e.original,e.value)
r+=n.lines,n.lines?s=n.columns:s+=n.columns,t.line=r,t.column=s}(this.tokenizer,t),this.tokenizer.tokenizePart(t.value),this.tokenizer.flushData()}CommentStatement(t){let{tokenizer:e}=this
if("comment"===e.state)return this.appendToCommentData(this.sourceForNode(t)),null
let{value:r,loc:s}=t,n=or.mustacheComment(r,this.source.spanFor(s))
switch(e.state){case"beforeAttributeName":case"afterAttributeName":this.currentStartTag.comments.push(n)
break
case"beforeData":case"data":sr(this.currentElement(),n)
break
default:throw Ve(`Using a Handlebars comment when in the \`${e.state}\` state is not supported`,this.source.spanFor(t.loc))}return n}PartialStatement(t){throw Ve("Handlebars partials are not supported",this.source.spanFor(t.loc))}PartialBlockStatement(t){throw Ve("Handlebars partial blocks are not supported",this.source.spanFor(t.loc))}Decorator(t){throw Ve("Handlebars decorators are not supported",this.source.spanFor(t.loc))}DecoratorBlock(t){throw Ve("Handlebars decorator blocks are not supported",this.source.spanFor(t.loc))}SubExpression(t){let{path:e,params:r,hash:s}=hr(this,t)
return or.sexpr({path:e,params:r,hash:s,loc:this.source.spanFor(t.loc)})}PathExpression(t){let e,{original:r}=t
if(-1!==r.indexOf("/")){if("./"===r.slice(0,2))throw Ve('Using "./" is not supported in Glimmer and unnecessary',this.source.spanFor(t.loc))
if("../"===r.slice(0,3))throw Ve('Changing context using "../" is not supported in Glimmer',this.source.spanFor(t.loc))
if(-1!==r.indexOf("."))throw Ve("Mixing '.' and '/' in paths is not supported in Glimmer; use only '.' to separate property paths",this.source.spanFor(t.loc))
e=[t.parts.join("/")]}else{if("."===r)throw Ve("'.' is not a supported path in Glimmer; check for a path with a trailing '.'",this.source.spanFor(t.loc))
e=t.parts}let s,n=!1
if(r.match(/^this(\..+)?$/)&&(n=!0),n)s={type:"ThisHead",loc:{start:t.loc.start,end:{line:t.loc.start.line,column:t.loc.start.column+4}}}
else if(t.data){let r=e.shift()
if(void 0===r)throw Ve("Attempted to parse a path expression, but it was not valid. Paths beginning with @ must start with a-z.",this.source.spanFor(t.loc))
s={type:"AtHead",name:`@${r}`,loc:{start:t.loc.start,end:{line:t.loc.start.line,column:t.loc.start.column+r.length+1}}}}else{let r=e.shift()
if(void 0===r)throw Ve("Attempted to parse a path expression, but it was not valid. Paths must start with a-z or A-Z.",this.source.spanFor(t.loc))
s={type:"VarHead",name:r,loc:{start:t.loc.start,end:{line:t.loc.start.line,column:t.loc.start.column+r.length}}}}return new R(t.original,s,e,this.source.spanFor(t.loc))}Hash(t){let e=[]
for(let r=0;r<t.pairs.length;r++){let s=t.pairs[r]
e.push(or.pair({key:s.key,value:this.acceptNode(s.value),loc:this.source.spanFor(s.loc)}))}return or.hash(e,this.source.spanFor(t.loc))}StringLiteral(t){return or.literal({type:"StringLiteral",value:t.value,loc:t.loc})}BooleanLiteral(t){return or.literal({type:"BooleanLiteral",value:t.value,loc:t.loc})}NumberLiteral(t){return or.literal({type:"NumberLiteral",value:t.value,loc:t.loc})}UndefinedLiteral(t){return or.literal({type:"UndefinedLiteral",value:void 0,loc:t.loc})}NullLiteral(t){return or.literal({type:"NullLiteral",value:null,loc:t.loc})}}function hr(t,e){let r="PathExpression"===e.path.type?t.PathExpression(e.path):t.SubExpression(e.path),s=e.params?e.params.map((e=>t.acceptNode(e))):[],n=s.length>0?s[s.length-1].loc:r.loc
return{path:r,params:s,hash:e.hash?t.Hash(e.hash):{type:"Hash",pairs:[],loc:t.source.spanFor(n).collapse("end")}}}function ur(t,e){let{path:r,params:s,hash:n,loc:a}=e
if(nr(r)){let s=`{{${function(t){return"UndefinedLiteral"===t.type?"undefined":JSON.stringify(t.value)}(r)}}}`
throw Ve(`In <${t.name} ... ${s} ..., ${s} is not a valid modifier`,e.loc)}let i=or.elementModifier({path:r,params:s,hash:n,loc:a})
t.modifiers.push(i)}class pr extends cr{constructor(){super(...arguments),this.tagOpenLine=0,this.tagOpenColumn=0}reset(){this.currentNode=null}beginComment(){this.currentNode=or.comment("",this.source.offsetFor(this.tagOpenLine,this.tagOpenColumn))}appendToCommentData(t){this.currentComment.value+=t}finishComment(){sr(this.currentElement(),this.finish(this.currentComment))}beginData(){this.currentNode=or.text({chars:"",loc:this.offset().collapsed()})}appendToData(t){this.currentData.chars+=t}finishData(){this.currentData.loc=this.currentData.loc.withEnd(this.offset()),sr(this.currentElement(),this.currentData)}tagOpen(){this.tagOpenLine=this.tokenizer.line,this.tagOpenColumn=this.tokenizer.column}beginStartTag(){this.currentNode={type:"StartTag",name:"",attributes:[],modifiers:[],comments:[],selfClosing:!1,loc:this.source.offsetFor(this.tagOpenLine,this.tagOpenColumn)}}beginEndTag(){this.currentNode={type:"EndTag",name:"",attributes:[],modifiers:[],comments:[],selfClosing:!1,loc:this.source.offsetFor(this.tagOpenLine,this.tagOpenColumn)}}finishTag(){let t=this.finish(this.currentTag)
if("StartTag"===t.type){if(this.finishStartTag(),":"===t.name)throw Ve("Invalid named block named detected, you may have created a named block without a name, or you may have began your name with a number. Named blocks must have names that are at least one character long, and begin with a lower case letter",this.source.spanFor({start:this.currentTag.loc.toJSON(),end:this.offset().toJSON()}));(jt[t.name]||t.selfClosing)&&this.finishEndTag(!0)}else"EndTag"===t.type&&this.finishEndTag(!1)}finishStartTag(){let{name:t,attributes:e,modifiers:r,comments:s,selfClosing:n,loc:a}=this.finish(this.currentStartTag),i=or.element({tag:t,selfClosing:n,attrs:e,modifiers:r,comments:s,children:[],blockParams:[],loc:a})
this.elementStack.push(i)}finishEndTag(t){let e=this.finish(this.currentTag),r=this.elementStack.pop(),s=this.currentElement()
this.validateEndTag(e,r,t),r.loc=r.loc.withEnd(this.offset()),function(t){let e=function(t){let e=t.attributes.length,r=[]
for(let n=0;n<e;n++)r.push(t.attributes[n].name)
let s=r.indexOf("as")
if(-1===s&&r.length>0&&"|"===r[r.length-1].charAt(0))throw Ve("Block parameters must be preceded by the `as` keyword, detected block parameters without `as`",t.loc)
if(-1!==s&&e>s&&"|"===r[s+1].charAt(0)){let n=r.slice(s).join(" ")
if("|"!==n.charAt(n.length-1)||2!==n.match(/\|/g).length)throw Ve("Invalid block parameters syntax, '"+n+"'",t.loc)
let a=[]
for(let i=s+1;i<e;i++){let e=r[i].replace(/\|/g,"")
if(""!==e){if(rr.test(e))throw Ve("Invalid identifier for block parameters, '"+e+"'",t.loc)
a.push(e)}}if(0===a.length)throw Ve("Cannot use zero block parameters",t.loc)
return t.attributes=t.attributes.slice(0,s),a}return null}(t)
e&&(t.blockParams=e)}(r),sr(s,r)}markTagAsSelfClosing(){this.currentTag.selfClosing=!0}appendToTagName(t){this.currentTag.name+=t}beginAttribute(){let t=this.offset()
this.currentAttribute={name:"",parts:[],currentPart:null,isQuoted:!1,isDynamic:!1,start:t,valueSpan:t.collapsed()}}appendToAttributeName(t){this.currentAttr.name+=t}beginAttributeValue(t){this.currentAttr.isQuoted=t,this.startTextPart(),this.currentAttr.valueSpan=this.offset().collapsed()}appendToAttributeValue(t){let e=this.currentAttr.parts,r=e[e.length-1],s=this.currentAttr.currentPart
if(s)s.chars+=t,s.loc=s.loc.withEnd(this.offset())
else{let e=this.offset()
e="\n"===t?r?r.loc.getEnd():this.currentAttr.valueSpan.getStart():e.move(-1),this.currentAttr.currentPart=or.text({chars:t,loc:e.collapsed()})}}finishAttributeValue(){this.finalizeTextPart()
let t=this.currentTag,e=this.offset()
if("EndTag"===t.type)throw Ve("Invalid end tag: closing tag must not have attributes",this.source.spanFor({start:t.loc.toJSON(),end:e.toJSON()}))
let{name:r,parts:s,start:n,isQuoted:a,isDynamic:i,valueSpan:o}=this.currentAttr,l=this.assembleAttributeValue(s,a,i,n.until(e))
l.loc=o.withEnd(e)
let c=or.attr({name:r,value:l,loc:n.until(e)})
this.currentStartTag.attributes.push(c)}reportSyntaxError(t){throw Ve(t,this.offset().collapsed())}assembleConcatenatedValue(t){for(let s=0;s<t.length;s++){let e=t[s]
if("MustacheStatement"!==e.type&&"TextNode"!==e.type)throw Ve("Unsupported node in quoted attribute value: "+e.type,e.loc)}m(t,"the concatenation parts of an element should not be empty")
let e=t[0],r=t[t.length-1]
return or.concat(t,this.source.spanFor(e.loc).extend(this.source.spanFor(r.loc)))}validateEndTag(t,e,r){let s
if(jt[t.name]&&!r?s=`<${t.name}> elements do not need end tags. You should remove it`:void 0===e.tag?s=`Closing tag </${t.name}> without an open tag`:e.tag!==t.name&&(s=`Closing tag </${t.name}> did not match last open tag <${e.tag}> (on line ${e.loc.startPosition.line})`),s)throw Ve(s,t.loc)}assembleAttributeValue(t,e,r,s){if(r){if(e)return this.assembleConcatenatedValue(t)
if(1===t.length||2===t.length&&"TextNode"===t[1].type&&"/"===t[1].chars)return t[0]
throw Ve("An unquoted attribute value must be a string or a mustache, preceded by whitespace or a '=' character, and followed by whitespace, a '>' character, or '/>'",s)}return t.length>0?t[0]:or.text({chars:"",loc:s})}}const dr={parse:fr,builders:Y,print:He,traverse:Xe,Walker:tr}
class mr extends Ce{constructor(){super({})}parse(){}}function fr(t,e={}){var r,s,n
let a,i,o,l=e.mode||"precompile"
"string"==typeof t?(a=new V(t,null===(r=e.meta)||void 0===r?void 0:r.moduleName),i="codemod"===l?Pe(t,e.parseOptions):Te(t,e.parseOptions)):t instanceof V?(a=t,i="codemod"===l?Pe(t.source,e.parseOptions):Te(t.source,e.parseOptions)):(a=new V("",null===(s=e.meta)||void 0===s?void 0:s.moduleName),i=t),"codemod"===l&&(o=new mr)
let c=_.forCharPositions(a,0,a.source.length)
i.loc={source:"(program)",start:c.startPosition,end:c.endPosition}
let h=new pr(a,o,l).acceptTemplate(i)
if(e.strictMode&&(h.blockParams=null!==(n=e.locals)&&void 0!==n?n:[]),e&&e.plugins&&e.plugins.ast)for(let p=0,d=e.plugins.ast.length;p<d;p++)Xe(h,(0,e.plugins.ast[p])(u({},e,{syntax:dr},{plugins:void 0})).visitor)
return h}class gr{static top(t,e){return new br(t,e)}child(t){let e=t.map((t=>this.allocate(t)))
return new yr(this,t,e)}}class br extends gr{constructor(t,e){super(),this.templateLocals=t,this.customizeComponentName=e,this.symbols=[],this.upvars=[],this.size=1,this.named=l(),this.blocks=l(),this.usedTemplateLocals=[],this._hasEval=!1}getUsedTemplateLocals(){return this.usedTemplateLocals}setHasEval(){this._hasEval=!0}get hasEval(){return this._hasEval}has(t){return-1!==this.templateLocals.indexOf(t)}get(t){let e=this.usedTemplateLocals.indexOf(t)
return-1!==e||(e=this.usedTemplateLocals.length,this.usedTemplateLocals.push(t)),[e,!0]}getLocalsMap(){return l()}getEvalInfo(){let t=this.getLocalsMap()
return Object.keys(t).map((e=>t[e]))}allocateFree(t,e){39===e.resolution()&&e.isAngleBracket&&ar(t)&&(t=this.customizeComponentName(t))
let r=this.upvars.indexOf(t)
return-1!==r||(r=this.upvars.length,this.upvars.push(t)),r}allocateNamed(t){let e=this.named[t]
return e||(e=this.named[t]=this.allocate(t)),e}allocateBlock(t){"inverse"===t&&(t="else")
let e=this.blocks[t]
return e||(e=this.blocks[t]=this.allocate(`&${t}`)),e}allocate(t){return this.symbols.push(t),this.size++}}class yr extends gr{constructor(t,e,r){super(),this.parent=t,this.symbols=e,this.slots=r}get locals(){return this.symbols}has(t){return-1!==this.symbols.indexOf(t)||this.parent.has(t)}get(t){let e=this.symbols.indexOf(t)
return-1===e?this.parent.get(t):[this.slots[e],!1]}getLocalsMap(){let t=this.parent.getLocalsMap()
return this.symbols.forEach((e=>t[e]=this.get(e)[0])),t}getEvalInfo(){let t=this.getLocalsMap()
return Object.keys(t).map((e=>t[e]))}setHasEval(){this.parent.setHasEval()}allocateFree(t,e){return this.parent.allocateFree(t,e)}allocateNamed(t){return this.parent.allocateNamed(t)}allocateBlock(t){return this.parent.allocateBlock(t)}allocate(t){return this.parent.allocate(t)}}class vr{template(t,e,r){return new qt({table:t,body:e,loc:r})}block(t,e,r){return new Ot({scope:t,body:e,loc:r})}namedBlock(t,e,r){return new Ht({name:t,block:e,attrs:[],componentArgs:[],modifiers:[],loc:r})}simpleNamedBlock(t,e,r){return new kr({selfClosing:!1,attrs:[],componentArgs:[],modifiers:[],comments:[]}).named(t,e,r)}slice(t,e){return new k({loc:e,chars:t})}args(t,e,r){return new at({loc:r,positional:t,named:e})}positional(t,e){return new it({loc:e,exprs:t})}namedArgument(t,e){return new lt({name:t,value:e})}named(t,e){return new ot({loc:e,entries:t})}attr({name:t,value:e,trusting:r},s){return new ct({loc:s,name:t,value:e,trusting:r})}splatAttr(t,e){return new ht({symbol:t,loc:e})}arg({name:t,value:e,trusting:r},s){return new ut({name:t,value:e,trusting:r,loc:s})}path(t,e,r){return new xt({loc:r,ref:t,tail:e})}self(t){return new Ct({loc:t})}at(t,e,r){return new Dt({loc:r,name:new k({loc:r,chars:t}),symbol:e})}freeVar({name:t,context:e,symbol:r,loc:s}){return new _t({name:t,resolution:e,symbol:r,loc:s})}localVar(t,e,r,s){return new Bt({loc:s,name:t,isTemplateLocal:r,symbol:e})}sexp(t,e){return new Nt({loc:e,callee:t.callee,args:t.args})}deprecatedCall(t,e,r){return new At({loc:r,arg:t,callee:e})}interpolate(t,e){return m(t),new Lt({loc:e,parts:t})}literal(t,e){return new Pt({loc:e,value:t})}append({table:t,trusting:e,value:r},s){return new kt({table:t,trusting:e,value:r,loc:s})}modifier({callee:t,args:e},r){return new pt({loc:r,callee:t,args:e})}namedBlocks(t,e){return new It({loc:e,blocks:t})}blockStatement(t,e){var{symbols:r,program:s,inverse:n=null}=t,a=function(t,e){var r={}
for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(r[s]=t[s])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0
for(s=Object.getOwnPropertySymbols(t);n<s.length;n++)e.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]])}return r}(t,["symbols","program","inverse"])
let i=s.loc,o=[this.namedBlock(k.synthetic("default"),s,s.loc)]
return n&&(i=i.extend(n.loc),o.push(this.namedBlock(k.synthetic("else"),n,n.loc))),new wt({loc:e,blocks:this.namedBlocks(o,i),callee:a.callee,args:a.args})}element(t){return new kr(t)}}class kr{constructor(t){this.base=t,this.builder=new vr}simple(t,e,r){return new Et(u({tag:t,body:e,componentArgs:[],loc:r},this.base))}named(t,e,r){return new Ht(u({name:t,block:e,componentArgs:[],loc:r},this.base))}selfClosingComponent(t,e){return new St(u({loc:e,callee:t,blocks:new It({blocks:[],loc:e.sliceEndChars({skipEnd:1,chars:1})})},this.base))}componentWithDefaultBlock(t,e,r,s){let n=this.builder.block(r,e,s),a=this.builder.namedBlock(k.synthetic("default"),n,s)
return new St(u({loc:s,callee:t,blocks:this.builder.namedBlocks([a],a.loc)},this.base))}componentWithNamedBlocks(t,e,r){return new St(u({loc:r,callee:t,blocks:this.builder.namedBlocks(e,dt.range(e))},this.base))}}function wr(t){return Tr(t)?et.namespaced("Helper"):null}function Sr(t){return Tr(t)?et.namespaced("Modifier"):null}function Er(t){return Tr(t)?et.namespaced("Component"):et.fallback()}function Pr(t){return xr(t)?et.namespaced("Component",!0):null}function Tr(t){return xr(t.path)}function xr(t){return"PathExpression"===t.type&&"VarHead"===t.head.type&&0===t.tail.length}function Nr(t){return t.params.length>0||t.hash.pairs.length>0}function Ar(t,e={}){var r
let s=fr(t,e),n=u({strictMode:!1,locals:[]},e),a=gr.top(n.locals,null!==(r=e.customizeComponentName)&&void 0!==r?r:t=>t),i=new Lr(t,n,a),o=new Dr(i)
return[new qr(i.loc(s.loc),s.body.map((t=>o.normalize(t))),i).assertTemplate(a),a.getUsedTemplateLocals()]}class Lr{constructor(t,e,r){this.source=t,this.options=e,this.table=r,this.builder=new vr}get strict(){return this.options.strictMode||!1}loc(t){return this.source.spanFor(t)}resolutionFor(t,e){if(this.strict)return{resolution:tt}
if(this.isFreeVar(t)){let r=e(t)
return null===r?{resolution:"error",path:Hr(t),head:Vr(t)}:{resolution:r}}return{resolution:tt}}isFreeVar(t){return"PathExpression"===t.type?"VarHead"===t.head.type&&!this.table.has(t.head.name):"PathExpression"===t.path.type&&this.isFreeVar(t.path)}hasBinding(t){return this.table.has(t)}child(t){return new Lr(this.source,this.options,this.table.child(t))}customizeComponentName(t){return this.options.customizeComponentName?this.options.customizeComponentName(t):t}}class Cr{constructor(t){this.block=t}normalize(t,e){switch(t.type){case"NullLiteral":case"BooleanLiteral":case"NumberLiteral":case"StringLiteral":case"UndefinedLiteral":return this.block.builder.literal(t.value,this.block.loc(t.loc))
case"PathExpression":return this.path(t,e)
case"SubExpression":{let e=this.block.resolutionFor(t,wr)
if("error"===e.resolution)throw Ve(`You attempted to invoke a path (\`${e.path}\`) but ${e.head} was not in scope`,t.loc)
return this.block.builder.sexp(this.callParts(t,e.resolution),this.block.loc(t.loc))}}}path(t,e){let r=[],s=this.block.loc(t.head.loc)
for(let n of t.tail)s=s.sliceStartChars({chars:n.length,skipStart:1}),r.push(new k({loc:s,chars:n}))
return this.block.builder.path(this.ref(t.head,e),r,this.block.loc(t.loc))}callParts(t,e){let{path:r,params:s,hash:n}=t,a=this.normalize(r,e),i=s.map((t=>this.normalize(t,rt))),o=dt.range(i,a.loc.collapse("end")),l=this.block.loc(n.loc),c=dt.range([o,l]),h=this.block.builder.positional(s.map((t=>this.normalize(t,rt))),o),u=this.block.builder.named(n.pairs.map((t=>this.namedArgument(t))),this.block.loc(n.loc))
return{callee:a,args:this.block.builder.args(h,u,c)}}namedArgument(t){let e=this.block.loc(t.loc).sliceStartChars({chars:t.key.length})
return this.block.builder.namedArgument(new k({chars:t.key,loc:e}),this.normalize(t.value,rt))}ref(t,e){let{block:r}=this,{builder:s,table:n}=r,a=r.loc(t.loc)
switch(t.type){case"ThisHead":return s.self(a)
case"AtHead":{let e=n.allocateNamed(t.name)
return s.at(t.name,e,a)}case"VarHead":if(r.hasBinding(t.name)){let[e,s]=n.get(t.name)
return r.builder.localVar(t.name,e,s,a)}{let s=r.strict?tt:e,n=r.table.allocateFree(t.name,s)
return r.builder.freeVar({name:t.name,context:s,symbol:n,loc:a})}}}}class Dr{constructor(t){this.block=t}normalize(t){switch(t.type){case"PartialStatement":throw new Error("Handlebars partial syntax ({{> ...}}) is not allowed in Glimmer")
case"BlockStatement":return this.BlockStatement(t)
case"ElementNode":return new Br(this.block).ElementNode(t)
case"MustacheStatement":return this.MustacheStatement(t)
case"MustacheCommentStatement":return this.MustacheCommentStatement(t)
case"CommentStatement":{let e=this.block.loc(t.loc)
return new vt({loc:e,text:e.slice({skipStart:4,skipEnd:3}).toSlice(t.value)})}case"TextNode":return new yt({loc:this.block.loc(t.loc),chars:t.chars})}}MustacheCommentStatement(t){let e,r=this.block.loc(t.loc)
return e="{{!--"===r.asString().slice(0,5)?r.slice({skipStart:5,skipEnd:4}):r.slice({skipStart:3,skipEnd:2}),new bt({loc:r,text:e.toSlice(t.value)})}MustacheStatement(t){let{escaped:e}=t,r=this.block.loc(t.loc),s=this.expr.callParts({path:t.path,params:t.params,hash:t.hash},function(t){let e=Tr(t),r=Nr(t),s=t.trusting
return e?s?et.trustingAppend({invoke:r}):et.append({invoke:r}):et.fallback()}(t)),n=s.args.isEmpty()?s.callee:this.block.builder.sexp(s,r)
return this.block.builder.append({table:this.block.table,trusting:!e,value:n},r)}BlockStatement(t){let{program:e,inverse:r}=t,s=this.block.loc(t.loc),n=this.block.resolutionFor(t,Er)
if("error"===n.resolution)throw Ve(`You attempted to invoke a path (\`{{#${n.path}}}\`) but ${n.head} was not in scope`,s)
let a=this.expr.callParts(t,n.resolution)
return this.block.builder.blockStatement(u({symbols:this.block.table,program:this.Block(e),inverse:r?this.Block(r):null},a),s)}Block({body:t,loc:e,blockParams:r}){let s=this.block.child(r),n=new Dr(s)
return new Or(this.block.loc(e),t.map((t=>n.normalize(t))),this.block).assertBlock(s.table)}get expr(){return new Cr(this.block)}}class Br{constructor(t){this.ctx=t}ElementNode(t){let{tag:e,selfClosing:r,comments:s}=t,n=this.ctx.loc(t.loc),[a,...i]=e.split("."),o=this.classifyTag(a,i,t.loc),l=t.attributes.filter((t=>"@"!==t.name[0])).map((t=>this.attr(t))),c=t.attributes.filter((t=>"@"===t.name[0])).map((t=>this.arg(t))),h=t.modifiers.map((t=>this.modifier(t))),u=this.ctx.child(t.blockParams),p=new Dr(u),d=t.children.map((t=>p.normalize(t))),m=this.ctx.builder.element({selfClosing:r,attrs:l,componentArgs:c,modifiers:h,comments:s.map((t=>new Dr(this.ctx).MustacheCommentStatement(t)))}),f=new Ir(m,n,d,this.ctx),g=this.ctx.loc(t.loc).sliceStartChars({chars:e.length,skipStart:1})
if("ElementHead"===o)return":"===e[0]?f.assertNamedBlock(g.slice({skipStart:1}).toSlice(e.slice(1)),u.table):f.assertElement(g.toSlice(e),t.blockParams.length>0)
if(t.selfClosing)return m.selfClosingComponent(o,n)
{let r=f.assertComponent(e,u.table,t.blockParams.length>0)
return m.componentWithNamedBlocks(o,r,n)}}modifier(t){let e=this.ctx.resolutionFor(t,Sr)
if("error"===e.resolution)throw Ve(`You attempted to invoke a path (\`{{#${e.path}}}\`) as a modifier, but ${e.head} was not in scope. Try adding \`this\` to the beginning of the path`,t.loc)
let r=this.expr.callParts(t,e.resolution)
return this.ctx.builder.modifier(r,this.ctx.loc(t.loc))}mustacheAttr(t){let e=this.ctx.builder.sexp(this.expr.callParts(t,function(t){let e=Tr(t),r=Nr(t)
return e?r?et.namespaced("Helper"):et.attr():r?tt:et.fallback()}(t)),this.ctx.loc(t.loc))
return e.args.isEmpty()?e.callee:e}attrPart(t){switch(t.type){case"MustacheStatement":return{expr:this.mustacheAttr(t),trusting:!t.escaped}
case"TextNode":return{expr:this.ctx.builder.literal(t.chars,this.ctx.loc(t.loc)),trusting:!0}}}attrValue(t){if("ConcatStatement"===t.type){let e=t.parts.map((t=>this.attrPart(t).expr))
return{expr:this.ctx.builder.interpolate(e,this.ctx.loc(t.loc)),trusting:!1}}return this.attrPart(t)}attr(t){if("...attributes"===t.name)return this.ctx.builder.splatAttr(this.ctx.table.allocateBlock("attrs"),this.ctx.loc(t.loc))
let e=this.ctx.loc(t.loc),r=e.sliceStartChars({chars:t.name.length}).toSlice(t.name),s=this.attrValue(t.value)
return this.ctx.builder.attr({name:r,value:s.expr,trusting:s.trusting},e)}maybeDeprecatedCall(t,e){if(this.ctx.strict)return null
if("MustacheStatement"!==e.type)return null
let{path:r}=e
if("PathExpression"!==r.type)return null
if("VarHead"!==r.head.type)return null
let{name:s}=r.head
if("has-block"===s||"has-block-params"===s)return null
if(this.ctx.hasBinding(s))return null
if(0!==r.tail.length)return null
if(0!==e.params.length||0!==e.hash.pairs.length)return null
let n=et.attr(),a=this.ctx.builder.freeVar({name:s,context:n,symbol:this.ctx.table.allocateFree(s,n),loc:r.loc})
return{expr:this.ctx.builder.deprecatedCall(t,a,e.loc),trusting:!1}}arg(t){let e=this.ctx.loc(t.loc),r=e.sliceStartChars({chars:t.name.length}).toSlice(t.name),s=this.maybeDeprecatedCall(r,t.value)||this.attrValue(t.value)
return this.ctx.builder.arg({name:r,value:s.expr,trusting:s.trusting},e)}classifyTag(t,e,r){let s=ar(t),n="@"===t[0]||"this"===t||this.ctx.hasBinding(t)
if(this.ctx.strict&&!n){if(s)throw Ve(`Attempted to invoke a component that was not in scope in a strict mode template, \`<${t}>\`. If you wanted to create an element with that name, convert it to lowercase - \`<${t.toLowerCase()}>\``,r)
return"ElementHead"}let a=n||s,i=r.sliceStartChars({skipStart:1,chars:t.length}),o=e.reduce(((t,e)=>t+1+e.length),0),l=i.getEnd().move(o),c=i.withEnd(l)
if(a){let s=or.path({head:or.head(t,i),tail:e,loc:c}),n=this.ctx.resolutionFor(s,Pr)
if("error"===n.resolution)throw Ve(`You attempted to invoke a path (\`<${n.path}>\`) but ${n.head} was not in scope`,r)
return new Cr(this.ctx).normalize(s,n.resolution)}if(e.length>0)throw Ve(`You used ${t}.${e.join(".")} as a tag name, but ${t} is not in scope`,r)
return"ElementHead"}get expr(){return new Cr(this.ctx)}}class _r{constructor(t,e,r){this.loc=t,this.children=e,this.block=r,this.namedBlocks=e.filter((t=>t instanceof Ht)),this.hasSemanticContent=Boolean(e.filter((t=>{if(t instanceof Ht)return!1
switch(t.type){case"GlimmerComment":case"HtmlComment":return!1
case"HtmlText":return!/^\s*$/.exec(t.chars)
default:return!0}})).length),this.nonBlockChildren=e.filter((t=>!(t instanceof Ht)))}}class qr extends _r{assertTemplate(t){if(d(this.namedBlocks))throw Ve("Unexpected named block at the top-level of a template",this.loc)
return this.block.builder.template(t,this.nonBlockChildren,this.block.loc(this.loc))}}class Or extends _r{assertBlock(t){if(d(this.namedBlocks))throw Ve("Unexpected named block nested in a normal block",this.loc)
return this.block.builder.block(t,this.nonBlockChildren,this.loc)}}class Ir extends _r{constructor(t,e,r,s){super(e,r,s),this.el=t}assertNamedBlock(t,e){if(this.el.base.selfClosing)throw Ve(`<:${t.chars}/> is not a valid named block: named blocks cannot be self-closing`,this.loc)
if(d(this.namedBlocks))throw Ve(`Unexpected named block inside <:${t.chars}> named block: named blocks cannot contain nested named blocks`,this.loc)
if((r=t.chars)[0]!==r[0].toLowerCase()||r[0]===r[0].toUpperCase())throw Ve(`<:${t.chars}> is not a valid named block, and named blocks must begin with a lowercase letter`,this.loc)
var r
if(this.el.base.attrs.length>0||this.el.base.componentArgs.length>0||this.el.base.modifiers.length>0)throw Ve(`named block <:${t.chars}> cannot have attributes, arguments, or modifiers`,this.loc)
let s=dt.range(this.nonBlockChildren,this.loc)
return this.block.builder.namedBlock(t,this.block.builder.block(e,this.nonBlockChildren,s),this.loc)}assertElement(t,e){if(e)throw Ve(`Unexpected block params in <${t}>: simple elements cannot have block params`,this.loc)
if(d(this.namedBlocks)){let e=this.namedBlocks.map((t=>t.name))
if(1===e.length)throw Ve(`Unexpected named block <:foo> inside <${t.chars}> HTML element`,this.loc)
{let r=e.map((t=>`<:${t.chars}>`)).join(", ")
throw Ve(`Unexpected named blocks inside <${t.chars}> HTML element (${r})`,this.loc)}}return this.el.simple(t,this.nonBlockChildren,this.loc)}assertComponent(t,e,r){if(d(this.namedBlocks)&&this.hasSemanticContent)throw Ve(`Unexpected content inside <${t}> component invocation: when using named blocks, the tag cannot contain other content`,this.loc)
if(d(this.namedBlocks)){if(r)throw Ve(`Unexpected block params list on <${t}> component invocation: when passing named blocks, the invocation tag cannot take block params`,this.loc)
let e=new Set
for(let t of this.namedBlocks){let r=t.name.chars
if(e.has(r))throw Ve(`Component had two named blocks with the same name, \`<:${r}>\`. Only one block with a given name may be passed`,this.loc)
if("inverse"===r&&e.has("else")||"else"===r&&e.has("inverse"))throw Ve("Component has both <:else> and <:inverse> block. <:inverse> is an alias for <:else>",this.loc)
e.add(r)}return this.namedBlocks}return[this.block.builder.namedBlock(k.synthetic("default"),this.block.builder.block(e,this.nonBlockChildren,this.loc),this.loc)]}}function Hr(t){return"PathExpression"!==t.type&&"PathExpression"===t.path.type?Hr(t.path):new Wt({entityEncoding:"raw"}).print(t)}function Vr(t){if("PathExpression"!==t.type)return"PathExpression"===t.path.type?Vr(t.path):new Wt({entityEncoding:"raw"}).print(t)
switch(t.head.type){case"AtHead":case"VarHead":return t.head.name
case"ThisHead":return"this"}}function Rr(t){return t in $r}const $r={component:["Call","Append","Block"],debugger:["Append"],"each-in":["Block"],each:["Block"],"has-block-params":["Call","Append"],"has-block":["Call","Append"],helper:["Call","Append"],if:["Call","Append","Block"],"in-element":["Block"],let:["Block"],"link-to":["Append","Block"],log:["Call","Append"],modifier:["Call"],mount:["Append"],mut:["Call","Append"],outlet:["Append"],"query-params":["Call"],readonly:["Call","Append"],unbound:["Call","Append"],unless:["Call","Append","Block"],with:["Block"],yield:["Append"]}
function Fr(t,e,r,s){const n=function(t,e,r){if("PathExpression"===t.type){if("AtHead"===t.head.type||"ThisHead"===t.head.type)return
const r=t.head.name
if(-1===e.indexOf(r))return r}else if("ElementNode"===t.type){const{tag:s}=t,n=s.charAt(0)
if(":"===n||"@"===n)return
if(!r.includeHtmlElements&&-1===s.indexOf(".")&&s.toLowerCase()===s)return
if("this."===s.substr(0,5))return
if(-1!==e.indexOf(s))return
return s}}(e,r,s);(Array.isArray(n)?n:[n]).forEach((e=>{void 0!==e&&"@"!==e[0]&&t.add(e.split(".")[0])}))}function Ur(t,e={includeHtmlElements:!1,includeKeywords:!1}){const r=fr(t),s=new Set,n=[]
Xe(r,{Block:{enter({blockParams:t}){t.forEach((t=>{n.push(t)}))},exit({blockParams:t}){t.forEach((()=>{n.pop()}))}},ElementNode:{enter(t){t.blockParams.forEach((t=>{n.push(t)})),Fr(s,t,n,e)},exit({blockParams:t}){t.forEach((()=>{n.pop()}))}},PathExpression(t){Fr(s,t,n,e)}})
let a=[]
return s.forEach((t=>a.push(t))),(null==e?void 0:e.includeKeywords)||(a=a.filter((t=>!Rr(t)))),a}},129:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.builders=e.useCustomPrinter=void 0
const s=r(3334)
e.useCustomPrinter=function(t){switch(t.type){case"StringLiteral":return!!t.quoteType
case"AttrNode":{const e=t
return!!e.isValueless||void 0!==e.quoteType}default:return!1}},e.builders=s.builders},2834:function(t,e,r){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}}
Object.defineProperty(e,"__esModule",{value:!0}),e.sourceForLoc=e.builders=e.traverse=e.transform=e.print=e.parse=void 0
const n=r(3334),a=s(r(5319)),i=r(129),o=new WeakMap
function l(t){return new a.default(t,o).ast}function c(t){return(0,n.print)(t,{entityEncoding:"raw",override:t=>{let e=o.get(t)
if(e)return e.parse_result.print(t)}})}e.parse=l,e.print=c,e.transform=function(t,e){let r,s,a,o
if(void 0===e){let r=t
o=r.template,e=r.plugin,a=r.filePath}else o=t,a=void 0
"string"==typeof o?(r=l(o),s=o):(r=o,s=c(r))
const h=e({contents:s,filePath:a,syntax:{parse:l,builders:i.builders,print:c,traverse:n.traverse,Walker:n.Walker},parseOptions:{srcName:a}})
return(0,n.traverse)(r,h),{ast:r,code:c(r)}}
var h=r(3334)
Object.defineProperty(e,"traverse",{enumerable:!0,get:function(){return h.traverse}})
var u=r(129)
Object.defineProperty(e,"builders",{enumerable:!0,get:function(){return u.builders}})
var p=r(542)
Object.defineProperty(e,"sourceForLoc",{enumerable:!0,get:function(){return p.sourceForLoc}})},5319:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0})
const s=r(3334),n=r(542),a=r(129),i=/(^\s+)/,o=/(^[^=]+)(\s+)?(=)?(\s+)?(['"])?(\S+)?/,l=/(^[^=]+)(\s+)?=(\s+)?(\S+)/,c=/[^-.a-zA-Z0-9]/,h=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"])
e.default=class{constructor(t,e=new WeakMap){this.ancestor=new Map,this.dirtyFields=new Map
let r=(0,s.preprocess)(t,{mode:"codemod"})
const a=(0,n.getLines)(t)
r=function(t,e){return(0,s.traverse)(e,{AttrNode(e){const r=e,a=(0,n.sourceForLoc)(t,r.loc),i=a.match(o)
if(null===i)throw new Error(`Could not match attr node parts for ${a}`)
const[,,,l,,c]=i,h=!l
if(h&&"TextNode"===r.value.type&&""===r.value.chars){const{start:{line:t,column:e}}=r.loc
r.loc=s.builders.loc(t,e,t,e+r.name.length)}r.isValueless=h,r.quoteType=c||null},StringLiteral(e){const r=e,s=(0,n.sourceForLoc)(t,r.loc)
if(!s.match(/^['"]/))throw new Error("Invalid string literal found")
r.quoteType=s[0]},TextNode(e,r){if(null===r.parentNode)throw new Error("ember-template-recast: Error while sanitizing input AST: found TextNode with no parentNode")
switch(r.parentNode.type){case"AttrNode":{const r=(0,n.sourceForLoc)(t,e.loc)
if(e.chars.length>0&&(r.startsWith("'")&&r.endsWith("'")||r.startsWith('"')&&r.endsWith('"'))){const{start:t,end:r}=e.loc
e.loc=s.builders.loc(t.line,t.column+1,r.line,r.column-1)}break}case"ConcatStatement":{const t=0===r.parentNode.parts.indexOf(e),{start:n,end:a}=e.loc
t&&e.loc.start.column>r.parentNode.loc.start.column+1?e.loc=s.builders.loc(n.line,n.column-1,a.line,a.column):t&&"\n"===e.chars.charAt(0)&&(e.loc=s.builders.loc(n.line,n.column+1,a.line,a.column))}}}}),e}(a,r),this.source=a,this._originalAst=r,this.nodeInfo=e,this.ast=this.wrapNode(null,r)}wrapNode(t,e){this.ancestor.set(e,t)
const r={node:e,original:JSON.parse(JSON.stringify(e)),source:this.sourceForLoc(e.loc),parse_result:this}
this.nodeInfo.set(e,r)
const s=!!e.loc,n=new Map,a=new Proxy(e,{get:(t,e)=>n.has(e)?n.get(e):Reflect.get(t,e),set:(r,a,i)=>(n.has(a)&&n.set(a,i),Reflect.set(r,a,i),s?this.markAsDirty(e,a):this.markAsDirty(t.node,t.key),!0),deleteProperty:(r,a)=>{n.has(a)&&n.delete(a)
const i=Reflect.deleteProperty(r,a)
return s?this.markAsDirty(e,a):this.markAsDirty(t.node,t.key),i}})
this.nodeInfo.set(a,r)
for(const i in e){const t=e[i]
if("loc"!==i&&"object"==typeof t&&null!==t){const r=this.wrapNode({node:e,key:i},t)
n.set(i,r)}}return a}sourceForLoc(t){return(0,n.sourceForLoc)(this.source,t)}markAsDirty(t,e){let r=this.dirtyFields.get(t)
void 0===r&&(r=new Set,this.dirtyFields.set(t,r)),r.add(e)
const s=this.ancestor.get(t)
null!==s&&this.markAsDirty(s.node,s.key)}_updateNodeInfoForParamsHash(t,e){const{original:r}=e,s=e.hadParams=r.params.length>0,n=e.hadHash=r.hash.pairs.length>0
e.postPathWhitespace=s?this.sourceForLoc({start:r.path.loc.end,end:r.params[0].loc.start}):"",e.paramsSource=s?this.sourceForLoc({start:r.params[0].loc.start,end:r.params[r.params.length-1].loc.end}):"",e.postParamsWhitespace=n?this.sourceForLoc({start:s?r.params[r.params.length-1].loc.end:r.path.loc.end,end:r.hash.loc.start}):"",e.hashSource=n?this.sourceForLoc(r.hash.loc):""
const a=this.sourceForLoc({start:n?r.hash.loc.end:s?r.params[r.params.length-1].loc.end:r.path.loc.end,end:r.loc.end})
e.postHashWhitespace=""
const o=a.match(i)
o&&(e.postHashWhitespace=o[0])}_rebuildParamsHash(t,e,r){const{original:s}=e
if(r.has("hash")){if(0===t.hash.pairs.length)e.hashSource="",0===t.params.length&&(e.postPathWhitespace="",e.postParamsWhitespace="")
else{let r
r=s.hash.pairs.length>1?this.sourceForLoc({start:s.hash.pairs[0].loc.end,end:s.hash.pairs[1].loc.start}):e.hadParams?e.postPathWhitespace:e.hadHash?e.postParamsWhitespace:" ",""!==r.trim()&&(r=" "),e.hashSource=t.hash.pairs.map((t=>this.print(t))).join(r),e.hadHash||(e.postParamsWhitespace=r)}r.delete("hash")}if(r.has("params")){let n
n=s.params.length>1?this.sourceForLoc({start:s.params[0].loc.end,end:s.params[1].loc.start}):e.hadParams?e.postPathWhitespace:e.hadHash?e.postParamsWhitespace:" ",""!==n.trim()&&(n=" "),e.paramsSource=t.params.map((t=>this.print(t))).join(n),e.hadParams&&0===t.params.length?e.postPathWhitespace="":!e.hadParams&&t.params.length>0&&(e.postPathWhitespace=n),r.delete("params")}}print(t=this._originalAst){var e
if(!t)return""
const r=this.nodeInfo.get(t)
if(void 0===r)return this.printUserSuppliedNode(t)
const a=r.node,u=new Set(this.dirtyFields.get(a))
if(0===u.size&&void 0!==r)return r.source
const p=[],{original:d}=r
switch(a.type){case"Program":case"Block":case"Template":{let t=r.source
u.has("body")&&(t=a.body.map((t=>this.print(t))).join(""),u.delete("body")),p.push(t)}break
case"ElementNode":{const t=d,{selfClosing:e,children:s}=t,o=s.length>0,l=t.blockParams.length>0
let c=`<${t.tag}`
const m=[...t.attributes,...t.modifiers,...t.comments].sort(n.sortByLoc)
let f
f=m.length>0?this.sourceForLoc({start:{line:t.loc.start.line,column:t.loc.start.column+1+t.tag.length},end:m[0].loc.start}):e?r.source.substring(c.length,r.source.length-2):""
let g=m.reduce(((t,e,r,s)=>{let n=this.sourceForLoc(e.loc)
if(r===s.length-1)return t+n
let a=this.sourceForLoc({start:s[r].loc.end,end:s[r+1].loc.start})
return""!==a.trim()&&(a=" "),t+n+a}),""),b=""
if(m.length>0){const e=this.sourceForLoc({start:m[m.length-1].loc.end,end:o?t.children[0].loc.start:t.loc.end}).match(i)
e&&(b=e[0])}else if(l){const e=this.sourceForLoc({start:{line:t.loc.start.line,column:t.loc.start.column+1+t.tag.length},end:o?t.children[0].loc.start:t.loc.end}).match(i)
e&&(b=e[0])}let y="",v=""
if(t.blockParams.length>0){const t=r.source.indexOf("as |"),s=r.source.indexOf("|",t+4)
y=r.source.substring(t,s+1)
const n=r.source.indexOf(e?"/>":">")
v=r.source.substring(s+1,n)}let k=e?"/>":">",w=o?this.sourceForLoc({start:t.children[0].loc.start,end:t.children[s.length-1].loc.end}):"",S=e||h.has(t.tag)?"":`</${t.tag}>`
if(u.has("tag")&&(c=`<${a.tag}`,S=e||h.has(a.tag)?"":`</${a.tag}>`,u.delete("tag")),u.has("children")&&(w=a.children.map((t=>this.print(t))).join(""),e&&(k=">",S=`</${a.tag}>`,a.selfClosing=!1,0===m.length&&" "===f&&(f=""),m.length>0&&" "===b&&(b="")),u.delete("children")),u.has("attributes")||u.has("comments")||u.has("modifiers")){const t=[...a.attributes,...a.modifiers,...a.comments].sort(n.sortByLoc)
g=t.reduce(((t,e,r,s)=>{let n=this.print(e)
if(r===s.length-1)return t+n
let a=this.sourceForLoc({start:s[r].loc.end,end:s[r+1].loc.start})
return""!==a&&""===a.trim()||(a=" "),t+n+a}),""),0===m.length&&(f=" "),0===t.length&&m.length>0&&(f=""),t.length>0&&a.selfClosing&&(b=b||" "),u.delete("attributes"),u.delete("comments"),u.delete("modifiers")}u.has("blockParams")&&(0===a.blockParams.length?(y="",b=""):(y=`as |${a.blockParams.join(" ")}|`,b=b||" "),u.delete("blockParams")),p.push(c,f,g,b,y,v,k,w,S)}break
case"MustacheStatement":case"ElementModifierStatement":case"SubExpression":{this._updateNodeInfoForParamsHash(a,r)
let t=this.sourceForLoc({start:d.loc.start,end:d.path.loc.end}),e=this.sourceForLoc({start:r.hadHash?d.hash.loc.end:r.hadParams?d.params[d.params.length-1].loc.end:d.path.loc.end,end:d.loc.end}).trimLeft()
if(u.has("path")&&(t=this.sourceForLoc({start:d.loc.start,end:d.path.loc.start})+this.print(a.path),u.delete("path")),u.has("type")){if("SubExpression"!==d.type||"MustacheStatement"!==a.type)throw new Error(`ember-template-recast only supports updating the 'type' for SubExpression to MustacheStatement (you attempted to change ${d.type} to ${a.type})`)
t=`{{${a.path.original}`,e="}}",u.delete("type")}this._rebuildParamsHash(a,r,u),p.push(t,r.postPathWhitespace,r.paramsSource,r.postParamsWhitespace,r.hashSource,r.postHashWhitespace,e)}break
case"ConcatStatement":{let t=this.sourceForLoc({start:{line:d.loc.start.line,column:d.loc.start.column+1},end:{line:d.loc.end.line,column:d.loc.end.column-1}})
u.has("parts")&&(t=a.parts.map((t=>this.print(t))).join(""),u.delete("parts")),p.push(t)}break
case"BlockStatement":{const t=d
this._updateNodeInfoForParamsHash(a,r)
const e=t.program.body.length>0,n=t.program.blockParams.length>0
let o,l=this.sourceForLoc({start:t.loc.start,end:t.path.loc.end}),c="",h=""
if(n){const e=this.sourceForLoc({start:r.hadHash?t.hash.loc.end:r.hadParams?t.params[t.params.length-1].loc.end:t.path.loc.end,end:d.loc.end}),s=e.indexOf("as |"),n=e.indexOf("|",s+4)
c=e.substring(s,n+1)
const a=e.substring(n+1).match(i)
a&&(h=a[0])}{const e=this.sourceForLoc({start:r.hadHash?t.hash.loc.end:r.hadParams?t.params[t.params.length-1].loc.end:t.path.loc.end,end:t.loc.end})
let s=0
if(n){const t=e.indexOf("as |")
s=e.indexOf("|",t+4)+1}const a=e.indexOf("}"),i=e.indexOf("}",a+1)
o=e.substring(s,i+1).trimLeft()}let m,f=e?this.sourceForLoc(t.program.loc):"",g=""
if(t.inverse)if(e)g=this.sourceForLoc({start:t.program.loc.end,end:t.inverse.loc.start})
else{const e=this.sourceForLoc({start:r.hadHash?t.hash.loc.end:r.hadParams?t.params[t.params.length-1].loc.end:t.path.loc.end,end:t.loc.end}),s=e.indexOf("}"),n=e.indexOf("}",s+1),a=e.indexOf("}",n+1),i=e.indexOf("}",a+1)
g=e.substring(n+1,i+1)}t.inverse&&t.inverse.chained?(m=this.sourceForLoc(t.inverse.body[0].loc)||"",m=m.slice(g.length)):m=t.inverse?this.sourceForLoc(t.inverse.loc):""
let b=""
if(!a.wasChained){const t=r.source.lastIndexOf("{"),e=r.source.lastIndexOf("{",t-1)
b=r.source.substring(e)}if(this._rebuildParamsHash(a,r,u),u.has("path")){l=this.sourceForLoc({start:d.loc.start,end:t.path.loc.start})+(0,s.print)(a.path)
const e=b.indexOf(t.path.original)
b=b.slice(0,e)+a.path.original+b.slice(e+t.path.original.length),u.delete("path")}if(u.has("program")){const t=new Set(this.dirtyFields.get(a.program))
if(t.has("blockParams")&&(0===a.program.blockParams.length?(r.postHashWhitespace="",c=""):(r.postHashWhitespace=r.postHashWhitespace||" ",c=`as |${a.program.blockParams.join(" ")}|`),t.delete("blockParams")),t.has("body")&&(f=a.program.body.map((t=>this.print(t))).join(""),t.delete("body")),t.size>0)throw new Error(`Unhandled mutations for ${a.program.type}: ${Array.from(t)}`)
u.delete("program")}if(u.has("inverse")){if(a.inverse){if(a.inverse.chained){g=""
const t=a.inverse.body[0]
t.wasChained=!0,m=this.print(t)}else m=a.inverse.body.map((t=>this.print(t))).join("")
t.inverse||(g="{{else}}")}else m="",g=""
u.delete("inverse")}p.push(l,r.postPathWhitespace,r.paramsSource,r.postParamsWhitespace,r.hashSource,r.postHashWhitespace,c,h,o,f,g,m,b)}break
case"HashPair":{const t=d,{source:e}=r,s=e.match(l)
if(null===s)throw new Error("Could not match hash pair parts")
let[,n,i,o]=s,c=this.sourceForLoc(t.value.loc)
u.has("key")&&(n=a.key,u.delete("key")),u.has("value")&&(c=this.print(a.value),u.delete("value")),p.push(n,i,"=",o,c)}break
case"AttrNode":{const t=d,{source:e}=r,s=e.match(o)
if(null===s)throw new Error(`Could not match attr node parts for ${e}`)
let[,n,i,l,h,m]=s,f=this.sourceForLoc(t.value.loc)
"ConcatStatement"===t.value.type&&(f=f.slice(1,-1))
const g=a
if(u.has("name")&&(n=g.name,u.delete("name")),u.has("quoteType")){if("MustacheStatement"===g.value.type&&g.quoteType)throw new Error("Mustache statements should not be quoted as attribute values")
if("ConcatStatement"===g.value.type&&!g.quoteType)throw new Error("ConcatStatements must be quoted as attribute values")
if("TextNode"==g.value.type&&!g.quoteType&&g.value.chars.match(c))throw new Error(`\`${g.value.chars}\` is invalid as an unquoted attribute value. Alphanumeric, hyphens, and periods only`)
m=g.quoteType||""}else u.has("value")&&(m="MustacheStatement"===g.value.type?"":"TextNode"!==g.value.type||null!==g.quoteType||g.value.chars.match(c)?m||'"':"")
u.delete("quoteType"),u.has("isValueless")&&(g.isValueless?(l="",m="",f="",u.delete("isValueless"),u.delete("value")):(l="=","MustacheStatement"===g.value.type||m||(m='"'),u.delete("isValueless"))),u.has("value")&&(l="=",f="ConcatStatement"===g.value.type?g.value.parts.map((t=>this.print(t))).join(""):this.print(g.value)),u.delete("value"),p.push(n,i,l,h,m,f,m)}break
case"PathExpression":{let{source:t}=r
u.has("original")&&(t=a.original,u.delete("original")),p.push(t)}break
case"MustacheCommentStatement":case"CommentStatement":{const t=d,e=r.source.indexOf(t.value),s=r.source.substring(0,e)
let n=t.value
const i=r.source.substring(e+n.length)
u.has("value")&&(n=a.value,u.delete("value")),p.push(s,n,i)}break
case"TextNode":{let{source:t}=r
u.has("chars")&&(t=a.chars,u.delete("chars")),p.push(t)}break
case"StringLiteral":{const t=a
p.push(t.quoteType,t.value,t.quoteType)}break
case"BooleanLiteral":case"NumberLiteral":case"NullLiteral":{let{source:t}=r
u.has("value")&&(t=(null===(e=a.value)||void 0===e?void 0:e.toString())||"",u.delete("value")),p.push(t)}break
default:throw new Error(`ember-template-recast does not have the ability to update ${d.type}. Please open an issue so we can add support.`)}for(const s of u.values())if(s in Object.keys(d))throw new Error(`ember-template-recast could not handle the mutations of \`${Array.from(u)}\` on ${d.type}`)
return p.join("")}printUserSuppliedNode(t){switch(t.type){case"StringLiteral":{let e=t.quoteType||'"'
return e+t.value+e}case"AttrNode":{const e=t
if(e.isValueless){if("TextNode"!==e.value.type||""!==e.value.chars)throw new Error("The value property of a valueless attr must be an empty TextNode")
return e.name}if(void 0===e.isValueless&&"TextNode"===e.value.type&&""===e.value.chars)return e.name
switch(e.value.type){case"MustacheStatement":return e.name+"="+this.print(e.value)
case"ConcatStatement":{const t=e.value.parts.map((t=>this.print(t))).join(""),r=e.quoteType||'"'
return e.name+"="+r+t+r}case"TextNode":{if(null===e.quoteType&&e.value.chars.match(c))throw new Error(`You specified a quoteless attribute \`${e.value.chars}\`, which is invalid without quotes`)
let t
return t=null===e.quoteType?"":e.quoteType||'"',e.name+"="+t+e.value.chars+t}}}break
default:return(0,s.print)(t,{entityEncoding:"raw",override:t=>{if(this.nodeInfo.has(t)||(0,a.useCustomPrinter)(t))return this.print(t)}})}}}},542:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getLines=e.compactJoin=e.compact=e.sortByLoc=e.isSyntheticWithNoLocation=e.sourceForLoc=void 0
const r=/(.*?(?:\r\n?|\n|$))/gm
function s(t){if(t&&t.loc){const{start:e,end:r}=t.loc
return"(synthetic)"===t.loc.module&&e.column===r.column&&e.line===r.line}return!1}function n(t){const e=[]
return t.forEach((t=>{null!=t&&""!==t&&e.push(t)})),e}function a(t){let e=t.match(r)
if(!e)throw new Error("could not parse source")
return e.slice(0,-1)}e.sourceForLoc=function(t,e){if(!e)return""
let r=Array.isArray(t)?t:a(t)
const s=e.start.line-1,n=e.end.line-1
let i=s-1
const o=e.start.column,l=e.end.column,c=[]
let h
for(;i<n;)i++,h=r[i]||"",i===s?s===n?c.push(h.slice(o,l)):c.push(h.slice(o)):i===n?c.push(h.slice(0,l)):c.push(h)
return c.join("")},e.isSyntheticWithNoLocation=s,e.sortByLoc=function(t,e){return s(t)||s(e)?0:t.loc.start.line<e.loc.start.line||t.loc.start.line===e.loc.start.line&&t.loc.start.column<e.loc.start.column?-1:t.loc.start.line===e.loc.start.line&&t.loc.start.column===e.loc.start.column?0:1},e.compact=n,e.compactJoin=function(t,e=""){return n(t).join(e)},e.getLines=a}}])
