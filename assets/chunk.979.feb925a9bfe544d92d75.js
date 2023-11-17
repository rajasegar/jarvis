/*! For license information please see chunk.979.feb925a9bfe544d92d75.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[979],{9871:e=>{var t,n,r=e.exports={}
function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0)
if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0)
try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}()
var a,u=[],l=!1,c=-1
function f(){l&&a&&(l=!1,a.length?u=a.concat(u):c=-1,u.length&&d())}function d(){if(!l){var e=s(f)
l=!0
for(var t=u.length;t;){for(a=u,u=[];++c<t;)a&&a[c].run()
c=-1,t=u.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e)
if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e)
try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
u.push(new h(e,t)),1!==u.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},3979:(e,t,n)=>{e=n.nmd(e)
var r,i=n(9871)
!function(){"use strict"
var o,s="function"==typeof s?s:function(){var e=Object.create(null),t=Object.prototype.hasOwnProperty
this.get=function(t){return e[t]},this.set=function(n,r){return t.call(e,n)||this.size++,e[n]=r,this},this.delete=function(n){t.call(e,n)&&(delete e[n],this.size--)},this.forEach=function(t){for(var n in e)t(e[n],n)},this.clear=function(){e=Object.create(null),this.size=0},this.size=0}
function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,i,o=[],s=!0,a=!1
try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return p(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}!function(e){if("object"===("undefined"==typeof globalThis?"undefined":a(globalThis)))o=globalThis
else{var t=function(){o=this||self,delete e.prototype._T_}
this?t():(e.defineProperty(e.prototype,"_T_",{configurable:!0,get:t}),_T_)}}(Object)
var g=o,m=g.window,v=g.self,b=g.console,y=g.setTimeout,k=g.clearTimeout,w=m&&m.document,x=m&&m.navigator,E=function(){var e="qunit-test-string"
try{return g.sessionStorage.setItem(e,e),g.sessionStorage.removeItem(e),g.sessionStorage}catch(e){return}}(),T={warn:b?Function.prototype.bind.call(b.warn||b.log,b):function(){}},C=Object.prototype.toString,N=Object.prototype.hasOwnProperty,S=Date.now||function(){return(new Date).getTime()},q=m&&void 0!==m.performance&&"function"==typeof m.performance.mark&&"function"==typeof m.performance.measure?m.performance:void 0,j={now:q?q.now.bind(q):S,measure:q?function(e,t,n){try{q.measure(e,t,n)}catch(e){T.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:q?q.mark.bind(q):function(){}}
function M(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var i=0;i<t.length;i++)if(n[r]===t[i]){n.splice(r,1),r--
break}return n}function I(e,t){return-1!==t.indexOf(e)}function R(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&L("array",e)?[]:{}
for(var r in e)if(N.call(e,r)){var i=e[r]
n[r]=i===Object(i)?R(i,t):i}return n}function _(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)N.call(t,r)&&N.call(e,r)&&(n[r]=_(e[r],t[r]))
return n}function A(e,t,n){for(var r in t)N.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function O(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=C.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return a(e)}}function L(e,t){return O(t)===e}function P(e,t){for(var n=e+""+t,r=0,i=0;i<n.length;i++)r=(r<<5)-r+n.charCodeAt(i),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function U(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var H=function(){var e=[],t=Object.getPrototypeOf||function(e){return e.__proto__}
function n(e,t){return"object"===a(e)&&(e=e.valueOf()),"object"===a(t)&&(t=t.valueOf()),e===t}function r(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}function i(t,n){return t===n||(-1===["object","array","map","set"].indexOf(O(t))?s(t,n):(e.every((function(e){return e.a!==t||e.b!==n}))&&e.push({a:t,b:n}),!0))}var o={string:n,boolean:n,number:n,null:n,undefined:n,symbol:n,date:n,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&r(e)===r(t)},function:function(){return!1},array:function(e,t){var n=e.length
if(n!==t.length)return!1
for(var r=0;r<n;r++)if(!i(e[r],t[r]))return!1
return!0},set:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t){if(r){var i=!1
n.forEach((function(n){if(!i){var r=e
u(n,t)&&(i=!0),e=r}})),i||(r=!1)}})),r},map:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t,i){if(r){var o=!1
n.forEach((function(n,r){if(!o){var s=e
u([n,r],[t,i])&&(o=!0),e=s}})),o||(r=!1)}})),r},object:function(e,n){if(!1===function(e,n){var r=t(e),i=t(n)
return e.constructor===n.constructor||(r&&null===r.constructor&&(r=null),i&&null===i.constructor&&(i=null),null===r&&i===Object.prototype||null===i&&r===Object.prototype)}(e,n))return!1
var r=[],o=[]
for(var a in e)if(r.push(a),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[a]||"function"!=typeof n[a]||e[a].toString()!==n[a].toString())&&!i(e[a],n[a]))return!1
for(var u in n)o.push(u)
return s(r.sort(),o.sort())}}
function s(e,t){var n=O(e)
return O(t)===n&&o[n](e,t)}function u(t,n){if(arguments.length<2)return!0
e=[{a:t,b:n}]
for(var r=0;r<e.length;r++){var i=e[r]
if(i.a!==i.b&&!s(i.a,i.b))return!1}return 2===arguments.length||u.apply(this,[].slice.call(arguments,1))}return function(){var t=u.apply(void 0,arguments)
return e.length=0,t}}(),D={queue:[],stats:{all:0,bad:0,testCount:0},blocking:!0,failOnZeroTests:!0,reorder:!0,altertitle:!0,collapse:!0,scrolltop:!0,maxDepth:5,requireExpects:!1,urlConfig:[],modules:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},callbacks:{},storage:E},F=m&&m.QUnit&&m.QUnit.config
m&&m.QUnit&&!m.QUnit.version&&A(D,F),D.modules.push(D.currentModule)
var B=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=o.separator(),i=o.indent(1)
return t.join&&(t=t.join(","+r+i)),t?[e,i+t,o.indent()+n].join(r):e+n}function r(e,t){if(o.maxDepth&&o.depth>o.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,i=new Array(r);r--;)i[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",i,"]")}var i=/^function (\w+)/,o={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var i=this.parsers[t],o=a(i)
if("function"===o){n.push(e)
var s=i.call(this,e,n)
return n.pop(),s}return"string"===o?i:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":L("regexp",e)?"regexp":L("date",e)?"date":L("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===C.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":a(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:D.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(i.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",o.parse(e,"functionArgs"),"){"].join(""),o.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(o.maxDepth&&o.depth>o.maxDepth)return"[object Object]"
o.up()
var i=[]
for(var s in e)i.push(s)
var a=["message","name"]
for(var u in a){var l=a[u]
l in e&&!I(l,i)&&i.push(l)}i.sort()
for(var c=0;c<i.length;c++){var f=i[c],d=e[f]
r.push(o.parse(f,"key")+": "+o.parse(d,void 0,t))}return o.down(),n("{",r,"}")},node:function(e){var t=o.HTML?"&lt;":"<",n=o.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),i=t+r,s=e.attributes
if(s)for(var a=0,u=s.length;a<u;a++){var l=s[a].nodeValue
l&&"inherit"!==l&&(i+=" "+s[a].nodeName+"="+o.parse(l,"attribute"))}return i+=n,3!==e.nodeType&&4!==e.nodeType||(i+=e.nodeValue),i+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return o}(),Q=function(){function e(t,n){u(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return c(e,[{key:"start",value:function(e){if(e){this._startTime=j.now()
var t=this.fullName.length
j.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=j.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
j.mark("qunit_suite_".concat(t,"_end")),j.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,i=e.todo
return n?"failed":r===t?"skipped":i===t?"todo":"passed"}}]),e}(),z=[],$=new Q
function G(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function Y(e,t){return function(n){D.currentModule!==e&&T.warn("The `"+t+"` hook was called inside the wrong module (`"+D.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function W(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
"function"===O(t)&&(n=t,t=void 0)
var i=function(e,t,n){var r=z.length?z.slice(-1)[0]:null,i=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:$,s=null!==r&&r.skip||n.skip,a=null!==r&&r.todo||n.todo,u={}
r&&A(u,r.testEnvironment),A(u,t)
var l={name:i,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:u,tests:[],moduleId:P(i),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new Q(e,o),stats:null,skip:s,todo:!s&&a,ignored:n.ignored||!1}
return r&&r.childModules.push(l),D.modules.push(l),l}(e,t,r),o=i.testEnvironment,s=i.hooks
G(s,o,"before"),G(s,o,"beforeEach"),G(s,o,"afterEach"),G(s,o,"after")
var a={before:Y(i,"before"),beforeEach:Y(i,"beforeEach"),afterEach:Y(i,"afterEach"),after:Y(i,"after")},u=D.currentModule
if(D.currentModule=i,"function"===O(n)){z.push(i)
try{var l=n.call(i.testEnvironment,a)
null!=l&&"function"===O(l.then)&&T.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{z.pop(),D.currentModule=i.parentModule||u}}}var J=!1
function V(e,t,n){var r,i=J&&(r=D.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!z.some((function(e){return r.includes(e.moduleId)})))
W(e,t,n,{ignored:i})}V.only=function(){J||(D.modules.length=0,D.queue.length=0,D.currentModule.ignored=!0),J=!0,W.apply(void 0,arguments)},V.skip=function(e,t,n){J||W(e,t,n,{skip:!0})},V.todo=function(e,t,n){J||W(e,t,n,{todo:!0})}
var Z=Object.create(null),K=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function X(e,t){if("string"!==O(e))throw new TypeError("eventName must be a string when emitting an event")
for(var n=Z[e],r=n?d(n):[],i=0;i<r.length;i++)r[i](t)}var ee="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{}
function te(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ne={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==ee)return ee
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r)
return o(this,new c(e,t,n)),n},i.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},i.all=function(e){return new i((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var i=Array.prototype.slice.call(e)
if(0===i.length)return t([])
var o=i.length
function s(e,n){try{if(n&&("object"===a(n)||"function"==typeof n)){var u=n.then
if("function"==typeof u)return void u.call(n,(function(t){s(e,t)}),r)}i[e]=n,0==--o&&t(i)}catch(e){r(e)}}for(var u=0;u<i.length;u++)s(u,i[u])}))},i.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(a(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var i=r.length
function o(e,n){if(n&&("object"===a(n)||"function"==typeof n)){var s=n.then
if("function"==typeof s)return void s.call(n,(function(t){o(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--i&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--i&&t(r)}for(var s=0;s<r.length;s++)o(s,r[s])}))},i.resolve=function(e){return e&&"object"===a(e)&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var o=0,s=e.length;o<s;o++)i.resolve(e[o]).then(t,r)}))},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},ne.exports=i}else ne.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function o(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void u(t.promise,e)}s(t.promise,r)}else(1===e._state?s:u)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===a(t)||"function"==typeof t)){var n=t.then
if(t instanceof i)return e._state=3,e._value=t,void l(e)
if("function"==typeof n)return void f((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var r,o}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1
try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,u(t,e))}))}catch(e){if(n)return
n=!0,u(t,e)}}}()
var re=ne.exports
function ie(e,t){var n=D.callbacks[e]
if("log"!==e)return n.reduce((function(e,n){return e.then((function(){return re.resolve(n(t))}))}),re.resolve([]))
n.map((function(e){return e(t)}))}var oe=(ae(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,"")
function se(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),oe){for(var r=[],i=t;i<n.length&&-1===n[i].indexOf(oe);i++)r.push(n[i])
if(r.length)return r.join("\n")}return n[t]}}function ae(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return se(t,e)}var ue,le=0,ce=[]
function fe(){var e,t
e=S(),D.depth=(D.depth||0)+1,de(e),D.depth--,ce.length||D.blocking||D.current||(D.blocking||D.queue.length||0!==D.depth?(t=D.queue.shift()(),ce.push.apply(ce,d(t)),le>0&&le--,fe()):function(){var e
if(0===D.stats.testCount&&!0===D.failOnZeroTests)return e=D.filter&&D.filter.length?new Error('No tests matched the filter "'.concat(D.filter,'".')):D.module&&D.module.length?new Error('No tests matched the module "'.concat(D.module,'".')):D.moduleId&&D.moduleId.length?new Error('No tests matched the moduleId "'.concat(D.moduleId,'".')):D.testId&&D.testId.length?new Error('No tests matched the testId "'.concat(D.testId,'".')):new Error("No tests were run."),we("global failure",A((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void fe()
var t=D.storage,n=S()-D.started,r=D.stats.all-D.stats.bad
he.finished=!0,X("runEnd",$.end(!0)),ie("done",{passed:r,failed:D.stats.bad,total:D.stats.all,runtime:n}).then((function(){if(t&&0===D.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function de(e){if(ce.length&&!D.blocking){var t=S()-e
if(!y||D.updateRate<=0||t<D.updateRate){var n=ce.shift()
re.resolve(n()).then((function(){ce.length?de(e):fe()}))}else y(fe)}}var he={finished:!1,add:function(e,t,n){if(t)D.queue.splice(le++,0,e)
else if(n){ue||(ue=function(e){var t=parseInt(P(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(ue()*(D.queue.length-le+1))
D.queue.splice(le+r,0,e)}else D.queue.push(e)},advance:fe,taskCount:function(){return ce.length}},pe=function(){function e(t,n,r){u(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return c(e,[{key:"start",value:function(e){return e&&(this._startTime=j.now(),j.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=j.now(),j)){j.mark("qunit_test_end")
var t=this.fullName.join(" – ")
j.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return A(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function ge(e){if(this.expected=null,this.assertions=[],this.module=D.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new s,this.nextPauseId=1,A(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),he.finished)T.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}++ge.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new pe(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()})
for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=P(this.module.name,this.testName),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new Me(this)}}function me(){if(!D.current)throw new Error("pushFailure() assertion outside test context, in "+ae(2))
var e=D.current
return e.pushFailure.apply(e,arguments)}function ve(){if(D.pollution=[],D.noglobals)for(var e in g)if(N.call(g,e)){if(/^qunit-test-output/.test(e))continue
D.pollution.push(e)}}ge.count=0,ge.prototype={get stack(){return se(this.errorForStack,2)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t)
return n.reduce((function(e,t){return e.then((function(){return t.stats={all:0,bad:0,started:S()},X("suiteStart",t.suiteReport.start(!0)),ie("moduleStart",{name:t.name,tests:t.tests})}))}),re.resolve([])).then((function(){return D.current=e,e.testEnvironment=A({},t.testEnvironment),e.started=S(),X("testStart",e.testReport.start(!0)),ie("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){D.pollution||ve()}))}))},run:function(){if(D.current=this,this.callbackStarted=S(),D.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+(e.message||e),se(e,0)),ve(),D.blocking&&Ce(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&me("Test did not finish synchronously even though assert.timeout( 0 ) was used.",ae(2))}},after:function(){!function(){var e=D.pollution
ve()
var t=M(D.pollution,e)
t.length>0&&me("Introduced global variable(s): "+t.join(", "))
var n=M(e,D.pollution)
n.length>0&&me("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(D.current=n,D.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+U(e),se(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,i=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===Se(e).filter((function(e){return!e.skip})).length-1}(n)||!(D.queue.length>0||he.taskCount()>2))if(D.current=r,D.notrycatch)i()
else try{i()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),se(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&D.globalHooks[e])for(var r=0;r<D.globalHooks[e].length;r++)t.push(n.queueGlobalHook(D.globalHooks[e][r],e))}(this),function n(r,i){if(i.parentModule&&n(r,i.parentModule),i.hooks[e].length)for(var o=0;o<i.hooks[e].length;o++)t.push(r.queueHook(i.hooks[e][o],e,i))}(this,this.module)),t},finish:function(){if(D.current=this,this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}D.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,i=!!this.skip,o=!!this.todo,s=0,a=D.storage
this.runtime=S()-this.started,D.stats.all+=this.assertions.length,D.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var u=0;u<this.assertions.length;u++)this.assertions[u].result||(s++,D.stats.bad++,t.stats.bad++)
i?je(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),a&&(s?a.setItem("qunit-test-"+n+"-"+r,s):a.removeItem("qunit-test-"+n+"-"+r)),X("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var l=this
return ie("testDone",{name:r,module:n,skipped:i,todo:o,failed:s,passed:this.assertions.length-s,total:this.assertions.length,runtime:i?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return l.stack}}).then((function(){if(qe(t)){for(var e=[t],n=t.parentModule;n&&qe(n);)e.push(n),n=n.parentModule
return e.reduce((function(e,t){return e.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,d(n.childModules))}return X("suiteEnd",e.suiteReport.end(!0)),ie("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:S()-e.stats.started})}(t)}))}),re.resolve([]))}})).then((function(){D.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=A({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=D.storage&&+D.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=D.reorder&&!!t
this.previousFailure=!!t,he.add((function(){return[function(){return e.before()}].concat(d(e.hooks("before")),[function(){e.preserveTestEnvironment()}],d(e.hooks("beforeEach")),[function(){e.run()}],d(e.hooks("afterEach").reverse()),d(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,D.seed)}else je(this.module)},pushResult:function(e){if(this!==D.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:S()-this.started,todo:!!this.todo}
if(N.call(e,"expected")&&(r.expected=e.expected),!e.result){var i=e.source||ae()
i&&(r.source=i)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof ge))throw new Error("pushFailure() assertion outside test context, was "+ae(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){ie("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),X("assertion",t)},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"===O(r)){var i=Te(n),o=function(){i()}
D.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,se(e,0)),ve(),Ce(n)}))}}},valid:function(){var e=D.filter,t=/^(!?)\/([\w\W]*)\/(i?$)/.exec(e),n=D.module&&D.module.toLowerCase(),r=this.module.name+": "+this.testName
return!(!this.callback||!this.callback.validTest)||!(D.moduleId&&D.moduleId.length>0&&!function e(t){return I(t.moduleId,D.moduleId)||t.parentModule&&e(t.parentModule)}(this.module))&&!(D.testId&&D.testId.length>0&&!I(this.testId,D.testId))&&!(n&&!function e(t){return(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule)}(this.module))&&(!e||(t?this.regexFilter(!!t[1],t[2],t[3],r):this.stringFilter(e,r)))},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var be=!1
function ye(e){be||D.currentModule.ignored||new ge(e).queue()}function ke(e){D.currentModule.ignored||(be||(D.queue.length=0,be=!0),new ge(e).queue())}function we(e,t){ye({testName:e,callback:t})}function xe(e,t){return"".concat(e," [").concat(t,"]")}function Ee(e,t){if(Array.isArray(e))e.forEach(t)
else{if("object"!==a(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(a(e)," instead."))
Object.keys(e).forEach((function(n){t(e[n],n)}))}}function Te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
D.blocking=!0
var n,r=e.nextPauseId++,i={cancelled:!1,remaining:t}
return e.pauses.set(r,i),y&&("number"==typeof e.timeout?n=e.timeout:"number"==typeof D.testTimeout&&(n=D.testTimeout),"number"==typeof n&&n>0&&(D.timeoutHandler=function(t){return function(){D.timeout=null,i.cancelled=!0,e.pauses.delete(r),e.pushFailure("Test took longer than ".concat(t,"ms; test timed out."),ae(2)),Ne(e)}},k(D.timeout),D.timeout=y(D.timeoutHandler(n),n))),function(){if(!i.cancelled){if(void 0===D.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
if(D.current!==e)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
if(i.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
i.remaining--,0===i.remaining&&e.pauses.delete(r),Ne(e)}}}function Ce(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),Ne(e)}function Ne(e){e.pauses.size>0||(y?(k(D.timeout),D.timeout=y((function(){e.pauses.size>0||(k(D.timeout),D.timeout=null,nt())}))):nt())}function Se(e){for(var t=[].concat(e.tests),n=d(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,d(r.childModules))}return t}function qe(e){return e.testsRun+e.testsIgnored===Se(e).length}function je(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}A(we,{todo:function(e,t){ye({testName:e,callback:t,todo:!0})},skip:function(e){ye({testName:e,skip:!0})},only:function(e,t){ke({testName:e,callback:t})},each:function(e,t,n){Ee(t,(function(t,r){ye({testName:xe(e,r),callback:n,withData:!0,data:t})}))}}),we.todo.each=function(e,t,n){Ee(t,(function(t,r){ye({testName:xe(e,r),callback:n,todo:!0,withData:!0,data:t})}))},we.skip.each=function(e,t){Ee(t,(function(t,n){ye({testName:xe(e,n),skip:!0})}))},we.only.each=function(e,t,n){Ee(t,(function(t,r){ke({testName:xe(e,r),callback:n,withData:!0,data:t})}))}
var Me=function(){function e(t){u(this,e),this.test=t}return c(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
var t
this.test.timeout=e,D.timeout&&(k(D.timeout),D.timeout=null,D.timeoutHandler&&this.test.timeout>0&&(t=this.test.timeout,k(D.timeout),D.timeout=y(D.timeoutHandler(t),t)))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),"undefined"===O(e)||""===e?t="You must provide a message to assert.step":"string"!==O(e)&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return Te(this.test,t)}},{key:"push",value:function(t,n,r,i,o){return T.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:D.current.assert).pushResult({result:t,actual:n,expected:r,message:i,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||D.current
if(!r)throw new Error("assertion outside test context, in "+ae(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(B.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(B.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){var r=t==e
this.pushResult({result:r,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){var r=t!=e
this.pushResult({result:r,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=R(e),t=R(t),this.pushResult({result:H(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=R(e),t=R(t),this.pushResult({result:!H(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=_(e,t),t=R(t,!1),this.pushResult({result:H(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=_(e,t),t=R(t),this.pushResult({result:!H(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:H(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!H(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var i=f(Ie(n,r,"throws"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||D.current
if("function"===O(t)){var s,a=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){s=e}if(o.ignoreGlobalErrors=!1,s){var u=f(Re(s,n,r),3)
a=u[0],n=u[1],r=u[2]}o.assert.pushResult({result:a,actual:s&&U(s),expected:n,message:r})}else{var l='The value provided to `assert.throws` in "'+o.testName+'" was not a function.'
o.assert.pushResult({result:!1,actual:t,message:l})}}},{key:"rejects",value:function(t,n,r){var i=f(Ie(n,r,"rejects"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||D.current,s=t&&t.then
if("function"===O(s)){var a=this.async()
return s.call(t,(function(){var e='The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.'
o.assert.pushResult({result:!1,message:e,actual:t}),a()}),(function(e){var t,i=f(Re(e,n,r),3)
t=i[0],n=i[1],r=i[2],o.assert.pushResult({result:t,actual:e&&U(e),expected:n,message:r}),a()}))}var u='The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.'
o.assert.pushResult({result:!1,message:u,actual:t})}}]),e}()
function Ie(e,t,n){var r=O(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function Re(e,t,n){var r=!1,i=O(t)
if(t){if("regexp"===i)r=t.test(U(e)),t=String(t)
else if("function"===i&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===i)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=U(t)
else if("function"===i)try{r=!0===t.call({},e),t=null}catch(e){t=U(e)}}else r=!0
return[r,t,n]}Me.prototype.raises=Me.prototype.throws
var _e,Ae,Oe,Le,Pe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
u(this,e),this.log=n.log||Function.prototype.bind.call(b.log,b),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return c(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Ue=!0
if(void 0!==i){var He=i.env
_e=He.FORCE_COLOR,Ae=He.NODE_DISABLE_COLORS,Oe=He.NO_COLOR,Le=He.TERM,Ue=i.stdout&&i.stdout.isTTY}var De={enabled:!Ae&&null==Oe&&"dumb"!==Le&&(null!=_e&&"0"!==_e||Ue),reset:Be(0,0),bold:Be(1,22),dim:Be(2,22),italic:Be(3,23),underline:Be(4,24),inverse:Be(7,27),hidden:Be(8,28),strikethrough:Be(9,29),black:Be(30,39),red:Be(31,39),green:Be(32,39),yellow:Be(33,39),blue:Be(34,39),magenta:Be(35,39),cyan:Be(36,39),white:Be(37,39),gray:Be(90,39),grey:Be(90,39),bgBlack:Be(40,49),bgRed:Be(41,49),bgGreen:Be(42,49),bgYellow:Be(43,49),bgBlue:Be(44,49),bgMagenta:Be(45,49),bgCyan:Be(46,49),bgWhite:Be(47,49)}
function Fe(e,t){for(var n,r=0,i="",o="";r<e.length;r++)i+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return i+t+o}function Be(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:De.enabled?Fe(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=De.reset.bind(r),r.bold=De.bold.bind(r),r.dim=De.dim.bind(r),r.italic=De.italic.bind(r),r.underline=De.underline.bind(r),r.inverse=De.inverse.bind(r),r.hidden=De.hidden.bind(r),r.strikethrough=De.strikethrough.bind(r),r.black=De.black.bind(r),r.red=De.red.bind(r),r.green=De.green.bind(r),r.yellow=De.yellow.bind(r),r.blue=De.blue.bind(r),r.magenta=De.magenta.bind(r),r.cyan=De.cyan.bind(r),r.white=De.white.bind(r),r.gray=De.gray.bind(r),r.grey=De.grey.bind(r),r.bgBlack=De.bgBlack.bind(r),r.bgRed=De.bgRed.bind(r),r.bgGreen=De.bgGreen.bind(r),r.bgYellow=De.bgYellow.bind(r),r.bgBlue=De.bgBlue.bind(r),r.bgMagenta=De.bgMagenta.bind(r),r.bgCyan=De.bgCyan.bind(r),r.bgWhite=De.bgWhite.bind(r),r):De.enabled?Fe([n],t+""):t+""
var r}}var Qe=Object.prototype.hasOwnProperty
function ze(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){if(""===e||/['"\\/[{}\]\r\n]/.test(e)||/[-?:,[\]{}#&*!|=>'"%@`]/.test(e[0])||/(^\s|\s$)/.test(e)||/^[\d._-]+$/.test(e)||/^(true|false|y|n|yes|no|on|off)$/i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var n=new Array(t+1).join(" "),r=e.match(/\n+$/)
return 1===(r?r[0].length:0)?"|\n"+e.replace(/\n$/,"").split("\n").map((function(e){return n+e})).join("\n"):"|+\n"+e.split("\n").map((function(e){return n+e})).join("\n")}return e}return JSON.stringify($e(e),null,2)}function $e(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==n.indexOf(e))return"[Circular]"
switch(Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()){case"array":n.push(e),t=e.map((function(e){return $e(e,n)})),n.pop()
break
case"object":n.push(e),t={},Object.keys(e).forEach((function(r){t[r]=$e(e[r],n)})),n.pop()
break
default:t=e}return t}var Ge=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
u(this,e),this.log=n.log||Function.prototype.bind.call(b.log,b),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return c(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(De.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+U(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(De.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(De.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(De.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(De.yellow("# skip ".concat(e.testCounts.skipped))),this.log(De.cyan("# todo ".concat(e.testCounts.todo))),this.log(De.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(ze(e.message||"failed")),n+="\n  severity: ".concat(ze(t||"failed")),Qe.call(e,"actual")&&(n+="\n  actual  : ".concat(ze(e.actual))),Qe.call(e,"expected")&&(n+="\n  expected: ".concat(ze(e.expected))),e.stack&&(n+="\n  stack: ".concat(ze(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(ze(U(e))),t+="\n  severity: ".concat(ze("failed")),e&&e.stack&&(t+="\n  stack: ".concat(ze(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Ye={console:Pe,tap:Ge}
function We(e){return function(t){D.globalHooks[e]||(D.globalHooks[e]=[]),D.globalHooks[e].push(t)}}var Je={beforeEach:We("beforeEach"),afterEach:We("afterEach")}
function Ve(e){D.current?D.current.assert.pushResult({result:!1,message:"global failure: ".concat(U(e)),source:e&&e.stack||ae(2)}):($.globalFailureCount++,D.stats.bad++,D.stats.all++,X("error",e))}var Ze={}
D.currentModule.suiteReport=$
var Ke=!1,Xe=!1
function et(){Xe=!0,y?y((function(){nt()})):nt()}function tt(){D.blocking=!1,he.advance()}function nt(){if(D.started)tt()
else{D.started=S(),""===D.modules[0].name&&0===D.modules[0].tests.length&&D.modules.shift()
for(var e=D.modules.length,t=[],n=0;n<e;n++)t.push({name:D.modules[n].name,tests:D.modules[n].tests})
X("runStart",$.start(!0)),ie("begin",{totalTests:ge.count,modules:t}).then(tt)}}Ze.isLocal=m&&m.location&&"file:"===m.location.protocol,Ze.version="2.18.0",A(Ze,{config:D,dump:B,equiv:H,reporters:Ye,hooks:Je,is:L,objectType:O,on:function(e,t){if("string"!==O(e))throw new TypeError("eventName must be a string when registering a listener")
if(!I(e,K)){var n=K.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!==O(t))throw new TypeError("callback must be a function when registering a listener")
Z[e]||(Z[e]=[]),I(t,Z[e])||Z[e].push(t)},onError:function(e){if(T.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),D.current&&D.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,Ve(t),!1},onUncaughtException:Ve,pushFailure:me,assert:Me.prototype,module:V,test:we,todo:we.todo,skip:we.skip,only:we.only,start:function(e){if(D.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=Ke
if(Ke=!0,Xe)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(D.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!D.pageLoaded)return D.autostart=!0,void(w||Ze.load())
et()},onUnhandledRejection:function(e){T.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),Ve(e)},extend:function(){T.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return A.apply(this,t)},load:function(){D.pageLoaded=!0,A(D,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),Xe||(D.blocking=!1,D.autostart&&et())},stack:function(e){return ae(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!==O(t))throw new Error("QUnit logging methods require a callback function as their first parameters.")
D.callbacks[e].push(t)}}for(var r=0,i=t.length;r<i;r++){var o=t[r]
"undefined"===O(D.callbacks[o])&&(D.callbacks[o]=[]),e[o]=n(o)}}(Ze),function(i){var o=!1
if(m&&w){if(m.QUnit&&m.QUnit.version)throw new Error("QUnit has already been defined.")
m.QUnit=i,o=!0}e&&e.exports&&(e.exports=i,e.exports.QUnit=i,o=!0),t&&(t.QUnit=i,o=!0),void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r),i.config.autostart=!1,o=!0,v&&v.WorkerGlobalScope&&v instanceof v.WorkerGlobalScope&&(v.QUnit=i,o=!0),o||(g.QUnit=i)}(Ze),function(){if(m&&w){var e=Ze.config,t=Object.prototype.hasOwnProperty
Ze.begin((function(){if(!t.call(e,"fixture")){var n=w.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),Ze.testStart((function(){if(null!=e.fixture){var t=w.getElementById("qunit-fixture")
if("string"===a(e.fixture)){var n=w.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==m&&m.location
if(e){var t=function(){var t,r,i,o,s=Object.create(null),a=e.search.slice(1).split("&"),u=a.length
for(t=0;t<u;t++)a[t]&&(i=n((r=a[t].split("="))[0]),o=1===r.length||n(r.slice(1).join("=")),s[i]=i in s?[].concat(s[i],o):o)
return s}()
Ze.urlParams=t,Ze.config.moduleId=[].concat(t.moduleId||[]),Ze.config.testId=[].concat(t.testId||[]),Ze.config.module=t.module,Ze.config.filter=t.filter,!0===t.seed?Ze.config.seed=Math.random().toString(36).slice(2):t.seed&&(Ze.config.seed=t.seed),Ze.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),Ze.begin((function(){var e,n,r=Ze.config.urlConfig
for(e=0;e<r.length;e++)"string"!=typeof(n=Ze.config.urlConfig[e])&&(n=n.id),void 0===Ze.config[n]&&(Ze.config[n]=t[n])}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var rt={exports:{}}
!function(e){var t,n
t=ee,n=function(){var e=void 0!==te&&"undefined"==typeof window,t=new s,n=new s,r=[]
r.total=0
var i=[],o=[]
function u(){t.clear(),n.clear(),i=[],o=[]}function l(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var i=r.score
i>t&&(t=i)}}return-9007199254740991===t?null:t}function c(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var i=r.length,o=-1;e&&++o<i;)e=e[r[o]]
return e}function f(e){return"object"===a(e)}var d=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],i=1;i<t;){var o=i+1
n=i,o<t&&e[o].score<e[i].score&&(n=o),e[n-1>>1]=e[n],i=1+(n<<1)}for(var s=n-1>>1;n>0&&r.score<e[s].score;s=(n=s)-1>>1)e[n]=e[s]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var i=r-1>>1;r>0&&n.score<e[i].score;i=(r=i)-1>>1)e[r]=e[i]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},h=d()
return function s(a){var p={single:function(e,t,n){return e?(f(e)||(e=p.getPreparedSearch(e)),t?(f(t)||(t=p.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?p.algorithm:p.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if(!e)return r
var i=(e=p.prepareSearch(e))[0],o=n&&n.threshold||a&&a.threshold||-9007199254740991,s=n&&n.limit||a&&a.limit||9007199254740991,u=(n&&void 0!==n.allowTypo?n.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?p.algorithm:p.algorithmNoTypo,d=0,g=0,m=t.length
if(n&&n.keys)for(var v=n.scoreFn||l,b=n.keys,y=b.length,k=m-1;k>=0;--k){for(var w=t[k],x=new Array(y),E=y-1;E>=0;--E)(N=c(w,C=b[E]))?(f(N)||(N=p.getPrepared(N)),x[E]=u(e,N,i)):x[E]=null
x.obj=w
var T=v(x)
null!==T&&(T<o||(x.score=T,d<s?(h.add(x),++d):(++g,T>h.peek().score&&h.replaceTop(x))))}else if(n&&n.key){var C=n.key
for(k=m-1;k>=0;--k)(N=c(w=t[k],C))&&(f(N)||(N=p.getPrepared(N)),null!==(S=u(e,N,i))&&(S.score<o||(S={target:S.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:S.score,indexes:S.indexes,obj:w},d<s?(h.add(S),++d):(++g,S.score>h.peek().score&&h.replaceTop(S)))))}else for(k=m-1;k>=0;--k){var N,S;(N=t[k])&&(f(N)||(N=p.getPrepared(N)),null!==(S=u(e,N,i))&&(S.score<o||(d<s?(h.add(S),++d):(++g,S.score>h.peek().score&&h.replaceTop(S)))))}if(0===d)return r
var q=new Array(d)
for(k=d-1;k>=0;--k)q[k]=h.poll()
return q.total=d+g,q},goAsync:function(t,n,i){var o=!1,s=new Promise((function(s,u){if(!t)return s(r)
var h=(t=p.prepareSearch(t))[0],g=d(),m=n.length-1,v=i&&i.threshold||a&&a.threshold||-9007199254740991,b=i&&i.limit||a&&a.limit||9007199254740991,y=(i&&void 0!==i.allowTypo?i.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?p.algorithm:p.algorithmNoTypo,k=0,w=0
function x(){if(o)return u("canceled")
var a=Date.now()
if(i&&i.keys)for(var d=i.scoreFn||l,E=i.keys,T=E.length;m>=0;--m){for(var C=n[m],N=new Array(T),S=T-1;S>=0;--S)(M=c(C,j=E[S]))?(f(M)||(M=p.getPrepared(M)),N[S]=y(t,M,h)):N[S]=null
N.obj=C
var q=d(N)
if(null!==q&&!(q<v)&&(N.score=q,k<b?(g.add(N),++k):(++w,q>g.peek().score&&g.replaceTop(N)),m%1e3==0&&Date.now()-a>=10))return void(e?setImmediate(x):setTimeout(x))}else if(i&&i.key){for(var j=i.key;m>=0;--m)if((M=c(C=n[m],j))&&(f(M)||(M=p.getPrepared(M)),null!==(I=y(t,M,h))&&!(I.score<v)&&(I={target:I.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:I.score,indexes:I.indexes,obj:C},k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)),m%1e3==0&&Date.now()-a>=10)))return void(e?setImmediate(x):setTimeout(x))}else for(;m>=0;--m){var M,I
if((M=n[m])&&(f(M)||(M=p.getPrepared(M)),null!==(I=y(t,M,h))&&!(I.score<v)&&(k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)),m%1e3==0&&Date.now()-a>=10)))return void(e?setImmediate(x):setTimeout(x))}if(0===k)return s(r)
for(var R=new Array(k),_=k-1;_>=0;--_)R[_]=g.poll()
R.total=k+w,s(R)}e?setImmediate(x):x()}))
return s.cancel=function(){o=!0},s},highlight:function(e,t,n){if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",i=0,o=!1,s=e.target,a=s.length,u=e.indexes,l=0;l<a;++l){var c=s[l]
if(u[i]===l){if(o||(o=!0,r+=t),++i===u.length){r+=c+n+s.substr(l+1)
break}}else o&&(o=!1,r+=n)
r+=c}return r},prepare:function(e){if(e)return{target:e,_targetLowerCodes:p.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:p.prepareLowerCodes(e),_nextBeginningIndexes:p.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return p.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return p.prepare(e)
var n=t.get(e)
return void 0!==n||(n=p.prepare(e),t.set(e,n)),n},getPreparedSearch:function(e){if(e.length>999)return p.prepareSearch(e)
var t=n.get(e)
return void 0!==t||(t=p.prepareSearch(e),n.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,s=e.length,a=r.length,u=0,l=0,c=0,f=0;;){if(n===r[l]){if(i[f++]=l,++u===s)break
n=e[0===c?u:c===u?u+1:c===u-1?u-1:u]}if(++l>=a)for(;;){if(u<=1)return null
if(0===c){if(n===e[--u])continue
c=u}else{if(1===c)return null
if((n=e[1+(u=--c)])===e[u])continue}l=i[(f=u)-1]+1
break}}u=0
var d=0,h=!1,g=0,m=t._nextBeginningIndexes
null===m&&(m=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target))
var v=l=0===i[0]?0:m[i[0]-1]
if(l!==a)for(;;)if(l>=a){if(u<=0){if(++d>s-2)break
if(e[d]===e[d+1])continue
l=v
continue}--u,l=m[o[--g]]}else if(e[0===d?u:d===u?u+1:d===u-1?u-1:u]===r[l]){if(o[g++]=l,++u===s){h=!0
break}++l}else l=m[l]
if(h)var b=o,y=g
else b=i,y=f
for(var k=0,w=-1,x=0;x<s;++x)w!==(l=b[x])-1&&(k-=l),w=l
for(h?0!==d&&(k+=-20):(k*=1e3,0!==c&&(k+=-20)),k-=a-s,t.score=k,t.indexes=new Array(y),x=y-1;x>=0;--x)t.indexes[x]=b[x]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,s=e.length,a=r.length,u=0,l=0,c=0;;){if(n===r[l]){if(i[c++]=l,++u===s)break
n=e[u]}if(++l>=a)return null}u=0
var f=!1,d=0,h=t._nextBeginningIndexes
if(null===h&&(h=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target)),(l=0===i[0]?0:h[i[0]-1])!==a)for(;;)if(l>=a){if(u<=0)break;--u,l=h[o[--d]]}else if(e[u]===r[l]){if(o[d++]=l,++u===s){f=!0
break}++l}else l=h[l]
if(f)var g=o,m=d
else g=i,m=c
for(var v=0,b=-1,y=0;y<s;++y)b!==(l=g[y])-1&&(v-=l),b=l
for(f||(v*=1e3),v-=a-s,t.score=v,t.indexes=new Array(m),y=m-1;y>=0;--y)t.indexes[y]=g[y]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),i=0;i<t;++i)n[i]=r.charCodeAt(i)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,i=!1,o=!1,s=0;s<t;++s){var a=e.charCodeAt(s),u=a>=65&&a<=90,l=u||a>=97&&a<=122||a>=48&&a<=57,c=u&&!i||!o||!l
i=u,o=l,c&&(n[r++]=s)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=p.prepareBeginningIndexes(e),r=[],i=n[0],o=0,s=0;s<t;++s)i>s?r[s]=i:(i=n[++o],r[s]=void 0===i?t:i)
return r},cleanup:u,new:s}
return p}()},e.exports?e.exports=n():t.fuzzysort=n()}(rt)
var it=rt.exports,ot={failedTests:[],defined:0,completed:0}
function st(e){return e?(e+="").replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(m&&w){var e=Ze.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,i=C({filter:void 0,module:void 0,moduleId:void 0,testId:void 0})
Ze.on("runStart",(function(e){ot.defined=e.testCounts.total})),Ze.begin((function(){var t,n,o,s,a,u,d,h,b,C,q;(u=y("qunit"))&&(u.setAttribute("role","main"),u.innerHTML="<h1 id='qunit-header'>"+st(w.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(t=Ze.config.testId)||t.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+st(t.join(", "))+" <a id='qunit-clearFilter' href='"+st(i)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(n=y("qunit-header"))&&(n.innerHTML="<a href='"+st(i)+"'>"+n.innerHTML+"</a> "),(o=y("qunit-banner"))&&(o.className=""),C=y("qunit-tests"),(q=y("qunit-testresult"))&&q.parentNode.removeChild(q),C&&(C.innerHTML="",(q=w.createElement("p")).id="qunit-testresult",q.className="result",C.parentNode.insertBefore(q,C),q.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',h=y("qunit-testresult-controls")),h&&h.appendChild(((b=w.createElement("button")).id="qunit-abort-tests-button",b.innerHTML="Abort",l(b,"click",k),b)),(s=y("qunit-userAgent"))&&(s.innerHTML="",s.appendChild(w.createTextNode("QUnit "+Ze.version+"; "+x.userAgent))),(a=y("qunit-testrunner-toolbar"))&&(a.appendChild(((d=w.createElement("span")).innerHTML=function(){var t,n,i,o,s,a=!1,u=e.urlConfig,l=""
for(t=0;t<u.length;t++)if("string"==typeof(i=e.urlConfig[t])&&(i={id:i,label:i}),o=st(i.id),s=st(i.tooltip),i.value&&"string"!=typeof i.value){if(l+="<label for='qunit-urlconfig-"+o+"' title='"+s+"'>"+i.label+": </label><select id='qunit-urlconfig-"+o+"' name='"+o+"' title='"+s+"'><option></option>",Array.isArray(i.value))for(n=0;n<i.value.length;n++)l+="<option value='"+(o=st(i.value[n]))+"'"+(e[i.id]===i.value[n]?(a=!0)&&" selected='selected'":"")+">"+o+"</option>"
else for(n in i.value)r.call(i.value,n)&&(l+="<option value='"+st(n)+"'"+(e[i.id]===n?(a=!0)&&" selected='selected'":"")+">"+st(i.value[n])+"</option>")
e[i.id]&&!a&&(l+="<option value='"+(o=st(e[i.id]))+"' selected='selected' disabled='disabled'>"+o+"</option>"),l+="</select>"}else l+="<label for='qunit-urlconfig-"+o+"' title='"+s+"'><input id='qunit-urlconfig-"+o+"' name='"+o+"' type='checkbox'"+(i.value?" value='"+st(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+s+"' />"+st(i.label)+"</label>"
return l}(),p(d,"qunit-url-config"),f(d.getElementsByTagName("input"),"change",T),f(d.getElementsByTagName("select"),"change",T),d)),a.appendChild(function(){var t,n,r,i,o=w.createElement("span")
return o.id="qunit-toolbar-filters",o.appendChild((t=w.createElement("form"),n=w.createElement("label"),r=w.createElement("input"),i=w.createElement("button"),p(t,"qunit-filter"),n.innerHTML="Filter: ",r.type="text",r.value=e.filter||"",r.name="filter",r.id="qunit-filter-input",i.innerHTML="Go",n.appendChild(r),t.appendChild(n),t.appendChild(w.createTextNode(" ")),t.appendChild(i),l(t,"submit",E),t)),o.appendChild(function(){var t,n,r,i=w.createElement("form"),o=w.createElement("label"),s=w.createElement("input"),a=w.createElement("div"),u=w.createElement("span"),f=w.createElement("button"),d=w.createElement("button"),h=w.createElement("label"),p=w.createElement("input"),b=w.createElement("ul"),y=!1
function k(){function e(t){var n=i.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&s.focus(),a.style.display="none",c(w,"click",e),c(w,"keydown",e),s.value="",x())}"none"===a.style.display&&(a.style.display="block",l(w,"click",e),l(w,"keydown",e))}function x(){m.clearTimeout(r),r=m.setTimeout((function(){var t,n=""===(t=s.value.toLowerCase())?e.modules:it.go(t,e.modules,{key:"namePrepared",threshold:-1e4}).map((function(e){return e.obj}))
b.innerHTML=S(n)}),200)}function T(e){var r,i,o=e&&e.target||p,a=b.getElementsByTagName("input"),u=[]
for(g(o.parentNode,"checked",o.checked),y=!1,o.checked&&o!==p&&(p.checked=!1,v(p.parentNode,"checked")),r=0;r<a.length;r++)i=a[r],e?o===p&&o.checked&&(i.checked=!1,v(i.parentNode,"checked")):g(i.parentNode,"checked",i.checked),y=y||i.checked!==i.defaultChecked,i.checked&&u.push(i.parentNode.textContent)
t.style.display=n.style.display=y?"":"none",s.placeholder=u.join(", ")||p.parentNode.textContent,s.title="Type to filter list. Current selection:\n"+(u.join("\n")||p.parentNode.textContent)}return s.id="qunit-modulefilter-search",s.autocomplete="off",l(s,"input",x),l(s,"input",k),l(s,"focus",k),l(s,"click",k),e.modules.forEach((function(e){return e.namePrepared=it.prepare(e.name)})),o.id="qunit-modulefilter-search-container",o.innerHTML="Module: ",o.appendChild(s),f.textContent="Apply",f.style.display="none",d.textContent="Reset",d.type="reset",d.style.display="none",p.type="checkbox",p.checked=0===e.moduleId.length,h.className="clickable",e.moduleId.length&&(h.className="checked"),h.appendChild(p),h.appendChild(w.createTextNode("All modules")),u.id="qunit-modulefilter-actions",u.appendChild(f),u.appendChild(d),u.appendChild(h),t=u.firstChild,n=t.nextSibling,l(t,"click",N),b.id="qunit-modulefilter-dropdown-list",b.innerHTML=S(e.modules),a.id="qunit-modulefilter-dropdown",a.style.display="none",a.appendChild(u),a.appendChild(b),l(a,"change",T),T(),i.id="qunit-modulefilter",i.appendChild(o),i.appendChild(a),l(i,"submit",E),l(i,"reset",(function(){m.setTimeout(T)})),i}()),o}()),a.appendChild(w.createElement("div")).className="clearfix")})),Ze.on("runEnd",(function(t){var n,r,i,o=y("qunit-banner"),s=y("qunit-tests"),a=y("qunit-abort-tests-button"),u=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",u,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",j(ot.failedTests)].join("")
if(a&&a.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<s.children.length;c++)""!==(n=s.children[c]).className&&"running"!==n.className||(n.className="aborted",i=n.getElementsByTagName("ol")[0],(r=w.createElement("li")).className="fail",r.innerHTML="Test aborted.",i.appendChild(r))}!o||a&&!1!==a.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),a&&a.parentNode.removeChild(a),s&&(y("qunit-testresult-display").innerHTML=l),e.altertitle&&w.title&&(w.title=["failed"===t.status?"✖":"✔",w.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&m.scrollTo&&m.scrollTo(0,0)})),Ze.testStart((function(e){var t,n
q(e.name,e.testId,e.module),(t=y("qunit-testresult-display"))&&(p(t,"running"),n=Ze.config.reorder&&e.previousFailure,t.innerHTML=[I(ot),n?"Rerunning previously failed test: <br />":"Running: ",M(e.name,e.module),j(ot.failedTests)].join(""))})),Ze.log((function(e){var t,n,i,o,s,a,u=!1,l=y("qunit-test-output-"+e.testId)
l&&(i="<span class='test-message'>"+(i=st(e.message)||(e.result?"okay":"failed"))+"</span>",i+="<span class='runtime'>@ "+e.runtime+" ms</span>",!e.result&&r.call(e,"expected")?(o=e.negative?"NOT "+Ze.dump.parse(e.expected):Ze.dump.parse(e.expected),s=Ze.dump.parse(e.actual),i+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+st(o)+"</pre></td></tr>",s!==o?(i+="<tr class='test-actual'><th>Result: </th><td><pre>"+st(s)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(u=!0,a=((a=e.actual-e.expected)>0?"+":"")+a):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(u=R(a=Ze.diff(o,s)).length!==R(o).length+R(s).length),u&&(i+="<tr class='test-diff'><th>Diff: </th><td><pre>"+a+"</pre></td></tr>")):-1!==o.indexOf("[object Array]")||-1!==o.indexOf("[object Object]")?i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+Ze.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+st(C({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(i+="<tr class='test-source'><th>Source: </th><td><pre>"+st(e.source)+"</pre></td></tr>"),i+="</table>"):!e.result&&e.source&&(i+="<table><tr class='test-source'><th>Source: </th><td><pre>"+st(e.source)+"</pre></td></tr></table>"),t=l.getElementsByTagName("ol")[0],(n=w.createElement("li")).className=e.result?"pass":"fail",n.innerHTML=i,t.appendChild(n))})),Ze.testDone((function(r){var i,o,s,a,u,c,f,d,h,m=y("qunit-tests"),b=y("qunit-test-output-"+r.testId)
if(m&&b){v(b,"running"),a=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed",s=b.getElementsByTagName("ol")[0],u=r.passed,c=r.failed
var k=r.failed>0?r.todo:!r.todo
if(k?p(s,"qunit-collapsed"):(ot.failedTests.push(r.testId),e.collapse&&(n?p(s,"qunit-collapsed"):n=!0)),f=c?"<b class='failed'>"+c+"</b>, <b class='passed'>"+u+"</b>, ":"",(i=b.firstChild).innerHTML+=" <b class='counts'>("+f+r.assertions.length+")</b>",ot.completed++,r.skipped)b.className="skipped",(d=w.createElement("em")).className="qunit-skipped-label",d.innerHTML="skipped",b.insertBefore(d,i)
else{if(l(i,"click",(function(){g(s,"qunit-collapsed")})),b.className=k?"pass":"fail",r.todo){var x=w.createElement("em")
x.className="qunit-todo-label",x.innerHTML="todo",b.className+=" todo",b.insertBefore(x,i)}(o=w.createElement("span")).className="runtime",o.innerHTML=r.runtime+" ms",b.insertBefore(o,s)}r.source&&((h=w.createElement("p")).innerHTML="<strong>Source: </strong>"+st(r.source),p(h,"qunit-source"),k&&p(h,"qunit-collapsed"),l(i,"click",(function(){g(h,"qunit-collapsed")})),b.appendChild(h)),e.hidepassed&&("passed"===a||r.skipped)&&(t.push(b),m.removeChild(b))}})),Ze.on("error",(function(e){var t=q("global failure")
if(t){var n=st(U(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+st(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],i=w.createElement("li")
i.className="fail",i.innerHTML=n,r.appendChild(i),t.className="fail"}}))
var o,s=(o=m.phantom)&&o.version&&o.version.major>0
s&&b.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),s||"complete"!==w.readyState?l(m,"load",Ze.load):Ze.load()
var a=m.onerror
m.onerror=function(t,n,r,i,o){var s=!1
if(a){for(var u=arguments.length,l=new Array(u>5?u-5:0),c=5;c<u;c++)l[c-5]=arguments[c]
s=a.call.apply(a,[this,t,n,r,i,o].concat(l))}if(!0!==s){if(e.current&&e.current.ignoreGlobalErrors)return!0
var f=o||new Error(t)
!f.stack&&n&&r&&(f.stack="".concat(n,":").concat(r)),Ze.onUncaughtException(f)}return s},m.addEventListener("unhandledrejection",(function(e){Ze.onUncaughtException(e.reason)}))}function u(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function l(e,t,n){e.addEventListener(t,n,!1)}function c(e,t,n){e.removeEventListener(t,n,!1)}function f(e,t,n){for(var r=e.length;r--;)l(e[r],t,n)}function d(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function p(e,t){d(e,t)||(e.className+=(e.className?" ":"")+t)}function g(e,t,n){n||void 0===n&&!d(e,t)?p(e,t):v(e,t)}function v(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=u(n)}function y(e){return w.getElementById&&w.getElementById(e)}function k(){var e=y("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),Ze.config.queue.length=0,!1}function E(e){var t=y("qunit-filter-input")
return t.value=u(t.value),N(),e&&e.preventDefault&&e.preventDefault(),!1}function T(){var n,r,i,o=this,s={}
if(r="selectedIndex"in o?o.options[o.selectedIndex].value||void 0:o.checked?o.defaultValue||!0:void 0,s[o.name]=r,n=C(s),"hidepassed"===o.name&&"replaceState"in m.history){if(Ze.urlParams[o.name]=r,e[o.name]=r||!1,i=y("qunit-tests")){var a=i.children.length,u=i.children
if(o.checked){for(var l=0;l<a;l++){var c=u[l],f=c?c.className:"",d=f.indexOf("pass")>-1,p=f.indexOf("skipped")>-1;(d||p)&&t.push(c)}var g,v=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=h(e))){n&&(e=n)
var r=0,i=function(){}
return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(t)
try{for(v.s();!(g=v.n()).done;){var b=g.value
i.removeChild(b)}}catch(e){v.e(e)}finally{v.f()}}else for(;null!=(c=t.pop());)i.appendChild(c)}m.history.replaceState(null,"",n)}else m.location=n}function C(e){var t,n,i,o="?",s=m.location
for(t in e=A(A({},Ze.urlParams),e))if(r.call(e,t)&&void 0!==e[t])for(n=[].concat(e[t]),i=0;i<n.length;i++)o+=encodeURIComponent(t),!0!==n[i]&&(o+="="+encodeURIComponent(n[i])),o+="&"
return s.protocol+"//"+s.host+s.pathname+o.slice(0,-1)}function N(){var e,t=[],n=y("qunit-modulefilter-dropdown-list").getElementsByTagName("input"),r=y("qunit-filter-input").value
for(e=0;e<n.length;e++)n[e].checked&&t.push(n[e].value)
m.location=C({filter:""===r?void 0:r,moduleId:0===t.length?void 0:t,module:void 0,testId:void 0})}function S(t){var n,r,i=""
for(n=0;n<t.length;n++)""!==t[n].name&&(i+="<li><label class='clickable"+((r=e.moduleId.indexOf(t[n].moduleId)>-1)?" checked":"")+"'><input type='checkbox' value='"+t[n].moduleId+"'"+(r?" checked='checked'":"")+" />"+st(t[n].name)+"</label></li>")
return i}function q(e,t,n){var r,i,o,s,a=y("qunit-tests")
if(a)return(r=w.createElement("strong")).innerHTML=M(e,n),(o=w.createElement("li")).appendChild(r),void 0!==t&&((i=w.createElement("a")).innerHTML="Rerun",i.href=C({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)),(s=w.createElement("ol")).className="qunit-assert-list",o.appendChild(s),a.appendChild(o),o}function j(e){return 0===e.length?"":["<br /><a href='"+st(C({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function M(e,t){var n=""
return t&&(n="<span class='module-name'>"+st(t)+"</span>: "),n+"<span class='test-name'>"+st(e)+"</span>"}function I(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function R(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),Ze.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r,i,o,s,a,u
if(r=(new Date).getTime()+1e3,null===e||null===t)throw new Error("Null input. (DiffMain)")
return e===t?e?[[0,e]]:[]:(void 0===n&&(n=!0),i=n,o=this.diffCommonPrefix(e,t),s=e.substring(0,o),e=e.substring(o),t=t.substring(o),o=this.diffCommonSuffix(e,t),a=e.substring(e.length-o),e=e.substring(0,e.length-o),t=t.substring(0,t.length-o),u=this.diffCompute(e,t,i,r),s&&u.unshift([0,s]),a&&u.push([0,a]),this.diffCleanupMerge(u),u)},e.prototype.diffCleanupEfficiency=function(e){var n,r,i,o,s,a,u,l,c
for(n=!1,r=[],i=0,o=null,s=0,a=!1,u=!1,l=!1,c=!1;s<e.length;)0===e[s][0]?(e[s][1].length<4&&(l||c)?(r[i++]=s,a=l,u=c,o=e[s][1]):(i=0,o=null),l=c=!1):(e[s][0]===t?c=!0:l=!0,o&&(a&&u&&l&&c||o.length<2&&a+u+l+c===3)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,o=null,a&&u?(l=c=!0,i=0):(s=--i>0?r[i-1]:-1,l=c=!1),n=!0)),s++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){var n,r,i,o=[]
for(i=0;i<e.length;i++)switch(n=e[i][0],r=e[i][1],n){case 1:o[i]="<ins>"+st(r)+"</ins>"
break
case t:o[i]="<del>"+st(r)+"</del>"
break
case 0:o[i]="<span>"+st(r)+"</span>"}return o.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,i,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(i=0,n=r=Math.min(e.length,t.length),o=0;i<n;)e.substring(o,n)===t.substring(o,n)?o=i=n:r=n,n=Math.floor((r-i)/2+i)
return n},e.prototype.diffCommonSuffix=function(e,t){var n,r,i,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(i=0,n=r=Math.min(e.length,t.length),o=0;i<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=i=n:r=n,n=Math.floor((r-i)/2+i)
return n},e.prototype.diffCompute=function(e,n,r,i){var o,s,a,u,l,c,f,d,h,p,g,m
return e?n?(s=e.length>n.length?e:n,a=e.length>n.length?n:e,-1!==(u=s.indexOf(a))?(o=[[1,s.substring(0,u)],[0,a],[1,s.substring(u+a.length)]],e.length>n.length&&(o[0][0]=o[2][0]=t),o):1===a.length?[[t,e],[1,n]]:(l=this.diffHalfMatch(e,n))?(c=l[0],d=l[1],f=l[2],h=l[3],p=l[4],g=this.DiffMain(c,f,r,i),m=this.DiffMain(d,h,r,i),g.concat([[0,p]],m)):r&&e.length>100&&n.length>100?this.diffLineMode(e,n,i):this.diffBisect(e,n,i)):[[t,e]]:[[1,n]]},e.prototype.diffHalfMatch=function(e,t){var n,r,i,o,s,a,u,l,c,f
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function d(e,t,n){var r,o,s,a,u,l,c,f,d
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,s="";-1!==(o=t.indexOf(r,o+1));)a=i.diffCommonPrefix(e.substring(n),t.substring(o)),u=i.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),s.length<u+a&&(s=t.substring(o-u,o)+t.substring(o,o+a),l=e.substring(0,n-u),c=e.substring(n+a),f=t.substring(0,o-u),d=t.substring(o+a))
return 2*s.length>=e.length?[l,c,f,d,s]:null}return i=this,l=d(n,r,Math.ceil(n.length/4)),c=d(n,r,Math.ceil(n.length/2)),l||c?(f=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=f[0],u=f[1],a=f[2],s=f[3]):(a=f[0],s=f[1],o=f[2],u=f[3]),[o,u,a,s,f[4]]):null},e.prototype.diffLineMode=function(e,n,r){var i,o,s,a,u,l,c,f,d
for(e=(i=this.diffLinesToChars(e,n)).chars1,n=i.chars2,s=i.lineArray,o=this.DiffMain(e,n,!1,r),this.diffCharsToLines(o,s),this.diffCleanupSemantic(o),o.push([0,""]),a=0,l=0,u=0,f="",c="";a<o.length;){switch(o[a][0]){case 1:u++,c+=o[a][1]
break
case t:l++,f+=o[a][1]
break
case 0:if(l>=1&&u>=1){for(o.splice(a-l-u,l+u),a=a-l-u,d=(i=this.DiffMain(f,c,!1,r)).length-1;d>=0;d--)o.splice(a,0,i[d])
a+=i.length}u=0,l=0,f="",c=""}a++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var i,o,s,a,u,l,c,f,d,h,p,g,m,v,b,y,k,w,x,E,T,C,N
for(i=e.length,o=n.length,a=s=Math.ceil((i+o)/2),u=2*s,l=new Array(u),c=new Array(u),f=0;f<u;f++)l[f]=-1,c[f]=-1
for(l[a+1]=0,c[a+1]=0,h=(d=i-o)%2!=0,p=0,g=0,m=0,v=0,T=0;T<s&&!((new Date).getTime()>r);T++){for(C=-T+p;C<=T-g;C+=2){for(y=a+C,x=(k=C===-T||C!==T&&l[y-1]<l[y+1]?l[y+1]:l[y-1]+1)-C;k<i&&x<o&&e.charAt(k)===n.charAt(x);)k++,x++
if(l[y]=k,k>i)g+=2
else if(x>o)p+=2
else if(h&&(b=a+d-C)>=0&&b<u&&-1!==c[b]&&k>=(w=i-c[b]))return this.diffBisectSplit(e,n,k,x,r)}for(N=-T+m;N<=T-v;N+=2){for(b=a+N,E=(w=N===-T||N!==T&&c[b-1]<c[b+1]?c[b+1]:c[b-1]+1)-N;w<i&&E<o&&e.charAt(i-w-1)===n.charAt(o-E-1);)w++,E++
if(c[b]=w,w>i)v+=2
else if(E>o)m+=2
else if(!h&&(y=a+d-N)>=0&&y<u&&-1!==l[y]&&(x=a+(k=l[y])-y,k>=(w=i-w)))return this.diffBisectSplit(e,n,k,x,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,i){var o,s,a,u,l,c
return o=e.substring(0,n),a=t.substring(0,r),s=e.substring(n),u=t.substring(r),l=this.DiffMain(o,a,!1,i),c=this.DiffMain(s,u,!1,i),l.concat(c)},e.prototype.diffCleanupSemantic=function(e){var n,r,i,o,s,a,u,l,c,f,d,h,p
for(n=!1,r=[],i=0,o=null,s=0,l=0,c=0,a=0,u=0;s<e.length;)0===e[s][0]?(r[i++]=s,l=a,c=u,a=0,u=0,o=e[s][1]):(1===e[s][0]?a+=e[s][1].length:u+=e[s][1].length,o&&o.length<=Math.max(l,c)&&o.length<=Math.max(a,u)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,s=--i>0?r[i-1]:-1,l=0,c=0,a=0,u=0,o=null,n=!0)),s++
for(n&&this.diffCleanupMerge(e),s=1;s<e.length;)e[s-1][0]===t&&1===e[s][0]&&(f=e[s-1][1],d=e[s][1],(h=this.diffCommonOverlap(f,d))>=(p=this.diffCommonOverlap(d,f))?(h>=f.length/2||h>=d.length/2)&&(e.splice(s,0,[0,d.substring(0,h)]),e[s-1][1]=f.substring(0,f.length-h),e[s+1][1]=d.substring(h),s++):(p>=f.length/2||p>=d.length/2)&&(e.splice(s,0,[0,f.substring(0,p)]),e[s-1][0]=1,e[s-1][1]=d.substring(0,d.length-p),e[s+1][0]=t,e[s+1][1]=f.substring(p),s++),s++),s++},e.prototype.diffCommonOverlap=function(e,t){var n,r,i,o,s,a,u
if(n=e.length,r=t.length,0===n||0===r)return 0
if(n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n)),i=Math.min(n,r),e===t)return i
for(o=0,s=1;;){if(a=e.substring(i-s),-1===(u=t.indexOf(a)))return o
s+=u,0!==u&&e.substring(i-s)!==t.substring(0,s)||(o=s,s++)}},e.prototype.diffLinesToChars=function(e,t){var r,i
function o(e){var t,o,s,a,u
for(t="",o=0,s=-1,a=r.length;s<e.length-1;)-1===(s=e.indexOf("\n",o))&&(s=e.length-1),u=e.substring(o,s+1),o=s+1,n.call(i,u)?t+=String.fromCharCode(i[u]):(t+=String.fromCharCode(a),i[u]=a,r[a++]=u)
return t}return i={},(r=[])[0]="",{chars1:o(e),chars2:o(t),lineArray:r}},e.prototype.diffCharsToLines=function(e,t){var n,r,i,o
for(n=0;n<e.length;n++){for(r=e[n][1],i=[],o=0;o<r.length;o++)i[o]=t[r.charCodeAt(o)]
e[n][1]=i.join("")}},e.prototype.diffCleanupMerge=function(e){var n,r,i,o,s,a,u,l
for(e.push([0,""]),n=0,r=0,i=0,s="",o="";n<e.length;)switch(e[n][0]){case 1:i++,o+=e[n][1],n++
break
case t:r++,s+=e[n][1],n++
break
case 0:r+i>1?(0!==r&&0!==i&&(0!==(a=this.diffCommonPrefix(o,s))&&(n-r-i>0&&0===e[n-r-i-1][0]?e[n-r-i-1][1]+=o.substring(0,a):(e.splice(0,0,[0,o.substring(0,a)]),n++),o=o.substring(a),s=s.substring(a)),0!==(a=this.diffCommonSuffix(o,s))&&(e[n][1]=o.substring(o.length-a)+e[n][1],o=o.substring(0,o.length-a),s=s.substring(0,s.length-a))),0===r?e.splice(n-i,r+i,[1,o]):0===i?e.splice(n-r,r+i,[t,s]):e.splice(n-r-i,r+i,[t,s],[1,o]),n=n-r-i+(r?1:0)+(i?1:0)+1):0!==n&&0===e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,i=0,r=0,s="",o=""}for(""===e[e.length-1][1]&&e.pop(),u=!1,n=1;n<e.length-1;)0===e[n-1][0]&&0===e[n+1][0]&&((l=e[n][1]).substring(l.length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),u=!0):l.substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),u=!0)),n++
u&&this.diffCleanupMerge(e)},function(t,n){var r,i
return i=(r=new e).DiffMain(t,n),r.diffCleanupEfficiency(i),r.diffPrettyHtml(i)}}()}()}}])
