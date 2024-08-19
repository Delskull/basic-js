const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.separator || '+';
  const optionSeparator = options.additionSeparator || '|';
  const word = `${str}`;
  const addition = options.addition !== undefined ? `${options.addition}` : '';
  const string1 = addition + optionSeparator;
  const add2 = string1.repeat(options.additionRepeatTimes || 1);
  const withoutSepar = add2.slice(0, -optionSeparator.length);
  const result = word + withoutSepar;

  const result2 = Array(options.repeatTimes || 1).fill(result).join(separator);

  return result2;
}

module.exports = {
  repeater
};
