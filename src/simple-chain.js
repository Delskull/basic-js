const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  finish: [],
  getLength() {
    return this.finish.length
  },
  addLink(value = '') {
    this.finish.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if ( position < 1 || position > this.finish.length || !Number.isInteger(position)){
      this.finish = []
        throw new Error(`You can't remove incorrect link!`)
    }
    this.finish.splice( position - 1, 1)
    return this
  },
  reverseChain() {
   this.finish.reverse()
    return this
  },
  finishChain() {
   let result = this.finish.join('~~')
    this.finish = []
    return result
  }
};

module.exports = {
  chainMaker
};
