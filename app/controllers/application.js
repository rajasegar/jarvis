import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from "@ember/object";
import ENV from "jarvis/config/environment";
import PARSERS from 'jarvis/constants/parsers';

// Sample code to test
const jscode = `foo();`;

const hbscode = `<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{body}}
  </div>
</div>`;


const modes = {
  Javascript: "javascript",
  Handlebars: "handlebars"
};

const OPCODES = [
  'replace',
  'remove',
  'insert-before',
  'insert-after'
];

export default Controller.extend({
customize: service(),
  language: "Javascript",
  nodeOps: OPCODES,
  opCode: 'replace',
  parser: computed('language', function() {
    return Object.keys(PARSERS[this.get("language")])[0];
  }),
  parsers: computed("language", function() {
    return Object.keys(PARSERS[this.get("language")]);
  }),
  parserVersion: computed("parser", function() {
    let _lang = this.get('language');
    let _parsers = PARSERS[_lang];
    return _parsers[this.get("parser")].version;
  }),
  emberVersion: computed(function() {
    return ENV.pkg.devDependencies["ember-source"];
  }),
  nodeBuilderVersion: computed(function() {
    return ENV.pkg.dependencies["ast-node-builder"];
  }),
  nodeFinderVersion: computed(function() {
    return ENV.pkg.dependencies["ast-node-finder"];
  }),
   mode: computed("language", function() {
    return modes[this.get("language")];
  }),
  sampleCode: computed("language", function() {
    if (this.get("language") === "Javascript") {
      return jscode;
    } else {
      return hbscode;
    }
  }),
  destCode: computed('language', function() {
    if (this.get("language") === "Javascript") {
      return 'foo.bar()';
    } else {
      return '{{foo}}';
    }
  }),
  init() {
    this._super(...arguments);
    this.set("languages", Object.keys(PARSERS));
  },
  actions: {
    toggleDarkMode() {
      this.customize.toggleDarkMode();
    }
  }
});
