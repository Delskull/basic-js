const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('')
  let result = '';
  let currWord = 1;
  for ( let i = 0 ; i<arr.length; i++){
    if (arr[i] !== arr[i+1] || i === arr.length - 1){
  result += (currWord > 1 ? currWord + arr[i] : '' + arr[i])
      currWord = 1;
    }
    else{
      currWord++
    }
  }
  return result
}

module.exports = {
  encodeLine
};
