'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};
  const dist = path.join(appInfo.baseDir, 'app/dist');

  // should change to your own
  config.keys = appInfo.name + '_dashboard_server';

  config.static = {
    prefix: '',
    dir: dist,  // default to `{app_root}/app/public`
  };

  config.view = {
    root: dist,
  };


  return config;
};
