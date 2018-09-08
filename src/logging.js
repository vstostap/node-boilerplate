import Bunyan from 'bunyan';
import config from './config';

export default Bunyan.createLogger({
  name   : config.logs.name,
  streams: config.logs.streams,
});
