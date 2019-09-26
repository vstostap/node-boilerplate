/**
 * Imports
 */
const Joi = require('joi');

/**
 * Class containing schema details and serializer methods for User objects
 */
class UserSerializer {

  static schema() {
    return () => ({
      id       : Joi.string(),
      name     : Joi.string(),
      email    : Joi.string().email(),
      status   : Joi.string(),
      createdAt: Joi.date(),
    });
  }

  constructor(user) {
    this.user = Object.assign({}, user);
  }

  async serialize() {
    return this.user;
  }
}

/**
 * Exports
 */
module.exports = { UserSerializer };
