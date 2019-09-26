const express = require('express');
const spdy = require('spdy');
const bodyParser = require('body-parser');
const fs = require('fs');

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

const options = {
  protocols: ['h2'], // use http2
};

try {
  const certsPath = '../config/certs';
  options.key = fs.readFileSync(`${__dirname}/${certsPath}/server.key`);
  options.cert = fs.readFileSync(`${__dirname}/${certsPath}/server.crt`);
} catch (e) {
  log.error(e);
}

process.on('unhandledRejection', err => {
  log.error(`An unhandled rejection has occured: ${err}`);
  process.exit(1);
});

// Initialize the server
(async () => {
  const host = config.app.host;
  const port = config.app.port;

  try {
    await initDb();
  } catch (ex) {
    log.error(ex);
  }

  spdy
    .createServer(options, app)
    .listen(port, host, err => {
      if (err) {
        log.error(err);
        return process.exit(1);
      }

      log.info(`The server is up and running at ${host}:${port}`);
    });
})();
