# torrents-graphql-search
[![Build Status](https://travis-ci.org/Eli-Goldberg/koa-starter-kit.svg?branch=master)](https://travis-ci.org/Eli-Goldberg/koa-starter-kit)

> This a sample GraphQL project to search for torrents using [seek-torrent](https://github.com/Eli-Goldberg/seek-torrent)

* GraphQL endpoints for torrents / movie data
* Rest endpoints for comparison
* ES7 async/await support (using koa-router 7.x, and koa2).
* Eslint and Mocha
* Watch scripts in package.json
* Middlewares: Error, Logging
* Dockerfile
* Environments
* Shrinkwrapped for Production

## Graph QL
You can use the GraphiQL in-browser docs:
> http://localhost:8080/graphql 


## REST Api 

### Searching For movies

finds all torrents containing this string

> /torrents?q=americans&type=movie

### Specifying types

you can specify a type (movie / series)

> /torrents?q=americans&type=movie

