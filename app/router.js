'use strict';

const osLocale = require('os-locale');
const locale = osLocale.sync();
// China zh_CN
const defaultLocale = locale === 'en_US' ? '/zh-cn' : '/en';

module.exports = app => {
  app.get('/zh-cn*', 'cn');
  app.get('/en*', 'en');

  // redirect based on User's system locale
  app.redirect('/', defaultLocale);
  // Catch all clause. Trigger when there is no match
  app.get('(.*)', defaultLocale);
};
