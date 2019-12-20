import Service from '@ember/service';
import { computed } from '@ember/object';
import PARSERS from 'jarvis/constants/parsers';
import Octokit from '@octokit/rest';

const api_key = 'e90b7d3ce06fb766a8290aaaba369a1ada63bc6c';
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

export default Service.extend({
  language: "Javascript",
  nodeOps: OPCODES,
  opCode: 'replace',
  mode: computed("language", function() {
    return modes[this.get("language")];
  }),
  sourceCode: computed("language", function() {
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
  const octokit = new Octokit({ auth: api_key });

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
      console.log('Error: ', err);
    });


  },

  saveGist() {
    const octokit = new Octokit({ auth: api_key });
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
	console.log('Error: ', err);
      });
  },
  init() {
    this._super(...arguments);
    this.set("languages", Object.keys(PARSERS));
  },
});
