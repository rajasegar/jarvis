/* globals require */
import Component from "@glimmer/component";

import { es6, glimmer as hbsBuilder } from "ast-node-builder";
import * as recast from "recast";
import { findQuery } from "ast-node-finder";

export default class RightBottomViewComponent extends Component {
  get builderApi() {
    let ast;
    let builderApi = "";
    const { buildAST } = es6;
    if (this.args.mode === "javascript") {
      ast = recast.parse(this.args.target, {
        parser: require("recastBabel"),
      });
      builderApi = buildAST(ast).join("\n");
    } else {
      builderApi = hbsBuilder.buildAST(ast).join("\n");
    }
    return builderApi;
  }

  get ast() {
    const _ast = recast.parse(this.args.target, {
      parser: require("recastBabel"),
    });
    return JSON.stringify(_ast, this.filterAstNodes, 2);
  }

  filterAstNodes(key, value) {
    return ["loc", "tokens"].includes(key) ? undefined : value;
  }

  get finderApi() {
    const ast = recast.parse(this.args.target);
    const firstChild = ast.program.body[0];
    const node = firstChild.expression ? firstChild.expression : firstChild;
    const api = findQuery(node);
    return api;
  }
}
