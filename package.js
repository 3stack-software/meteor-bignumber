Package.describe({
  name: '3stack:bignumber',
  version: "2.0.0",
  summary: "https://github.com/MikeMcl/bignumber.js/",
  git: 'https://github.com/3stack-software/meteor-bignumber',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.export('BigNumber');
  api.addFiles('bignumber.js');
});
