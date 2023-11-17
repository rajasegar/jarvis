import recastBabel from 'recastBabel'
import { diff } from 'deep-diff'
import { jsx } from 'ast-node-builder'

const preFilterTokens = ['loc', 'tokens', 'raw', 'start', 'end', 'rawValue']

function getDiff(source, dest) {
  const differences = diff(source, dest, {
    prefilter: function (path, key) {
      return ~preFilterTokens.indexOf(key)
    },
  })
  return differences
}

// Build object access path
// buildPath(['a','b','c']) => a.b.c
function buildPath(items) {
  return items
    .map((i) => (typeof i === 'number' ? `[${i}]` : i))
    .join('.')
    .replace('.[', '[')
}

function varDeclUpdate(source, dest) {
  const differences = diff(source, dest, {
    prefilter: function (path, key) {
      return ~preFilterTokens.indexOf(key)
    },
  })
  let updates = differences.map((d) => {
    return `${buildPath(['path', 'value', ...d.path])} = '${d.rhs}';`
  })
  return `.forEach(path => {
  ${updates.join('\n')}
  })`
}

function importDeclUpdate(source, dest) {
  const differences = diff(source, dest, {
    prefilter: function (path, key) {
      return ~preFilterTokens.indexOf(key)
    },
  })

  let updates = differences.map((d) => {
    switch (d.kind) {
      case 'E':
        return `${buildPath(['path', 'value', ...d.path])} = '${d.rhs}';`
      case 'A':
        switch (d.item.kind) {
          case 'N': // DiffNew
            return `${buildPath([
              'path',
              'value',
              ...d.path,
            ])}.push(j.importSpecifier(j.identifier('${
              d.item.rhs.imported.name
            }'), j.identifier('${d.item.rhs.local.name}')));`

          case 'D': // DiffDelete
            return `${buildPath(['path', 'value', ...d.path])}.removeAt(${
              d.index
            }, 1);`

          default:
            break
        }
    }
  })
  return `.forEach(path => {
  ${updates.join('\n')}
  })`
}

function expressionUpdate(source, dest) {
  const differences = getDiff(source, dest)

  let updates = []

  differences.forEach((diff) => {
    let _update = ''
    switch (diff.kind) {
      case 'E': // DiffEdit
        _update = `${buildPath(['path', 'value', ...diff.path])} = '${
          diff.rhs
        }';`
        updates.push(_update)
        break

      case 'A': // DiffArray
        switch (diff.item.kind) {
          case 'N': // DiffNew
            _update = `${buildPath([
              'path',
              'value',
              ...diff.path,
            ])}.push(j.literal(${diff.item.rhs.value}));`
            updates.push(_update)
            break

          case 'D': // DiffNew
            _update = `${buildPath(['path', 'value', ...diff.path])}.removeAt(${
              diff.index
            }, 1);`
            updates.push(_update)
            break

          default:
            break
        }
        break

      default:
        break
    }
  })

  return `.forEach(path => {
  ${updates.join('\n')}
  })`
}
export default function smartOp(input, output) {
  let inputAst = recastBabel.parse(input)
  let nodeType = inputAst.program.body[0].type
  let sourceNode = inputAst.program.body[0]
  let outputAst = recastBabel.parse(output)
  let destNode = outputAst.program.body[0]

  let str = ''
  switch (nodeType) {
    case 'VariableDeclaration':
      str = varDeclUpdate(sourceNode.declarations[0], destNode.declarations[0])
      break

    case 'ExpressionStatement':
      str =
        sourceNode.expression.type === 'JSXElement'
          ? jsxElementUpdate(sourceNode.expression, destNode.expression)
          : expressionUpdate(sourceNode.expression, destNode.expression)
      break

    case 'ImportDeclaration':
      str = importDeclUpdate(sourceNode, destNode)
      break
    default: // eslint-disable-line
      console.log('smartOp => ', nodeType)
      break
  }

  return str
}
function jsxElementUpdate(source, dest) {
  const differences = getDiff(source, dest)

  let updates = []

  differences.forEach((diff) => {
    let _update = ''
    switch (diff.kind) {
      case 'E': // DiffEdit
        _update = `${buildPath(['path', 'value', ...diff.path])} = '${
          diff.rhs
        }';`
        updates.push(_update)
        break

      case 'A': // DiffArray
        switch (diff.item.kind) {
          case 'N': // DiffNew
            if (diff.item.rhs.type === 'JSXAttribute') {
              _update = `${buildPath([
                'path',
                'value',
                ...diff.path,
              ])}.push(${jsx.attribute(diff.item.rhs)} );`
              updates.push(_update)
            } else if (diff.item.rhs.type === 'JSXElement') {
              console.log('JSXElement children')
            } else {
              console.error('Unknown RHS type: ', diff.item.rhs.type)
            }
            break

          case 'D': // DiffNew
            _update = `${buildPath(['path', 'value', ...diff.path])}.removeAt(${
              diff.index
            }, 1);`
            updates.push(_update)
            break

          default:
            console.error(
              'Smart OP::JSX::unknown diff item kind => ',
              diff.item.kind
            )
            break
        }
        break

      default:
        console.error('Smart OP::JSX::unknown diff kind => ', diff.kind)
        break
    }
  })

  return `.forEach(path => {
  ${updates.join('\n')}
  })`
}
