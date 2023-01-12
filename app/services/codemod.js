import Service from "@ember/service";
import PARSERS from "jarvis/constants/parsers";
// import Octokit from "@octokit/rest";
// import ENV from "jarvis/config/environment";
import { tracked } from "@glimmer/tracking";

// Sample code to test
const jsInput = `foo();`;
const jsOutput = `foo.bar();`;

const hbscode = `<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{body}}
  </div>
</div>`;

const modes = {
  Javascript: "javascript",
  Handlebars: "handlebars",
};

const OPCODES = ["replace", "remove", "insert-before", "insert-after"];

export default class CodemodService extends Service {
  language = "Javascript";
  nodeOps = OPCODES;
  @tracked opCode = "replace";

  get mode() {
    return modes[this.language];
  }

  get sourceCode() {
    if (this.language === "Javascript") {
      return jsInput;
    } else {
      return hbscode;
    }
  }

  get destCode() {
    if (this.language === "Javascript") {
      return jsOutput;
    } else {
      return "{{foo}}";
    }
  }

  get parser() {
    return Object.keys(PARSERS[this.language])[0];
  }

  get parsers() {
    return Object.keys(PARSERS[this.language]);
  }

  get parserVersion() {
    let _lang = this.language;
    let _parsers = PARSERS[_lang];
    return _parsers[this.parser].version;
  }

  /*

  readGist(gist_id) {
    let _mode = this.mode;
    let sourceFileName = _mode === "javascript" ? "source.js" : "source.hbs";
    let destFileName =
      _mode === "javascript" ? "destination.js" : "destination.hbs";
    const octokit = new Octokit({ auth: ENV.GITHUB_API_TOKEN });

    octokit.gists
      .get({
        gist_id,
      })
      .then(({ data }) => {
        // TODO: handle error if transform.js is not present
        //console.log(data.files);
        let config = JSON.parse(data.files["jarvis.json"].content);
        this.parser = config.parser;
        this.language = config.lang;
        this.sourceCode = data.files[sourceFileName].content || "";
        this.destCode = data.files[destFileName].content || "";
        this.transform = data.files["transform.js"].content || "";
      })
      .catch((err) => {
        console.log("Error: ", err); //eslint-disable-line
      });
  }

  saveGist() {
    const octokit = new Octokit({ auth: ENV.GITHUB_API_TOKEN });
    let _mode = this.mode;
    let sourceFileName = _mode === "javascript" ? "source.js" : "source.hbs";
    let destFileName =
      _mode === "javascript" ? "destination.js" : "destination.hbs";
    let files = {
      "jarvis.json": {
        content: `{
       "lang": "${this.language}",
       "parser": "${this.parser}",
       "version": "1.0",
       "nodeOp": "${this.opCode}"
      }`,
      },
      "transform.js": {
        content: this.codemod,
      },
    };

    files[sourceFileName] = {
      content: this.sourceCode,
    };

    files[destFileName] = {
      content: this.destCode,
    };

    return octokit.gists
      .create({
        files,
        description: "JARVIS gist v1",
      })
      .then(({ data }) => {
        alert("Gist saved successfully!");
        return data;
      })
      .catch((err) => {
        console.log("Error: ", err); //eslint-disable-line
      });
  }

	*/

  constructor() {
    super(...arguments);
    this.languages = Object.keys(PARSERS);
  }

  updateOpCode(value) {
    this.opCode = value;
  }
}
