/**
 * Imports
 */
const Joi = require('joi');

// Data schemas
const { UserSerializer } = require('./serializers');

// API endpoint handlers
const { UsersHandler } = require('./handlers');

// Get users data
const get = async (req, res) => {
  const data = await UsersHandler.get();
  res.send(data);
};

module.exports = {
  get,
};

// TODO: post, put, delete
