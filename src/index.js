/**
 *  Hook babel into all node requires.
 */
if (!global._babelPolyfill) {
  require('babel-polyfill');
}

/**
 * Start application server.
 */
require('./server');
