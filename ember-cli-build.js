"use strict";

const webpack = require("webpack");

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      alias: {
        recastBabel: "recast/parsers/babel",
        recastBabylon: "recast/parsers/babylon",
        recastFlow: "recast/parsers/flow",
        recastTypeScript: "recast/parsers/typescript",
      },
      webpack: {
        node: {
          global: true,
        },
        resolve: {
          fallback: {
            path: require.resolve("path-browserify"),
            os: require.resolve("os-browserify/browser"),
            constants: require.resolve("constants-browserify"),
            fs: false,
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: "process/browser",
          }),
        ],
      },
    },
  });

  app.import("node_modules/codemirror/lib/codemirror.css");

  return app.toTree();
};
