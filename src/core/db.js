/**
 * Imports
 */
import Promise from 'bluebird';

import config from '../config';
import log from './logging';

/**
 * Import and initialize MongoDb connection
 */
const mongoose = require('mongoose');

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
export default async () => {
  try {
    await connect(connectionString);
    log.info('Connected to MongoDb successfully');
  } catch (ex) {
    log.error(`MongoDb connection error occured ${ex}`);
  }
};
