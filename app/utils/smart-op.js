import recastBabel from "recastBabel";
import { diff } from 'deep-diff';

function getDiff(source, dest) {
const differences = diff(source, dest, {
    prefilter: function(path, key) {
      return ~['loc', 'tokens', 'raw', 'start', 'end'].indexOf(key);
    }
  });
  return differences;
}

// Build object access path 
// buildPath(['a','b','c']) => a.b.c
function buildPath(items) {
  return items.map(i => typeof i  === 'number' ? `[${i}]` : i)
    .join('.')
    .replace('.[', '[');
}

function varDeclUpdate(source, dest) {
  const differences = diff(source, dest, {
    prefilter: function(path, key) {
      return ~['loc', 'tokens', 'raw', 'start', 'end'].indexOf(key);
    }
  });
  let updates = differences.map(d => {
    return `${buildPath(['path','value', ...d.path])} = '${d.rhs}';`;
  });
  return `.forEach(path => {
  ${updates.join('\n')}
  })`;
}

function expressionUpdate(source, dest) {
  const differences = getDiff(source, dest);

  let updates = [];
  console.log(differences); //eslint-disable-line

  differences.forEach(diff => {
    let _update = '';
    switch(diff.kind) {
      case 'E': // DiffEdit
        _update = `${buildPath(['path', 'value', ...diff.path])} = '${diff.rhs}';`;
        updates.push(_update);
        break;

      case 'A': // DiffArray
        switch(diff.item.kind) {
          case 'N': // DiffNew
          _update = `${buildPath(['path', 'value', ...diff.path])}.push(j.literal(${diff.item.rhs.value}));`;
          updates.push(_update);
            break;

          case 'D': // DiffNew
          _update = `${buildPath(['path', 'value', ...diff.path])}.removeAt(${diff.index}, 1);`;
          updates.push(_update);
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }
  });




  return `.forEach(path => {
  ${updates.join('\n')}
  })`;
}
export default function smartOp(input, output) {

  let inputAst = recastBabel.parse(input);
  let nodeType = inputAst.program.body[0].type;
  let sourceNode = inputAst.program.body[0];
  let outputAst = recastBabel.parse(output);
  let destNode = outputAst.program.body[0];
  


  let str = '';
  switch(nodeType) {
    case 'VariableDeclaration':
      str = varDeclUpdate(sourceNode.declarations[0], destNode.declarations[0]);
      break;

    case 'ExpressionStatement':
      str = expressionUpdate(sourceNode.expression, destNode.expression);
      break;

    default:
      console.log('smartOp => ', nodeType); // eslint-disable-line
      break;
  }

  return str;
}
