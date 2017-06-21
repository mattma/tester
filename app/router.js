'use strict';

module.exports = app => {
  app.get('/zh-cn*', 'cn');
  app.get('/en*', 'en');
  app.redirect('/', '/en');
};
