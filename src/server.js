import express from 'express';
import http from 'http';
import config from './config';
import log from './logging';
import api from './api';
import initDb from './core/db';

const app = express();
app.use('/api', api);

const init = async () => {
  const host = config.app.host;
  const port = config.app.port;

  try {
    await initDb();
    await http.createServer(app).listen(port, host);
    log.info(`The server is up and running at ${host}:${port}`);
  } catch (ex) {
    log.error(ex);
  }
};

process.on('unhandledRejection', err => {
  log.error(`An unhandled rejection has occured: ${err}`);
  process.exit(1);
});

init();
