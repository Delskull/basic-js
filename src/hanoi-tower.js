const { NotImplementedError } = require('../extensions/index.js');
const {min} = require("mocha/lib/reporters");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const res = {}
 let minStep = (2 ** disksNumber) - 1;
  res['turns'] = minStep
  let seconds = turnsSpeed / 3600
 let minTurns = Math.floor(minStep / seconds)
  res['seconds'] = minTurns
  return res
}

module.exports = {
  calculateHanoi
};
