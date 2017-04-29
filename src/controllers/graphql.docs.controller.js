const { default: graphiql } = require('koa-custom-graphiql');


function handler() {
  return graphiql(() => {
    return {
      // String of the base URL of the GraphQL endpoint
      // defaults to '/graphql'
      url: '/graphql',

      // specify URLs for your custom GraphiQL (must be hosted, localhost is fine)
      // defaults to the official GraphiQL
      // js: 'https://cdnjs.cloudflare.com/ajax/libs/graphiql/0.10.1/graphiql.min.css',
      // css: '/my-servers-style.css',

      // String to display in the query panel
      query: `{
  torrents(title: "Captain America") {
    audio
    codec
    container
    episode
    episodeName
    excess
    extended
    garbage
    group
    hardcoded
    language
    proper
    quality
    region
    repack
    resolution
    season
    title
    website
    widescreen
    year
    fileName
    sourceName
    link
    media {
      _year_data
      actors
      awards
      boxoffice
      country
      director
      dvd
      genres
      imdbid
      imdburl
      languages
      metascore
      poster
      plot
      production
      rated
      rating
      released
      response
      runtime
      series
      title
      type
      votes
      website
      writer
      year
    }
  } 
}
`,

      // Object used to populate the "variables" panel
      variables: {
        // title: 'Captain America'
      },

      // Object to display in the result panel
      result: {
        data: {
          // viewer: { id: 'account[ide]' }
        }
      },
    };
  });
}

module.exports = {
  handler
};
