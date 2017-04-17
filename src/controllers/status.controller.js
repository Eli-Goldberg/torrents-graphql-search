async function getStatus(ctx) {
  ctx.body = { status: 'OK' };
}

module.exports = {
  getStatus
};
