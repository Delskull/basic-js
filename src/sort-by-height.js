const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let result = [];
    const numBerToDelete = -1;
    let arr2 = [...arr].sort((a, b) => a - b);
    const arr3 = arr2.filter((num) => num !== numBerToDelete);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numBerToDelete) {
            arr3.splice(i, 0, numBerToDelete);
        }
    }
    result = arr3;
    return result;
}

module.exports = {
  sortByHeight
};
