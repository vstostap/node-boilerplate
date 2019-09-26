/**
 * Imports
 */
const Promise = require('bluebird');

const config = require('../config');
const log = require('./logging');

/**
 * Import and initialize MongoDb connection
 */
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const connectionString = `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`;

const connect = Promise.promisify(mongoose.connect);

mongoose.connection.on('error', err => {
  log.error(`MongoDb connection error occured ${err}`);
});

mongoose.connection.on('disconnected', () => {
  const now = new Date();
  log.info(`MongoDb disconnected at ${now}`);
});

// init
module.exports = async () => {
  try {
    await connect(connectionString);
    log.info('Connected to MongoDb successfully');
  } catch (ex) {
    log.error(`MongoDb connection error occured ${ex}`);
  }
};
