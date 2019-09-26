import express from 'express';
import logger from './middleware/logger';

import usersRoutes from './resources/users/routes';

const router = express.Router();

// use middlewares
router.use(logger);

// users routes
router.get('/users', usersRoutes.get);
// router.post('/users', usersRoutes.post);
// router.put('/users', usersRoutes.put);
// router.delete('/users', usersRoutes.delete);

export default router;
