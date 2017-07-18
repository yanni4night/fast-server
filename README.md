# fast-server

Start a http server fast based on koa2


## usage

```js
const {app, router, useDefaultMiddlewares} = require('./');

router.get('/', async (ctx, next) => {
    ctx.body = 'hello world';
    await next();
});

useDefaultMiddlewares();

app.listen(5008);
```

## license

&copy; 2017 MIT