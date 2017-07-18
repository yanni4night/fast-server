/**
  * Copyright (C) 2017 yanni4night.github.io
  * index.js
  *
  * changelog
  * 2017-07-18[18:49:09]:revised
  *
  * @author yanni4night@gmail.com
  * @version 1.0.0
  * @since 1.0.0
  * @file
  */
const Koa = require('koa');
const app = new Koa();
const body = require('koa-better-body');
const compress = require('koa-compress');
const toobusy = require('koa-toobusy');
const logger = require('koa-logger');
const handleError = require('koa-handle-error');
const router = require('koa-better-router')().loadMethods();

exports.router = router;

exports.app = app;

exports.useDefaultMiddlewares = function (options = {}) {
    // https://github.com/axross/koa-handle-error
    app.use(handleError(options.handleError || function () {}));
    // https://github.com/koajs/logger
    app.use(logger(options.logger || {}));
    // https://github.com/nswbmw/koa-toobusy
    app.use(toobusy(options.toobusy || {}));
    // https://github.com/tunnckoCore/koa-better-body
    app.use(body(options.body || {}));
    // https://github.com/tunnckoCore/koa-better-router
    app.use(router.middleware());
    // https://github.com/koajs/compress
    app.use(compress(options.compress || {}));
};