'use strict'

/**
 * converts dice object to string in dice notation
 * @param  {object} diceObj  - contains properties count and sides
 * @return {string}          - dice notation e.g. "2d6" is two six-sided dice
 */
function toDiceNotation(diceObj) {
	const {count, sides} = diceObj
	return count + "d" + sides
}

/**
 * performs roll of dice
 * @param  {string} diceNotation - dice notation e.g. "2d6" is two six-sided dice
 * @return {number}              - sum total of specified dice rolls
 */
function roll(diceNotation) {
	const split = diceNotation.split("d")
	const count = Number(split[0])
	const sides = Number(split[1])
	const {randomInt} = require('./math.js')

	let i = 0
	let total = 0
	while(i < count) {
		total += randomInt(1, sides)
		i++
	}

	return total
}

module.exports = {toDiceNotation, roll}
