"use strict"
define("jarvis/app",["exports","jarvis/resolver","ember-load-initializers","jarvis/config/environment"],(function(e,t,r,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){function r(){var e,u;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,r)
for(var l=arguments.length,d=new Array(l),c=0;c<l;c++)d[c]=arguments[c]
return u=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?a(e):t}(this,(e=i(r)).call.apply(e,[this].concat(d))),s(a(u),"modulePrefix",n.default.modulePrefix),s(a(u),"podModulePrefix",n.default.podModulePrefix),s(a(u),"Resolver",t.default),u}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(r,Ember.Application),r}()
e.default=l,(0,r.default)(l,n.default.modulePrefix)})),define("jarvis/components/ivy-codemirror",["exports","ivy-codemirror/components/ivy-codemirror"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("jarvis/components/radio-button-input",["exports","ember-radio-button/components/radio-button-input"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("jarvis/components/radio-button",["exports","ember-radio-button/components/radio-button"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("jarvis/controllers/application",["exports","jarvis/config/environment"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Controller.extend({customize:Ember.inject.service(),emberVersion:Ember.computed((function(){return t.default.pkg.devDependencies["ember-source"]})),nodeBuilderVersion:Ember.computed((function(){return t.default.pkg.dependencies["ast-node-builder"]})),nodeFinderVersion:Ember.computed((function(){return t.default.pkg.dependencies["ast-node-finder"]})),actions:{toggleDarkMode:function(){this.customize.toggleDarkMode()}}})
e.default=r})),define("jarvis/controllers/index",["exports","ast-node-builder","ast-node-finder","recast","jscodeshift"],(function(e,t,r,n,o){function i(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t]
return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.core.callExpression,u=t.core.memberExpression,s=t.core.assignmentExpression,l=t.core.identifier,d=t.core.binaryExpression,c=["insert-before","insert-after","replace"]
var p=Ember.Controller.extend({customize:Ember.inject.service(),theme:Ember.computed.reads("customize.theme"),source:"foo()",dest:"foo.bar()",nodeOp:"remove",showDest:Ember.computed("nodeOp",(function(){var e=this.get("nodeOp")
return c.includes(e)})),insertOption:"before",showInsertOptions:Ember.computed("nodeOp",(function(){return"insert"===this.get("nodeOp")})),nodeApi:Ember.computed("source","opQuery","insertOption",(function(){var e=(0,n.parse)(this.get("source")),t=(0,r.dispatchNodes)(e).join(),o=this.get("opQuery"),i="\n    module.exports = function transformer(file, api) {\n   const j = api.jscodeshift;\n  const root = j(file.source);\n  const body = root.get().value.program.body;\n  ".concat(t,"\n  ").concat(o,"\n  return root.toSource();\n};\n")
return(0,n.prettyPrint)((0,n.parse)(i),{tabWidth:2}).code})),output:Ember.computed("nodeApi",(function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={},n={exports:r},o=Object.keys(t),a=["module","exports"].concat(i(o)),u=[n,r].concat(i(o.map((function(e){return t[e]}))))
return new Function(a.join(),e).apply(r,u),n.exports}(this.get("nodeApi"))
return(e.__esModule?e.default:e)({path:"Live.js",source:this.get("source")},{jscodeshift:e.parser?o.default.withParser(e.parser):o.default},{})})),opQuery:Ember.computed("nodeOp","dest","insertOption",(function(){var e=""
switch(this.get("nodeOp")){case"remove":e=".remove();"
break
case"replace":e=".replaceWith(path => {\n          return ".concat(this._buildReplaceNode((0,n.parse)(this.get("dest"))),";\n        })")
break
case"insert-before":e=".forEach(path => {\n        path.parent.insertBefore(".concat((0,t.buildAST)((0,n.parse)(this.get("dest"))),");\n        })")
break
case"insert-after":e=".forEach(path => {\n        path.parent.insertAfter(".concat((0,t.buildAST)((0,n.parse)(this.get("dest"))),");\n        })")}return e})),actions:{opChanged:function(e){this.set("nodeOp",e)},setInsertOption:function(e){this.set("insertOption",e)}},_buildReplaceNode:function(e){var t=this
return e.program.body.map((function(e){var r=""
switch(e.type){case"ExpressionStatement":r=t._buildExpression(e.expression)
break
default:console.log("_buildReplaceNode => ",e.type)}return r})).join("")},_buildExpression:function(e){var t="",r=e.extra
switch(e.type){case"MemberExpression":t=u(e)
break
case"CallExpression":t=r&&r.parenthesized?"\n       j.parenthesizedExpression(\n       ".concat(a(e),"\n       )"):a(e)
break
case"AssignmentExpression":t=s(e)
break
case"Identifier":t=l(e)
break
case"BinaryExpression":t=d(e)
break
default:console.log("_buildExpression => ",e.type)}return t}})
e.default=p})),define("jarvis/helpers/app-version",["exports","jarvis/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,a=n.shaOnly||n.hideVersion,u=null
return i&&(n.showExtended&&(u=o.match(r.versionExtendedRegExp)),u||(u=o.match(r.versionRegExp))),a&&(u=o.match(r.shaRegExp)),u?u[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o})),define("jarvis/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","jarvis/config/environment"],(function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("jarvis/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("jarvis/initializers/export-application-global",["exports","jarvis/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("jarvis/resolver",["exports","ember-resolver"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("jarvis/router",["exports","jarvis/config/environment"],(function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){function u(){var e,i;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,u)
for(var s=arguments.length,l=new Array(s),d=0;d<s;d++)l[d]=arguments[d]
return i=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}(this,(e=n(u)).call.apply(e,[this].concat(l))),a(o(i),"location",t.default.locationType),a(o(i),"rootURL",t.default.rootURL),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(u,Ember.Router),u}()
e.default=u,u.map((function(){}))})),define("jarvis/routes/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t})),define("jarvis/services/code-mirror",["exports","ivy-codemirror/services/code-mirror"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("jarvis/services/customize",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Service.extend({darkMode:!1,theme:Ember.computed("darkMode",(function(){return this.get("darkMode")?"solarized dark":"solarized light"})),toggleDarkMode:function(){var e=this.get("darkMode")
this.set("darkMode",!e)}})
e.default=t})),define("jarvis/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"F+wwXFvu",block:'{"symbols":[],"statements":[[7,"header",true],[8],[0,"\\n  "],[7,"h1",true],[8],[0,"JARVIS"],[9],[0,"\\n  "],[7,"nav",true],[8],[0,"\\n    "],[7,"ul",true],[8],[0,"\\n      "],[7,"li",true],[8],[0,"\\n        "],[7,"a",true],[10,"href","https://rajasegar.github.io/ast-builder/"],[8],[0,"ast-builder"],[9],[0,"\\n      "],[9],[0,"\\n      "],[7,"li",true],[8],[0,"\\n        "],[7,"a",true],[10,"href","https://rajasegar.github.io/ast-finder/"],[8],[0,"ast-finder"],[9],[0,"\\n      "],[9],[0,"\\n      "],[7,"li",true],[8],[0,"\\n        "],[7,"a",true],[10,"href","https://astexplorer.net/"],[8],[0,"ast-explorer"],[9],[0,"\\n      "],[9],[0,"\\n      "],[7,"li",true],[8],[0,"\\n        "],[7,"span",true],[8],[0,"Enable Dark theme: "],[5,"input",[],[["@type","@click"],["checkbox",[28,"action",[[23,0,[]],"toggleDarkMode"],null]]]],[9],[0,"\\n      "],[9],[0,"\\n\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[7,"main",true],[8],[0,"\\n  "],[1,[22,"outlet"],false],[0,"\\n"],[9],[0,"\\n"],[7,"footer",true],[8],[0,"\\n  "],[7,"p",true],[8],[0,"\\n  Built with "],[7,"a",true],[10,"href","https://emberjs.com"],[8],[0,"Ember.js: "],[1,[22,"emberVersion"],false],[9],[0," |\\n  "],[7,"a",true],[10,"href","https://github.com/rajasegar/ast-node-builder"],[8],[0,"ast-node-builder: "],[1,[22,"nodeBuilderVersion"],false],[9],[0," |\\n  "],[7,"a",true],[10,"href","https://github.com/rajasegar/ast-node-finder"],[8],[0,"ast-node-finder: "],[1,[22,"nodeFinderVersion"],false],[9],[0," |\\n    "],[7,"a",true],[10,"href","https://github.com/rajasegar/jarvis"],[8],[0,"Github"],[9],[0," |\\n    "],[7,"a",true],[10,"href","https://github.com/rajasegar/jarvis/issues"],[8],[0,"Report issues"],[9],[0," \\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"jarvis/templates/application.hbs"}})
e.default=t})),define("jarvis/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"17pxiHdJ",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","grid-col"],[8],[0,"\\n  "],[7,"div",true],[10,"class","grid-row"],[8],[0,"\\n    "],[7,"div",true],[8],[0,"\\n      "],[7,"p",true],[8],[7,"strong",true],[8],[0,"1."],[9],[0," Enter source code here:"],[9],[0,"\\n      "],[1,[28,"ivy-codemirror",null,[["value","options","valueUpdated"],[[24,["source"]],[28,"hash",null,[["lineNumbers","mode","theme"],[true,"javascript",[24,["theme"]]]]],[28,"action",[[23,0,[]],[28,"mut",[[24,["source"]]],null]],null]]]],false],[0,"\\n      "],[7,"p",true],[8],[7,"strong",true],[8],[0,"2."],[9],[0," Choose any AST node operation:"],[9],[0,"\\n      "],[7,"div",true],[10,"class","mode-options"],[8],[0,"\\n"],[4,"radio-button",null,[["value","groupValue","changed"],["remove",[24,["nodeOp"]],[28,"action",[[23,0,[]],"opChanged"],null]]],{"statements":[[0,"          "],[7,"span",true],[8],[0,"Remove"],[9],[0,"\\n"]],"parameters":[]},null],[4,"radio-button",null,[["value","groupValue","changed"],["replace",[24,["nodeOp"]],[28,"action",[[23,0,[]],"opChanged"],null]]],{"statements":[[0,"          "],[7,"span",true],[8],[0,"Replace"],[9],[0,"\\n"]],"parameters":[]},null],[4,"radio-button",null,[["value","groupValue","changed"],["insert-before",[24,["nodeOp"]],[28,"action",[[23,0,[]],"opChanged"],null]]],{"statements":[[0,"          "],[7,"span",true],[8],[0,"Insert Before"],[9],[0,"\\n"]],"parameters":[]},null],[4,"radio-button",null,[["value","groupValue","changed"],["insert-after",[24,["nodeOp"]],[28,"action",[[23,0,[]],"opChanged"],null]]],{"statements":[[0,"          "],[7,"span",true],[8],[0,"Insert After"],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[24,["showInsertOptions"]]],null,{"statements":[[0,"          "],[7,"select",true],[11,"onchange",[28,"action",[[23,0,[]],"setInsertOption"],null]],[10,"value","target.value"],[8],[0,"\\n            "],[7,"option",true],[10,"value","before"],[8],[0,"Before"],[9],[0,"\\n            "],[7,"option",true],[10,"value","after"],[8],[0,"After"],[9],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n      "],[7,"div",true],[8],[0,"\\n        "],[7,"p",true],[8],[7,"strong",true],[8],[0,"2.a."],[9],[0," Enter destination code here:"],[9],[0,"\\n        "],[1,[28,"ivy-codemirror",null,[["value","valueUpdated","options"],[[24,["dest"]],[28,"action",[[23,0,[]],[28,"mut",[[24,["dest"]]],null]],null],[28,"hash",null,[["lineNumbers","mode","theme","foldGutter"],[true,[24,["jsonMode"]],[24,["theme"]],true]]]]]],false],[0,"\\n      "],[9],[0,"\\n  "],[9],[0,"\\n  "],[7,"div",true],[10,"class","grid-row"],[8],[0,"\\n    "],[7,"div",true],[8],[0,"\\n      "],[7,"p",true],[8],[7,"strong",true],[8],[0,"3."],[9],[0," Codemod : (You can copy/paste in "],[7,"a",true],[10,"href","http://astexplorer.net"],[8],[0,"ast-explorer"],[9],[0," and check)"],[9],[0,"\\n      "],[1,[28,"ivy-codemirror",null,[["value","options"],[[24,["nodeApi"]],[28,"hash",null,[["lineNumbers","mode","theme","autoIndent"],[true,"javascript",[24,["theme"]],true]]]]]],false],[0,"\\n    "],[9],[0,"\\n    "],[7,"div",true],[8],[0,"\\n      "],[7,"p",true],[8],[7,"strong",true],[8],[0,"4."],[9],[0," Output :"],[9],[0,"\\n      "],[1,[28,"ivy-codemirror",null,[["value","options"],[[24,["output"]],[28,"hash",null,[["lineNumbers","mode","theme","autoIndent"],[true,"javascript",[24,["theme"]],true]]]]]],false],[0,"\\n \\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"jarvis/templates/index.hbs"}})
e.default=t})),define("jarvis/config/environment",[],(function(){try{var e="jarvis/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("jarvis/app").default.create({name:"jarvis",version:"0.0.0+f3df5957"})