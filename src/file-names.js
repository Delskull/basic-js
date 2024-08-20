const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names, result = [], Count = {}) {
    if (names.length === 0) {
        return result;
    }
    const name = names[0];
    if (!Count[name]) {
        Count[name] = 1;
        result.push(name);
    } else {
        let rename = `${name}(${Count[name]})`;
        Count[name]++;
        Count[rename] = 1;
        result.push(rename);
    }
    return renameFiles(names.slice(1), result, Count);
}


module.exports = {
  renameFiles
};
