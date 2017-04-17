const env = process.env.NODE_ENV || 'development';
const envConfig = require('./' + env);
const _ = require('lodash');

const baseConfig = {
  appName: 'Torrents GraphQL Search',
  port: 8080
};

const envVars = {
  port: process.env.PORT
};

const config = _.merge({}, baseConfig, envConfig, envVars);

module.exports = config;
