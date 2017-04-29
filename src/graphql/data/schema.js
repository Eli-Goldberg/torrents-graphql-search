const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const schema = `
type Torrent {
  audio: String
  codec: String
  container: String
  episode: Int
  episodeName: String
  excess: String
  extended: String
  garbage: String
  group: String
  hardcoded: String
  language: String
  proper: String
  quality: String
  region: String
  repack: String
  resolution: String
  season: Int
  title: String
  website: String
  widescreen: String
  year: Int
  fileName: String!
  sourceName: String
  link: String!
  media: Media
}

type Media {
  _year_data: String
  actors: String
  awards: String
  boxoffice: String
  country: String
  director: String
  dvd: String
  genres: String
  imdbid: String!
  imdburl: String
  languages: String
  metascore: String
  poster: String
  plot: String
  production: String
  rated: String
  rating: String
  ratings: [Rating]
  released: String
  response: String
  runtime: String
  series: Boolean
  title: String
  type: String
  torrents: [Torrent]
  votes: String
  website: String
  writer: String
  year: Int
}

type Rating {
  Source: String
  Value: String
}

# the schema allows the following query:
type Query {
  torrents(title: String!, type: String): [Torrent]
  media(title: String!, year: Int): Media
}

`;

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
