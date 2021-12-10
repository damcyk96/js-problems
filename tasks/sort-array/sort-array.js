function sortAndFind(number, array) {
  const sortedArray = array.sort((a, b) => a - b);
  const isEqual = (element) => element == number;
  const index = sortedArray.findIndex(isEqual);
  return `[${sortedArray}], ${index}`
  
}

module.exports = sortAndFind;
