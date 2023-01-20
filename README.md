# jarvis

![Build and Deploy](https://github.com/rajasegar/jarvis/workflows/Build%20and%20Deploy/badge.svg)

[JARVIS](https://rajasegar.github.io/jarvis) is a tool which will profoundly transform the way how you write codemods.

JARVIS is actually a playground for writing codemods, where in you can specify the input and output code, choose the appropriate transformation you want to apply and the codemod is automatically generated for you.

Read the introductory blog post [here](http://hangaroundtheweb.com/posts/jarvis-write-me-a-codemod/)

![screenshot](https://github.com/rajasegar/jarvis/blob/master/public/jarvis-annotated.jpg)

## Features
- Support various AST node operations like replace, remove, insert before and after.
- Write concise codemods using Smart Update
- Support for JavasScript and Handlebars
- Copy the generated codemod to clipboard
- Download the generated codemods as a [codemod-cli](https://github.com/rwjblue/codemod-cli) project and run in local


## Related Tools
- [ast-builder](https://rajasegar.github.io/ast-builder/)
- [ast-finder](https://rajasegar.github.io/ast-finder/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd jarvis`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
