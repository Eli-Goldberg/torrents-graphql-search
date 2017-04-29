const imdbService = require('../services/imdbService');

async function search(ctx) {
  const { title } = ctx.query;
  if (!title) throw { statusCode: 400, error: { message: 'No title specified' } };
  const results = await imdbService.search(title);
  ctx.body = results;
}

async function searchById(ctx) {
  const { id } = ctx.params;
  if (!id) throw { statusCode: 400, error: { message: 'No id specified' } };
  const results = await imdbService.searchById(id);
  ctx.body = results;
}

module.exports = {
  search,
  searchById
};
