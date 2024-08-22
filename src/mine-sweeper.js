const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = matrix.map(row => row.map(() => 0));

  const sosed = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (let rows = 0; rows < matrix.length; rows++) {
    for (let cols = 0; cols < matrix[rows].length; cols++) {
      if (matrix[rows][cols]) {
        // Обновляем соседние клетки
        sosed.forEach(([dx, dy]) => {
          const row1 = rows + dx;
          const col1 = cols + dy;

          if (row1 >= 0 && row1 < matrix.length && col1 >= 0 && col1 < matrix[rows].length) {
            result[row1][col1]++;
          }
        });
      }
    }
  }

  return result;
}


module.exports = {
  minesweeper
};
