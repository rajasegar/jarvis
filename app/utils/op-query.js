/* globals require */
import * as recast from 'recast'
import { es6, glimmer as hbsBuilder } from 'ast-node-builder'
const { buildAST } = es6

function opQueryJS(nodeOp, src, dest) {
  let str = ''

  const ast = recast.parse(src, {
    parser: require('recastBabel'),
  })
  const nodeType = ast.program.body[0].type
  const parent = nodeType === 'ExpressionStatement' ? 'path.parentPath' : 'path'
  let newNode
  switch (nodeOp) {
    case 'remove':
      str = `.remove();`
      break

    case 'replace':
      newNode = buildAST(
        recast.parse(dest, {
          parser: require('recastBabel'),
        }),
        false
      )
      str = `.replaceWith(path => {
          return ${newNode};
        })`
      break

    case 'insert-before':
      newNode = buildAST(
        recast.parse(dest, {
          parser: require('recastBabel'),
        })
      )
      str = `.forEach(path => {
        ${parent}.insertBefore(${newNode});
        })`
      break

    case 'insert-after':
      newNode = buildAST(
        recast.parse(dest, {
          parser: require('recastBabel'),
        })
      )
      str = `.forEach(path => {
        ${parent}.insertAfter(${newNode});
        })`
      break

    case 'insert-at-top':
      newNode = buildAST(
        recast.parse(dest, {
          parser: require('recastBabel'),
        })
      )
      str = `body.unshift(${newNode});`
      break
    case 'insert-at-bottom':
      newNode = buildAST(
        recast.parse(dest, {
          parser: require('recastBabel'),
        })
      )
      str = `body.push(${newNode});`
      break
  }
  return str
}

async function opQueryGlimmer(nodeOp, dest) {
  let str = ''
  const { parse } = await import('ember-template-recast')
  switch (nodeOp) {
    case 'remove':
      str = `return null;`
      break

    case 'replace':
      str = `return ${hbsBuilder.buildAST(parse(dest))};`
      break
  }
  return new Promise((resolve) => {
    resolve(str)
  })
}

export default async function opQuery(mode, nodeOp, src, dest) {
  let _query = ''
  switch (mode) {
    case 'javascript':
      _query = opQueryJS(nodeOp, src, dest)
      break

    case 'handlebars':
      _query = await opQueryGlimmer(nodeOp, dest)
      break
  }
  return _query
}
