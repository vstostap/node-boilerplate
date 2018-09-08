// Base configuration
consrt config = require('./development');

// Override configurations for Production environment
config.app.prefix = '/api';

config.logs.folder = '/var/log';
config.logs.streams = [
    {
        level: 'info',
        path: config.logs.folder + '/node-boilerplate.log'
    },
    {
        level: 'error',
        stream: process.stderr,
        path: config.logs.folder + '/node-boilerplate.error.log'
    }
];

// Export
module.exports = config;
