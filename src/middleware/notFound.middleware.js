async function middleware(ctx) {
  ctx.status = 404;
}

module.exports = middleware;
