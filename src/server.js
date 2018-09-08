import express from 'express';
import http from 'http';
import config from './config';
import log from './logging';

const app = express();

const init = async () => {
  const host = config.app.host;
  const port = config.app.port;
  await http.createServer(app).listen(port, host);
  log.info(`The server is up and running at ${host}:${port}`);
};

process.on('unhandledRejection', err => {
  log.error(`An unhandled rejection has occured: ${err}`);
  process.exit(1);
});

init();
