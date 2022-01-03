function reverseWord(word) {
  const splittedArray = word.split("");
  let temp;
  for (let index = 0; index < splittedArray.length / 2; index++) {
    let elementLeft = splittedArray[index];
    let elementRight = splittedArray[splittedArray.length - index - 1];
    temp = elementLeft;
    splittedArray[index] = elementRight;
    splittedArray[splittedArray.length - index - 1] = temp;
  }
  const reverse = splittedArray.join("");
  return reverse;
}

module.exports = reverseWord;
