/**
 * Imports
 */
import Joi from 'joi';

// Data schemas
import { UserSerializer } from './serializers';

// API endpoint handlers
import { UsersHandler } from './handlers';

// Get users data
const get = async (req, res) => {
  const data = await UsersHandler.get();
  res.send(data);
};

export default {
  get,
};

// TODO: post, put, delete
