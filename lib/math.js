'use strict'

/**
 * Utility function for getting random int between two numbers, inclusive
 * @param  {number} lower - lower bound
 * @param  {number} upper - upper bound
 * @return {number}       - random int between those numbers, inclusive
 */
function randomInt(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

module.exports = {randomInt}
