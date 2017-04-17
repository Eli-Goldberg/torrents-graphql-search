const seekTorrent = require('seek-torrent');

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
  let options = {};

  validate(query, type);

  if (type) options.type = type;

  const results = await seekTorrent.search(query, options);
  ctx.body = results;
}

module.exports = {
  search
};
