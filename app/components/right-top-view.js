/* globals require */
import Component from '@glimmer/component'
import { action } from '@ember/object'

import { es6, glimmer as hbsBuilder } from 'ast-node-builder'
import * as recast from 'recast'
import { findQuery } from 'ast-node-finder'

export default class RightTopViewComponent extends Component {
  @action
  copyCodemod() {
    console.log('Copied!!')
    navigator.clipboard.writeText(this.transform)
  }

  get builderApi() {
    let ast
    let builderApi = ''
    const { buildAST } = es6
    if (this.args.mode === 'javascript') {
      ast = recast.parse(this.args.source, {
        parser: require('recastBabel'),
      })
      builderApi = buildAST(ast).join('\n')
    } else {
      builderApi = hbsBuilder.buildAST(ast).join('\n')
    }
    return builderApi
  }

  get ast() {
    const _ast = recast.parse(this.args.source, {
      parser: require('recastBabel'),
    })
    return JSON.stringify(_ast, this.filterAstNodes, 2)
  }

  filterAstNodes(key, value) {
    return ['loc', 'tokens'].includes(key) ? undefined : value
  }

  get finderApi() {
    const ast = recast.parse(this.args.source)
    const firstChild = ast.program.body[0]
    const node = firstChild.expression ? firstChild.expression : firstChild
    const api = findQuery(node)
    return api
  }
}
