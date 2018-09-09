/**
 * Imports
 */

import Promise from 'bluebird';

import { UsersHandler } from './handlers';

/**
 * Mocks
 */
const data = {};

const Users = {};
Users.get = jest.fn(() => Promise.resolve(data));

/**
 * Test doubles
 */

const method = UsersHandler.get;

/**
 * Tests
 */

describe(' ~> API Users handlers tests', () => {
  // TODO
  test()
});
