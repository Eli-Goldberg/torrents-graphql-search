require('./globals');
const routes = require('./routes');
const bodyParser = require('koa-bodyparser');
const errorMiddleware = require('./middleware/error.middleware');
const loggerMiddleware = require('./middleware/logger.middleware');
const notFoundMiddleware = require('./middleware/notFound.middleware');
const Koa = require('koa');
const app = new Koa();
require('koa-qs')(app);


app.use(errorMiddleware);
app.use(loggerMiddleware);
app.use(bodyParser());
app.use(routes);
app.use(notFoundMiddleware);


module.exports = app;
