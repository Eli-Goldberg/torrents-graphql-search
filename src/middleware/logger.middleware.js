const uuid = require('uuid');

async function middleware(ctx, next) {
  ctx.requestId = uuid.v4();

  logInfo(ctx, 'Handling request');
  try {
    await next();
    logInfo(ctx, 'Request successful');

  }
  catch (err) {
    logError(ctx, 'Request failed', err);
    throw err;
  }
}

function logInfo(ctx, msg) {
  const logData = {
    requestId: ctx.requestId,
    statusCode: ctx.status,
    method: ctx.req.method,
    url: ctx.originalUrl
  };
  g.logger.info(logData, msg);
}

function logError(ctx, msg, err) {
  const logData = {
    requestId: ctx.requestId,
    statusCode: ctx.status,
    method: ctx.req.method,
    url: ctx.originalUrl,
    error: err
  };

  g.logger.error(logData, msg);
}

module.exports = middleware;
