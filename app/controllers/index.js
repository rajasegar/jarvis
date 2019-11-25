import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { buildAST } from 'ast-node-builder';
import { dispatchNodes } from 'ast-node-finder';
import { parse } from 'recast';
import { inject as service } from '@ember/service';

const _source = 'foo()';
const _dest = 'foo.bar()';
export default Controller.extend({
  customize: service(),
  theme: computed.reads('customize.theme'),
  source: _source,
  dest: _dest,
  nodeOp: 'remove', 
  showDest: computed('nodeOp', function() {
    let _show  = this.get('nodeOp') === 'replace' || this.get('nodeOp') === 'insert';
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
    const transformTemplate = `export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const body = root.get().value.program.body;
  ${transformLogic}
  ${_opQuery}
  return root.toSource();
}
`;
    return transformTemplate;
  }),

  opQuery: computed('nodeOp', 'dest', 'insertOption', function() {
    let str = '';
    let insert = this.get('insertOption') === 'before' ? 'unshift' : 'push';
    switch(this.get('nodeOp')) {
      case 'remove':
        str = `.remove();`        
        break;

      case 'replace':
        str = `.replaceWith(path => {
          return ${buildAST(parse(this.get('dest')))};
        })`;
        break;

      case 'insert':
        str =  `.forEach(path => {
        body.${insert}(${buildAST(parse(this.get('dest')))});
        })`;
        break;


    }
    return str;

  }),


  actions: {
    opChanged(op) {
      this.set('nodeOp', op);
    }
  }
});
