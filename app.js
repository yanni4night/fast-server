/**
  * Copyright (C) 2017 yanni4night.github.io
  * app.js
  *
  * changelog
  * 2017-07-18[18:44:33]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  * @file
  */
const {app, router, useDefaultMiddlewares} = require('./');

router.get('/', async (ctx, next) => {
    ctx.body = 'hello world';
    await next();
});

useDefaultMiddlewares();

app.listen(5008);