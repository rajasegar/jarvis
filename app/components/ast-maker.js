import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { dispatchNodes, glimmer } from 'ast-node-finder';
import recast from 'recast';
import recastBabel from "recastBabel";
import recastBabylon from "recastBabylon";
import etr from "ember-template-recast";
import jscodeshift from 'jscodeshift';
import compileModule from 'jarvis/utils/compile-module';
import opQuery from 'jarvis/utils/op-query';

export default Component.extend({
customize: service(),
codemod: service(),
  theme: computed.reads('customize.theme'),
  //nodeOp: 'replace', 

  showInsertOptions: computed('mode', function() {
    return this.get('mode') === 'javascript';
  }),
  parse: computed("parser", function() {

    let parse = recast.parse;
    let _parser = this.get("parser");
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
  }),
  
  insertOption: 'before',
  
  transform: computed( 'gistTransform','dest', 'parser', 'mode',  function() {
    if(this.get('gistTransform')) {
      return this.get('gistTransform');
    }
      else {
    return this._buildCodemod();
      }
  }),

  output: computed('transform', 'mode', 'parser', function() {
    // TODO: Need to transpile the es6 export default
    const transformModule = compileModule(this.get('transform'));
    const transform = transformModule.__esModule ?
      transformModule.default :
      transformModule;

    let _source = this.get('code');

    let _mode = this.get('mode');
    let result = '';
    if(_mode === 'javascript') {
    result = transform(
      {
        path: 'Live.js',
        source: _source,
      },
      {
        jscodeshift: transformModule.parser ?
        jscodeshift.withParser(transformModule.parser) :
        jscodeshift,
      },
      {},
    );
    } else {
      result = etr.transform(_source, transform).code;
    }
    return result;
  }),

  opQuery: computed('nodeOp', 'dest', 'mode', function() {
    let _mode = this.get('mode');
    let _nodeOp = this.get('nodeOp');
    let _dest = this.get('dest');
    return opQuery(_mode, _nodeOp, _dest);
  }),

  _buildCodemod() {
    let parse = this.get('parse');
    let ast = parse(this.get('code'));
    let _mode = this.get('mode');
    let _transformTemplate = '';
    let transformLogic = '';
    if(_mode === 'javascript') {
      transformLogic = dispatchNodes(ast).join();
      let _opQuery = this.get('opQuery');

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

      let _opQuery = this.get('opQuery');
      transformLogic = glimmer.dispatchNodes(ast, _opQuery).join();

      _transformTemplate = `
          module.exports = function(env) {
        let b = env.syntax.builders;

        ${transformLogic}
        
      };`;
    }

     let _codemod = recast.prettyPrint(recast.parse(_transformTemplate), { tabWidth: 2 }).code;
    this.codemod.set('codemod', _codemod);
    return _codemod;

  },

  didUpdateAttrs() {
    this._super(...arguments);
    if(this.get('gistTransform')) {
    this.set('transform', this.get('gistTransform'));
    } else {
    this.set('transform', this._buildCodemod());
    }
  },

  init() {
    this._super(...arguments);
  },

  
});