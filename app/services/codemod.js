import Service from '@ember/service';
import { computed } from '@ember/object';
import PARSERS from 'jarvis/constants/parsers';
import Octokit from '@octokit/rest';
import ENV from "jarvis/config/environment";

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
  Handlebars: "handlebars"
};

const OPCODES = [
  'replace',
  'remove',
  'insert-before',
  'insert-after'
];

export default Service.extend({
  language: "Javascript",
  nodeOps: OPCODES,
  opCode: 'replace',
  mode: computed("language", function() {
    return modes[this.get("language")];
  }),
  sourceCode: computed("language", function() {
    if (this.get("language") === "Javascript") {
      return jsInput;
    } else {
      return hbscode;
    }
  }),
  destCode: computed('language', function() {
    if (this.get("language") === "Javascript") {
      return jsOutput;
    } else {
      return '{{foo}}';
    }
  }),
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

  readGist(gist_id) {

    let _mode = this.get('mode');
    let sourceFileName = _mode === 'javascript' ? 'source.js' : 'source.hbs';
    let destFileName = _mode === 'javascript' ? 'destination.js' : 'destination.hbs';
  const octokit = new Octokit({ auth: ENV.GITHUB_API_TOKEN });

  octokit.gists
    .get({
      gist_id
    })
    .then(({ data }) => {
      // TODO: handle error if transform.js is not present
      //console.log(data.files);
      let config = JSON.parse(data.files['jarvis.json'].content);
      this.set('parser', config.parser);
      this.set('language', config.lang);
      this.set('sourceCode', data.files[sourceFileName].content || '');
      this.set('destCode', data.files[destFileName].content || '');
      this.set('transform', data.files['transform.js'].content || '');

    })
    .catch(err => {
      console.log('Error: ', err); //eslint-disable-line
    });


  },

  saveGist() {
    const octokit = new Octokit({ auth: ENV.GITHUB_API_TOKEN });
    let _mode = this.get('mode');
    let sourceFileName = _mode === 'javascript' ? 'source.js' : 'source.hbs';
    let destFileName = _mode === 'javascript' ? 'destination.js' : 'destination.hbs';
    let files = {
      'jarvis.json': {
	content: `{
       "lang": "${this.get('language')}",
       "parser": "${this.get('parser')}",
       "version": "1.0",
       "nodeOp": "${this.get('opCode')}"
      }`,
      },
      'transform.js': {
	content: this.get('codemod')
      },
    };

    files[sourceFileName] = {
	content: this.get('sourceCode')
      };

    files[destFileName] = {
	content: this.get('destCode')
      };

    return octokit.gists
      .create({
	files,
        description: 'JARVIS gist v1'
      })
      .then(({ data }) => {
	alert('Gist saved successfully!');
	return data;
      }).catch(err => {
        console.log('Error: ', err); //eslint-disable-line
      });
  },
  init() {
    this._super(...arguments);
    this.set("languages", Object.keys(PARSERS));
  },
});
