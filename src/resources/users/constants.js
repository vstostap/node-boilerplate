/**
 * constants example, mappings
 */

const status = {
  UNVERIFIED: 0,
  ACTIVE    : 1,
  BLOCKED   : 2,
};

const statuses = Object.values(status);

module.exports = { status, statuses };
