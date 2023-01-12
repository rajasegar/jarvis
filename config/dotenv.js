/* eslint-env node */

"use strict";

const path = require("path");

module.exports = function (/* env */) {
  return {
    clientAllowedKeys: ["GITHUB_API_TOKEN"],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), ".env"),
  };
};
