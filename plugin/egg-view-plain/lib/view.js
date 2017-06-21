'use strict';

const fs = require('mz/fs');
const LRU = require('lru-cache');
let tplCache;

module.exports = app => {
  if (this.config.cache !== false) {
    tplCache = LRU(app.config.plain.cache);
  }

  return class PlainView {
    constructor(ctx) {
      this.ctx = ctx;
      this.app = ctx.app;
      this.config = ctx.app.config.plain;
    }

    * render(fileName) {
      let html;
      if (tplCache) {
        html = tplCache.get(fileName);
        if (!html) {
          html = yield fs.readFile(fileName, 'utf-8');
          tplCache.set(fileName, html);
        }
      } else {
        html = yield fs.readFile(fileName, 'utf-8');
      }
      return html;
    }

    renderString(tpl) {
      return tpl;
    }
  };
}