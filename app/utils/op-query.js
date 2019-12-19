import recast from 'recast';
import etr from "ember-template-recast";
import { buildAST, core, glimmer as hbsBuilder } from 'ast-node-builder';
const {
  callExpression, 
  memberExpression,
  assignmentExpression,
  identifier,
  binaryExpression
} = core;

function _buildExpression(expression) {
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
function _buildReplaceNode(ast) {
  return ast.program.body.map(node => {
    let str = '';
    switch(node.type) {
      case 'ExpressionStatement':
        str = _buildExpression(node.expression);
        break;

      default:
        console.log('_buildReplaceNode => ', node.type); // eslint-disable-line
        break;

    }
    return str;
  }).join('');

}

function opQueryJS(nodeOp, dest) {

  let str = '';

  switch(nodeOp) {
    case 'remove':
      str = `.remove();`        
      break;

    case 'replace':
      str = `.replaceWith(path => {
          return ${_buildReplaceNode(recast.parse(dest))};
        })`;
      break;

    case 'insert-before':
      str =  `.forEach(path => {
        path.parent.insertBefore(${buildAST(recast.parse(dest))});
        })`;
      break;

    case 'insert-after':
      str =  `.forEach(path => {
        path.parent.insertAfter(${buildAST(recast.parse(dest))});
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
