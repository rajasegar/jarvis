import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { buildAST } from 'ast-node-builder';
import { dispatchNodes } from 'ast-node-finder';
import { parse } from 'recast';

const _source = 'foo()';
const _dest = 'foo.bar()';
export default Controller.extend({
  theme: 'solarized light',
  source: _source,
  dest: _dest,
  nodeOp: 'remove', 
  showDest: computed('nodeOp', function() {
    return this.get('nodeOp') === 'replace' ? true : false;
  }),
  nodeApi: computed('source', 'opQuery', function() {
    let ast = parse(this.get('source'));
    let transformLogic = dispatchNodes(ast).join();
    const transformTemplate = `
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const body = root.get().value.program.body;
  ${transformLogic}
  ${this.get('opQuery')}
  return root.toSource();
}
`;
    return transformTemplate;
  }),

  opQuery: computed('nodeOp', function() {
    let str = '';
    switch(this.get('nodeOp')) {
      case 'remove':
        str = `.remove();`        
        break;

      case 'replace':

        str = `.replaceWith(path => {
          return ${buildAST(parse(this.get('dest')))};
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
