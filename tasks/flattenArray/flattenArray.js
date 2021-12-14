function flattenArray(array) {
    const result = array.flat(Infinity);
    return result;
  }
  
  module.exports = flattenArray;