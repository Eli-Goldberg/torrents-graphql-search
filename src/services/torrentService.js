const seekTorrent = require('seek-torrent');

async function search(query, type) {
  const options = {
    type
  };

  const results = await seekTorrent.search(query, options);
  return results;
}

module.exports = {
  search
};
