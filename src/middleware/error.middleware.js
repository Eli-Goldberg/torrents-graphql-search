async function middleware(ctx, next) {
  try {
    ctx.status = 200;
    return await next();
  }
  catch (err) {
    if (err.error) ctx.body = err.error;
    else ctx.body = err.message ? err.message : 'Unknown error';

    ctx.status = err.statusCode || 500;
  }
}

module.exports = middleware;
