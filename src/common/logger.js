const bunyan = require('bunyan');
const mkdirp = require('mkdirp');
const path = require('path');

mkdirp.sync(path.join(__dirname, '../../logs'));

const loggerConfig = {
  name: g.config.appName,
  level: 'info',
  serializers: bunyan.stdSerializers,
  streams: []
};

if (process.env.NODE_ENV != 'test') {
  loggerConfig.streams.push({
    stream: process.stdout,
    level: 'info'
  });
}


module.exports = bunyan.createLogger(loggerConfig);
