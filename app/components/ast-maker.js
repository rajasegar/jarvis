import Component from '@ember/component';
import { computed } from '@ember/object';
import { 
  buildAST, 
  core
} from 'ast-node-builder';

const {
  callExpression, 
  memberExpression,
  assignmentExpression,
  identifier,
  binaryExpression
} = core;

import { dispatchNodes } from 'ast-node-finder';

import recast from 'recast';
import etr from "ember-template-recast";
import { inject as service } from '@ember/service';
import jscodeshift from 'jscodeshift';
import recastBabel from "recastBabel";
import recastBabylon from "recastBabylon";
const b = etr.builders;

const _source = 'foo()';
const _dest = 'foo.bar()';
const showDestOpCodes = ['insert-before', 'insert-after', 'replace'];

function compileModule(code, globals = {}) {
  let exports = {};
  let module = { exports };
  let globalNames = Object.keys(globals);
  let keys = ['module', 'exports', ...globalNames];
  let values = [module, exports, ...globalNames.map(key => globals[key])];
  new Function(keys.join(), code).apply(exports, values);
  return module.exports;
}

export default Component.extend({
customize: service(),
  theme: computed.reads('customize.theme'),
  source: _source,
  dest: _dest,
  nodeOp: 'remove', 
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
  showDest: computed('nodeOp', function() {
    let _nodeOp = this.get('nodeOp'); 
    let _show  = showDestOpCodes.includes(_nodeOp);
    return  _show;
  }),
  insertOption: 'before',
  showInsertOptions: computed('nodeOp', function() {
  return this.get('nodeOp') === 'insert' ? true : false;
  }),
  codemod: computed('source', 'opQuery', 'insertOption', function() {
    let parse = this.get('parse');
    let ast = parse(this.get('source'));
    let transformLogic = dispatchNodes(ast).join();
    let _opQuery = this.get('opQuery');

    // TODO: Need to change to es6 export default
    const jsTransform = `
    module.exports = function transformer(file, api) {
   const j = api.jscodeshift;
  const root = j(file.source);
  const body = root.get().value.program.body;
  ${transformLogic}
  ${_opQuery}
  return root.toSource();
};
`;

    const hbsTransform = `
    module.exports = function(env) {
  let b = env.syntax.builders;

  return {
    ElementNode(node) {
      node.tag = node.tag.split('').reverse().join('');
    }
  };
};`;

    const transformTemplate = this.get('mode') === 'javascript' ? jsTransform : hbsTransform;
    let _transform = recast.prettyPrint(parse(transformTemplate), { tabWidth: 2 }).code;
    return  _transform;
  }),

  output: computed('codemod', function() {
    // TODO: Need to transpile the es6 export default
    const transformModule = compileModule(this.get('codemod'));
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

  opQuery: computed('nodeOp', 'dest', 'insertOption', function() {
    let parse = this.get('parse');
    let str = '';
    switch(this.get('nodeOp')) {
      case 'remove':
        str = `.remove();`        
        break;

      case 'replace':
        str = `.replaceWith(path => {
          return ${this._buildReplaceNode(parse(this.get('dest')))};
        })`;
        break;

      case 'insert-before':
        str =  `.forEach(path => {
        path.parent.insertBefore(${buildAST(parse(this.get('dest')))});
        })`;
        break;

      case 'insert-after':
        str =  `.forEach(path => {
        path.parent.insertAfter(${buildAST(parse(this.get('dest')))});
        })`;
        break;

    }
    return str;

  }),


  actions: {
    opChanged(op) {
      this.set('nodeOp', op);
    },

    setInsertOption(opt) {
      this.set('insertOption', opt);
    }
  },

  _buildReplaceNode(ast) {
    return ast.program.body.map(node => {
    let str = '';
      switch(node.type) {
        case 'ExpressionStatement':
          str = this._buildExpression(node.expression);
          break;

        default:
          console.log('_buildReplaceNode => ', node.type); // eslint-disable-line
          break;

      }
      return str;
    }).join('');

  },

  _buildExpression(expression) {
    let str = '';
    let { extra } = expression;
    switch(expression.type) {
      case 'MemberExpression':
        str = memberExpression(expression);
        break;

      case 'CallExpression':
        if(extra && extra.parenthesized) {
          str = `
       j.parenthesizedExpression(
       ${callExpression(expression)}
       )`;
        } else {
          str = callExpression(expression);
        }
        break;

      case 'AssignmentExpression':
        str = assignmentExpression(expression);      
        break;

      case 'Identifier':
        str = identifier(expression);
        break;

      case 'BinaryExpression':
        str = binaryExpression(expression);
        break;

      default:
        console.log('_buildExpression => ', expression.type); // eslint-disable-line
        break;
    }

    return str;
  }
});
