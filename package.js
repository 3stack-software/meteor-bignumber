Package.describe({
  name: '3stack:bignumber',
  version: "4.0.2",
  summary: "https://github.com/MikeMcl/bignumber.js/",
  git: 'https://github.com/3stack-software/meteor-bignumber',
  documentation: 'README.md'
});

Npm.depends({
  "bignumber.js": "4.0.2"
});

Package.onUse(function (api) {
  api.export('BigNumber');
  api.use('cosmos:browserify@0.4.0');
  api.addFiles([
    'bignumber.browserify.js'
  ]);
});
