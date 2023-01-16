/* globals require */
import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

import ENV from "jarvis/config/environment";
import { babel } from "ast-node-finder";
import * as recast from "recast";
import jscodeshift from "jscodeshift";
import compileModule from "jarvis/utils/compile-module";
import opQuery from "jarvis/utils/op-query";
import smartOp from "jarvis/utils/smart-op";
import { fileSave } from "browser-nativefs";
import { es6, glimmer as hbsBuilder } from "ast-node-builder";

import {
  projectReadme,
  binCli,
  transformTest,
  packageJson,
  transformReadme,
} from "jarvis/constants/project-template";

export default class AstMaker extends Component {
  // source and target for codemirror editors
  @tracked editorSource = "foo()";
  @tracked editorTarget = "bar()";

  opCodes = ["replace", "remove", "insert-before", "insert-after"];
  @tracked mode = "javascript";
  allowSmartUpdate = false;
  @tracked transform = "";
  @tracked opCode = "replace";
  @tracked language = "JavaScript";
  @tracked output = "bar()";

  // source and target for codemod computation
  @tracked source = "foo()";
  @tracked target = "bar()";
  @tracked builderApi = "";

  @tracked parser = this.modes["JavaScript"].parser;

  modes = {
    JavaScript: {
      mode: "javascript",
      source: "foo();",
      dest: "bar();",
      parser: {
        name: "recast/babel",
        version: "7.20.5",
      },
    },
    Handlebars: {
      mode: "handlebars",
      source: "{{foo}}",
      dest: "{{bar}}",
      parser: {
        name: "ember-template-recast",
        version: ENV.pkg.dependencies["ember-template-recast"],
      },
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
  async onChangeNodeOp(val) {
    this.opCode = val;
    this.transform = await this.getCodeMod();
    this.output = await this.getOutput();
  }

  constructor() {
    super(...arguments);
    (async () => {
      this.transform = await this.getCodeMod();
      this.output = await this.getOutput(this.code);
      this.builderApi = this.getBuilderApi();
    })();
  }

  async getCodeMod() {
    let ast;
    let _transformTemplate = "";
    let transformLogic = "";
    let _mode = this.mode;
    if (_mode === "javascript") {
      ast = recast.parse(this.source, {
        parser: require("recastBabel"),
      });

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
          : await opQuery(this.mode, this.opCode, this.target);

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
      const { parse } = await import("ember-template-recast");
      const { glimmer } = await import("ast-node-finder");

      ast = parse(this.source);
      let _opQuery = await opQuery(this.mode, this.opCode, this.target);
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

    return new Promise((resolve) => {
      resolve(_codemod);
    });
  }

  @action
  async onUpdateSource(doc) {
    this.source = doc;
    this.transform = await this.getCodeMod();
    this.output = await this.getOutput(doc);
  }

  @action
  async onUpdateDest(doc) {
    this.target = doc;
    this.transform = await this.getCodeMod();
    this.output = await this.getOutput(this.code);
  }

  @action
  onUpdateCodemod() {}

  async getOutput() {
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
      const { transform: etrTransform } = await import("ember-template-recast");
      result = etrTransform(_source, transform).code;
    }
    return new Promise((resolve) => {
      resolve(result);
    });
  }

  smartOp() {
    return smartOp(this.source, this.target);
  }

  get languages() {
    return Object.keys(this.modes);
  }

  @action
  async toggleSmartUpdate(val) {
    this.allowSmartUpdate = val;
    this.transform = await this.getCodeMod();
    this.output = await this.getOutput(this.code);
  }

  @action
  async onChangeLang(lang) {
    this.language = lang;

    const { source, dest, parser, mode } = this.modes[lang];
    this.mode = mode;

    this.source = source;
    this.target = dest;

    this.editorSource = source;
    this.editorTarget = dest;

    this.parser = parser;

    this.transform = await this.getCodeMod();
    this.output = await this.getOutput();
  }

  @action
  copyCodemod() {
    console.log("Copied!!");
    navigator.clipboard.writeText(this.transform);
  }

  @action
  downloadProject() {
    console.log("download");
    import("jszip").then(({ default: JSZip }) => {
      const zip = new JSZip();

      zip.file("README.md", projectReadme);
      zip.file("transforms/my-codemod/index.js", this.transform);
      zip.file(
        "transforms/my-codemod/__testfixtures__/basic.input.js",
        this.source
      );
      zip.file(
        "transforms/my-codemod/__testfixtures__/basic.output.js",
        this.target
      );
      zip.file("transforms/my-codemod/test.js", transformTest);
      zip.file("transforms/my-codemod/README.md", transformReadme);
      zip.file("bin/cli.js", binCli);
      zip.file("package.json", packageJson);

      zip.generateAsync({ type: "blob" }).then(
        async function (blob) {
          await fileSave(
            new Blob([blob], { type: "application/zip" }),
            {
              fileName: "jarvis-codemods.zip",
              suggestedName: "jarvis-codemods.zip",
              description: "Codemod-cli Project zip file",
            },
            window.handle
          );
        },
        function (err) {
          console.error(err);
        }
      );
    });
  }

  @action
  showSrcBuilderAPI(val) {
    console.log(val);
  }

  getBuilderApi() {
    let ast;
    const { buildAST } = es6;
    if (this.mode === "javascript") {
      ast = recast.parse(this.source, {
        parser: require("recastBabel"),
      });
    }
    const builderApi =
      this.mode === "javascript" ? buildAST(ast) : hbsBuilder.buildAST(ast);
    return builderApi.join("\n");
  }
}
