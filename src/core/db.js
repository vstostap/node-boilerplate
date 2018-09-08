/**
 * Imports
 */
import config from '../config';
import log from './logging';

/**
 * Import and initialize MongoDb connection
 */
export const mongoose = require('mongoose');

const connectionString = `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`;

mongoose.connect(connectionString, err => {
  if (err) return log.info(`MongoDb connection error occured ${err}`);
  log.info('Connected to MongoDb successfully');
});

mongoose.connection.on('error', err => {
  log.error(`MongoDb connection error occured ${err}`);
});

mongoose.connection.on('disconnected', () => {
  const now = new Date();
  log.info(`MongoDb disconnected at ${now}`);
});
