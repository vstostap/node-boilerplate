const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const config = require('./config');
const log = require('./logging');
const api = require('./api');
const initDb = require('./core/db');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true,
  limit   : '50mb',
}));

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
