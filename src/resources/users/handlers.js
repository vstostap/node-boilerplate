/**
 * Imports
 */
import { User } from './models';

/**
 * API handler for Users collection endpoint
 */
class UsersHandler {

  /**
    * Process GET request
    * Return the user's collection
  */
  static async get() {
    return { items: await User.find() };
  }
}

/**
 * Exports
 */
export { UsersHandler };
