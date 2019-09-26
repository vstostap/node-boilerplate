const express = require('express');
const logger = require('./middleware/logger');

const usersRoutes = require('./resources/users/routes');

const router = express.Router();

// use middlewares
router.use(logger);

// users routes
router.get('/users', usersRoutes.get);
// router.post('/users', usersRoutes.post);
// router.put('/users', usersRoutes.put);
// router.delete('/users', usersRoutes.delete);

module.exports = router;
