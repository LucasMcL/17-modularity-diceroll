'use strict'

/**
 * Simplistic processing of arguments passed in by user
 * Defaults to single roll of 6-sided die of no arguments passed in
 * Ignores any arguments after first two
 *
 * @param  {array} args - arguments passed in through the CLI
 * @return {object}     - object containing count and sides properties
 */
function parseArgs(args) {
	const count = args[0] || 1
	const sides = args[1] || 6
	return {count, sides}
}

module.exports = parseArgs
