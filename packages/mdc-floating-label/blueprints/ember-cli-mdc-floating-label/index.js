/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');
const { version } = require ('../../package.json');
const target = require ('ember-cli-mdc-utils').target (version);

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/floating-label', target: '^13.0.0'}
  ],

  addons: [
    {name: 'ember-cli-mdc-rtl', target },
    {name: 'ember-cli-mdc-base', target },
    {name: 'ember-cli-mdc-theme', target },
    {name: 'ember-cli-mdc-typography', target },
    {name: 'ember-cli-mdc-animation', target },
    {name: '@ember/render-modifiers'}
  ]
});
