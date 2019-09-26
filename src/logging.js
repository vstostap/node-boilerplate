const Bunyan = require('bunyan');
const config = require('./config');

module.exports = Bunyan.createLogger({
  name   : config.logs.name,
  streams: config.logs.streams,
});
