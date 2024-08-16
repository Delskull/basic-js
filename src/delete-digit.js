const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n), Number);
  let maximumNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let copyArr = arr.slice();
    copyArr.splice(i, 1);
    const num = +copyArr.join('');
    if (num > maximumNum) {
      maximumNum = num;
    }
  }

  return maximumNum;
}

module.exports = {
  deleteDigit
};
