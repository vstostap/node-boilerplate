/**
 * Imports
 */
import config from '../config';
import mongoose from 'mongoose';
import log from './logging';

const connectionString = `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`;

/**
 * Initialize MongoDb connection
 */
mongoose.connect(connectionString, { useNewUrlParser: true }, err => {
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

export default mongoose;
