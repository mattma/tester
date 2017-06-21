'use strict';

module.exports = app => {
  app.get('/en', 'en');
  app.get('/zh', 'cn');
};
