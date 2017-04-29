const torrentService = require('../services/torrentService');

const TYPES = ['movie', 'series'];

function validate(query, type) {
  if (type) {
    if (!TYPES.includes(type)) {
      throw {
        statusCode: 400,
        error: {
          message: `Bad type specified. Possible types: ${TYPES.join(' / ')}`
        }
      };
    }
  }

  if (!query) throw { statusCode: 400, error: { message: 'No query specified. e.g ?q=somemovie' } };
}

async function search(ctx) {
  const { q: query, type } = ctx.query;

  validate(query, type);

  const results = await torrentService.search(query, type);
  ctx.body = results;
}

module.exports = {
  search
};
