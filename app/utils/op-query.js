import recastBabel from "recastBabel";
import etr from "ember-template-recast";
import { es6, glimmer as hbsBuilder } from 'ast-node-builder';
const { buildAST } = es6;

function opQueryJS(nodeOp, dest) {

  let str = '';

  let newNode;
  switch(nodeOp) {
    case 'remove':
      str = `.remove();`        
      break;

    case 'replace':
  newNode = buildAST(recastBabel.parse(dest), false);
      str = `.replaceWith(path => {
          return ${newNode};
        })`;
      break;

    case 'insert-before':
  newNode = buildAST(recastBabel.parse(dest));
      str =  `.forEach(path => {
        path.parent.insertBefore(${newNode});
        })`;
      break;

    case 'insert-after':
  newNode = buildAST(recastBabel.parse(dest));
      str =  `.forEach(path => {
        path.parent.insertAfter(${newNode});
        })`;
      break;

  }
  return str;

}

function opQueryGlimmer(nodeOp, dest) {
  let str = '';

  switch(nodeOp) {
    case 'remove':
      str = `return null;`        
      break;

    case 'replace':
      str = `return ${hbsBuilder.buildAST(etr.parse(dest))};`;
      break;

  }
  return str;
}

export default function opQuery(mode, nodeOp, dest) {

  let _query = '';
  switch(mode) {
    case 'javascript':
      _query = opQueryJS(nodeOp, dest);
      break;

    case 'handlebars':
      _query = opQueryGlimmer(nodeOp, dest);
      break;
  }
  return _query;
}
