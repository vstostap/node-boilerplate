const path = require('path');

// Export
module.exports = {
  app: {
        host: '0.0.0.0',
        port: 3000
  },
  database: {
        host: 'localhost',
        port: 27017,
        name: 'node-boilerplate'
  },
  logs: {
        name: 'node-boilerplate',
        folder: path.join(__dirname, '../logs/'),
        streams: [
            {
                level: 'debug',
                stream: process.stdout // log INFO and above to stdout
            }
        ]
  }
}
