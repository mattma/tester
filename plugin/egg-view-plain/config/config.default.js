'use strict';


module.exports = appInfo => {
  const config = {};

  config.view = {
    defaultViewEngine: 'plain',
    defaultExtension: '.html',
    mapping: {
      '.html': 'plain',
    },
  };

  config.plain = {
    cache: {
      max: 100,
    },
  };

  return config;
};
