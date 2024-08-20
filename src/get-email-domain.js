const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result =''
  let adress = email.split('')
  let simbol = '@'
  for (let i = email.length - 1 ; i >= 0; i--){
    if (adress[i] === simbol){
      result = email.slice(i + 1)
      break
    }
  }
  return result
}

module.exports = {
  getEmailDomain
};
