import express from 'express';
import log from './logging';

import usersRoutes from './resources/users/routes';

const router = express.Router();

// middleware
router.use((req, res, next) => {
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
});

// users routes
router.get('/users', usersRoutes.get);
// router.post('/users', usersRoutes.post);
// router.put('/users', usersRoutes.put);
// router.delete('/users', usersRoutes.delete);

export default router;
