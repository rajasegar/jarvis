import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { 
  buildAST, 
  callExpression, 
  memberExpression,
  assignmentExpression,
  identifier,
  binaryExpression
} from 'ast-node-builder';

import { dispatchNodes } from 'ast-node-finder';

import { parse } from 'recast';
import { inject as service } from '@ember/service';
import jscodeshift from 'jscodeshift';

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

export default Controller.extend({
  customize: service(),
  theme: computed.reads('customize.theme'),
  source: _source,
  dest: _dest,
  nodeOp: 'remove', 
  showDest: computed('nodeOp', function() {
    let _nodeOp = this.get('nodeOp'); 
    let _show  = showDestOpCodes.includes(_nodeOp);
    return  _show;
  }),
  insertOption: 'before',
  showInsertOptions: computed('nodeOp', function() {
  return this.get('nodeOp') === 'insert' ? true : false;
  }),
  nodeApi: computed('source', 'opQuery', 'insertOption', function() {
    let ast = parse(this.get('source'));
    let transformLogic = dispatchNodes(ast).join();
    let _opQuery = this.get('opQuery');
    const transformTemplate = `
    module.exports = function transformer(file, api) {
   const j = api.jscodeshift;
  const root = j(file.source);
  const body = root.get().value.program.body;
  ${transformLogic}
  ${_opQuery}
  return root.toSource();
};
`;
    return transformTemplate;
  }),

  output: computed('nodeApi', function() {
    const transformModule = compileModule(this.get('nodeApi'));
    const transform = transformModule.__esModule ?
      transformModule.default :
      transformModule;

    let _source = this.get('source');
    const result = transform(
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
    return result;
  }),

  opQuery: computed('nodeOp', 'dest', 'insertOption', function() {
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
