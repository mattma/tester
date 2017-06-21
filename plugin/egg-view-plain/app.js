'use strict';

module.exports = app => {
  app.view.use('plain', require('./lib/view')(app));
};