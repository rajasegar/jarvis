import Component from "@glimmer/component";
import { service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

import { parse } from "@babel/parser";
import { babel, glimmer } from "ast-node-finder";
import * as recast from "recast";
// import recastBabel from "recastBabel";
// import recastBabylon from "recastBabylon";
import etr from "ember-template-recast";
import jscodeshift from "jscodeshift";
import compileModule from "jarvis/utils/compile-module";
import opQuery from "jarvis/utils/op-query";
import smartOp from "jarvis/utils/smart-op";

const modes = {
  Javascript: "javascript",
  Handlebars: "handlebars",
};

export default class AstMaker extends Component {
  @service customize;
  @service codemod;

  parser = "babel";
  code = "foo()";
  mode = "javascript";
  allowSmartUpdate = false;
  dest = "bar()";
  @tracked transform = "";
  @tracked opCode = "replace";

  get emberVersion() {
    return ENV.pkg.devDependencies["ember-source"];
  }

  get nodeBuilderVersion() {
    return ENV.pkg.dependencies["ast-node-builder"];
  }

  get nodeFinderVersion() {
    return ENV.pkg.dependencies["ast-node-finder"];
  }

  get buttonText() {
    return "Save";
  }

  buttonDisabled = false;

  @action
  saveGist() {
    this.set("buttonText", "Saving...");
    this.set("buttonDisabled", true);
    this.codemod.saveGist().then((data) => {
      this.set("buttonText", "Save");
      this.set("buttonDisabled", false);
      this.router.transitionTo("gists", data.id);
    });
  }

  @action
  onChangeNodeOp(val) {
    this.opCode = val;
    this.transform = this.getCodeMod();
  }

  constructor() {
    super(...arguments);
    this.transform = this.getCodeMod();
  }

  get parse() {
    let parse;
    let _parser = this.parser;
    switch (_parser) {
      case "babylon":
        parse = recastBabylon.parse;
        break;
      case "babel":
        parse = recastBabel.parse;
        break;

      case "ember-template-recast":
        parse = etr.parse;
        break;
    }
    return parse;
  }

  opQuery() {
    return opQuery(this.mode, this.opCode, this.dest);
  }

  getCodeMod() {
    let ast = parse(this.code);
    let _transformTemplate = "";
    let transformLogic = "";
    let _mode = this.mode;
    if (_mode === "javascript") {
      let _inputNodeType = ast.program.body[0].type;

      let outAst = parse(this.dest);
      let _outputNodeType = outAst.program.body[0].type;

      const isSmartUpdate =
        _inputNodeType === _outputNodeType && this.opCode === "replace";

      const { dispatchNodes } = babel;
      transformLogic = dispatchNodes(ast).join();
      let _opQuery =
        isSmartUpdate && this.allowSmartUpdate
          ? this.smartOp()
          : this.opQuery();

      // TODO: Need to change to es6 export default
      _transformTemplate = `
          module.exports = function transformer(file, api) {
         const j = api.jscodeshift;
        const root = j(file.source);
        const body = root.get().value.program.body;
        ${transformLogic}
        ${_opQuery}
        return root.toSource();
      };`;
    } else {
      let _opQuery = this.opQuery;
      transformLogic = glimmer.dispatchNodes(ast, _opQuery).join();

      _transformTemplate = `
          module.exports = function(env) {
        let b = env.syntax.builders;

        ${transformLogic}
        
      };`;
    }

    let _codemod = recast.prettyPrint(recast.parse(_transformTemplate), {
      tabWidth: 2,
    }).code;

    return _codemod;
  }

  @action
  onUpdateSource(doc) {
    // console.log(doc);
    this.code = doc;
    this.transform = this.getCodeMod();
  }

  @action
  onUpdateDest(doc) {
    this.dest = doc;
    this.transform = this.getCodeMod();
  }
  @action
  onUpdateCodemod(doc) {
    // console.log(doc);
  }

  get output() {
    const transformModule = compileModule(this.transform);
    const transform = transformModule.__esModule
      ? transformModule.default
      : transformModule;

    let _source = this.code;

    let _mode = this.mode;
    let result = "";
    if (_mode === "javascript") {
      result = transform(
        {
          path: "Live.js",
          source: _source,
        },
        {
          jscodeshift: transformModule.parser
            ? jscodeshift.withParser(transformModule.parser)
            : jscodeshift,
        },
        {}
      );
    } else {
      result = etr.transform(_source, transform).code;
    }
    return result;
  }

  smartOp() {
    return smartOp(this.code, this.dest);
  }

  @action
  toggleSmartUpdate(val) {
    this.allowSmartUpdate = val;
    this.transform = this.getCodeMod();
  }

  @action
  onChangeLang(lang) {
    this.mode = modes[lang];
    this.code = "{{foo}}";
    this.dest = "{{bar}}";
    this.transform = this.getCodeMod();
  }
}
