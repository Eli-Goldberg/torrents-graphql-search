const _ = require('lodash');
// const { pubsub } = require('./subscriptions');
const torrentService = require('../../services/torrentService');
const imdbService = require('../../services/imdbService');

const resolveFunctions = {
  Query: {
    async media(title, year) {
      return imdbService.search(title, year);
    },
    async torrents(_, query, type) {
      return torrentService.search(query.title, type);
    },
  },
  Torrent: {
    async media(torrent) {
      return await imdbService.searchByTorrent(torrent);
    },
  },
  Media: {
    async torrents(media) {
      let type;
      if (!_.isUndefined(media.series)) type = media.seris ? 'series' : 'movie';
      return await torrentService.search(media.title, type);
    }
  },
};

module.exports = resolveFunctions;
