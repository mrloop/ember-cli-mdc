/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');
const { version } = require ('../../package.json');
const target = require ('ember-cli-mdc-utils').target (version);

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/animation', target: '^13.0.0'}
  ],

  addons: [
    {name: 'ember-cli-mdc-sass', target, blueprintOptions: {save: true}}
  ]
});
