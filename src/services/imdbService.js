const imdb = require('imdb-api');
const logger = require('../common/logger');

async function search(title, year) {
  try {
    const options = {
      title,
      year
    };
    const results = await imdb.getReq(options);
    return results;
  } catch (err) {
    logger.error(err);
    return null;
  }
}

async function searchByTorrent(torrent) {
  try {
    const options = {
      name: torrent.title,
      year: torrent.year
    };
    const results = await imdb.getReq(options);
    return results;
  } catch (err) {
    logger.error(err);
    return null;
  }
}

async function searchById(imdbId) {
  const results = await imdb.getById(imdbId);
  return results;
}

module.exports = {
  search,
  searchByTorrent,
  searchById
};
