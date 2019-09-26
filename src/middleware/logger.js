import log from '../logging';

// log middleware
const func = (req, res, next) => {
  const info = {
    time   : new Date(),
    params : req.params,
    url    : req.url,
    method : req.method,
    headers: req.headers,
  };
  // log all the requests to the API
  log.info(`${JSON.stringify(info)}`);
  next();
};

/**
 * Exports
 */

export default func;
