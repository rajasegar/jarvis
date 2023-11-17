import ENV from 'jarvis/config/environment'

export default {
  JavaScript: {
    mode: 'javascript',
    source: 'foo();',
    dest: 'bar();',
    parser: {
      name: 'recast/babel',
      version: '7.20.5',
    },
  },
  Handlebars: {
    mode: 'handlebars',
    source: '{{foo}}',
    dest: '{{bar}}',
    parser: {
      name: 'ember-template-recast',
      version: ENV.pkg.dependencies['ember-template-recast'],
    },
  },
}
