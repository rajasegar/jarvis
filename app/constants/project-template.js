export const projectReadme = `
# jarvis-codemods

A collection of codemods for generated using JARVIS

## Usage

To run a specific codemod from this project, you would run the following:

\`\`\`
npx jarvis-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add jarvis-codemods
jarvis-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
\`\`\`

## Local Usage
\`\`\`
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
\`\`\`

## Transforms

<!--TRANSFORMS_START-->
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* \`yarn\`

### Running tests

* \`yarn test\`

### Update Documentation

* \`yarn update-docs\`
`;

export const packageJson = `
{
  "name": "jarvis-codemods",
  "version": "0.1.0",
  "scripts": {
    "lint": "eslint --cache .",
    "test": "codemod-cli test",
    "test:coverage": "codemod-cli test --coverage",
    "update-docs": "codemod-cli update-docs",
    "coveralls": "cat ./coverage/lcov.info | node node_modules/.bin/coveralls"
  },
  "bin": "./bin/cli.js",
  "keywords": [
    "codemod-cli"
  ],
  "dependencies": {
    "codemod-cli": "^3.2.0"
  },
  "devDependencies": {
    "coveralls": "^3.1.0",
    "eslint": "^8.31.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^4.2.1",
    "jest": "^26.6.3",
    "prettier": "^2.8.1"
  },
  "engines": {
    "node": "10.* || 12.* || >= 14"
  },
  "jest": {
    "testEnvironment": "node"
  }
}

`;

export const binCli = `
#!/usr/bin/env node
'use strict';

require('codemod-cli').runTransform(
  __dirname,
  process.argv[2] /* transform name */,
  process.argv.slice(3) /* paths or globs */
);

`;

export const transformTest = `
'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'my-codemod',
  path: require.resolve('./index.js'),
  fixtureDir: \`$\{__dirname}/__testfixtures__/\`,
});
`;

export const transformReadme = `
# my-codemod


## Usage

\`\`\`
npx jarvis-codemods my-codemod path/of/files/ or/some**/*glob.js

# or

yarn global add jarvis-codemods
jarvis-codemods my-codemod path/of/files/ or/some**/*glob.js
\`\`\`

## Local Usage
\`\`\`
node ./bin/cli.js my-codemod path/of/files/ or/some**/*glob.js
\`\`\`

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/compat-route/__testfixtures__/basic.input.js)</small>):
\`\`\`js

\`\`\`

**Output** (<small>[basic.output.js](transforms/compat-route/__testfixtures__/basic.output.js)</small>):
\`\`\`js

\`\`\`
<!--FIXTURES_CONTENT_END-->
`;
