'use strict'

const webpack = require('webpack')
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      plugins: [
        require.resolve('ember-auto-import/babel-plugin'),
        ...require('ember-cli-code-coverage').buildBabelPlugin({}),
      ],
    },
    autoImport: {
      alias: {
        recastBabel: 'recast/parsers/babel',
      },
      webpack: {
        node: {
          global: true,
        },
        resolve: {
          fallback: {
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),
            constants: require.resolve('constants-browserify'),
            fs: false,
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
          // new BundleAnalyzerPlugin(),
        ],
      },
    },
  })

  app.import('node_modules/codemirror/lib/codemirror.css')

  return app.toTree()
}
