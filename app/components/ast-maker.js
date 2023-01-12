import Component from "@glimmer/component";
import { service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

import { babel, glimmer } from "ast-node-finder";
import * as recast from "recast";
import {
  parse as etrParse,
  transform as etrTransform,
} from "ember-template-recast";
import jscodeshift from "jscodeshift";
import compileModule from "jarvis/utils/compile-module";
import opQuery from "jarvis/utils/op-query";
import smartOp from "jarvis/utils/smart-op";

export default class AstMaker extends Component {
  @service customize;
  @service codemod;

  // source and target for codemirror editors
  @tracked editorSource = "foo()";
  @tracked editorTarget = "bar()";

  @tracked mode = "javascript";
  allowSmartUpdate = false;
  @tracked transform = "";
  @tracked opCode = "replace";
  @tracked language = "JavaScript";
  @tracked output = "bar()";

  // source and target for codemod computation
  @tracked source = "foo()";
  @tracked target = "bar()";

  modes = {
    JavaScript: {
      mode: "javascript",
      source: "foo();",
      dest: "bar();",
    },
    Handlebars: {
      mode: "handlebars",
      source: "{{foo}}",
      dest: "{{bar}}",
    },
  };

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
    this.output = this.getOutput();
  }

  constructor() {
    super(...arguments);
    this.transform = this.getCodeMod();
    this.output = this.getOutput(this.code);
  }

  opQuery(mode, opCode, dest) {
    return opQuery(mode, opCode, dest);
  }

  getCodeMod() {
    let ast = recast.parse(this.source, {
      parser: require("recastBabel"),
    });
    let _transformTemplate = "";
    let transformLogic = "";
    let _mode = this.mode;
    if (_mode === "javascript") {
      let _inputNodeType = ast.program.body[0].type;

      let outAst = recast.parse(this.target, {
        parser: require("recastBabel"),
      });
      let _outputNodeType = outAst.program.body[0].type;

      const isSmartUpdate =
        _inputNodeType === _outputNodeType && this.opCode === "replace";

      const { dispatchNodes } = babel;
      transformLogic = dispatchNodes(ast).join();
      let _opQuery =
        isSmartUpdate && this.allowSmartUpdate
          ? this.smartOp()
          : this.opQuery(this.mode, this.opCode, this.target);

      // TODO: Need to change to es6 export default
      _transformTemplate = `
          module.exports = function transformer(file, api) {
         const j = api.jscodeshift;
        const root = j(file.source);
        const body = root.get().value.program.body;
        ${transformLogic}
        ${_opQuery}
        return root.toSource();
      };
      module.exports.parser = 'babel'`;
    } else {
      ast = etrParse(this.source);
      let _opQuery = this.opQuery(this.mode, this.opCode, this.target);
      transformLogic = glimmer.dispatchNodes(ast, _opQuery).join();

      _transformTemplate = `
          module.exports = function(env) {
        let b = env.syntax.builders;

        ${transformLogic}
        
      };`;
    }

    let _codemod = recast.prettyPrint(recast.parse(_transformTemplate), {
      parser: require("recastBabel"),
      tabWidth: 2,
    }).code;

    return _codemod;
  }

  @action
  onUpdateSource(doc) {
    this.source = doc;
    this.transform = this.getCodeMod();
    this.output = this.getOutput(doc);
  }

  @action
  onUpdateDest(doc) {
    this.target = doc;
    this.transform = this.getCodeMod();
    this.output = this.getOutput(this.code);
  }
  @action
  onUpdateCodemod(doc) {}

  getOutput() {
    const transformModule = compileModule(this.transform);
    const transform = transformModule.__esModule
      ? transformModule.default
      : transformModule;

    let _source = this.source;

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
      result = etrTransform(_source, transform).code;
    }
    return result;
  }

  smartOp() {
    return smartOp(this.source, this.target);
  }

  get languages() {
    return Object.keys(this.modes);
  }

  @action
  toggleSmartUpdate(val) {
    this.allowSmartUpdate = val;
    this.transform = this.getCodeMod();
    this.output = this.getOutput(this.code);
  }

  @action
  onChangeLang(lang) {
    this.language = lang;
    this.mode = this.modes[lang].mode;

    this.source = this.modes[lang].source;
    this.target = this.modes[lang].dest;

    this.editorSource = this.modes[lang].source;
    this.editorTarget = this.modes[lang].dest;

    this.transform = this.getCodeMod();
    this.output = this.getOutput();
  }
}
