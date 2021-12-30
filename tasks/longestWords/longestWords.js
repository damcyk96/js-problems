function longestWords(word) {
  const box= [];
  const splittedArray = word.split(" ");
  let maxLength = 0;
  for (let i = 0; i < splittedArray.length; i++) {
    const element = splittedArray[i];
    if(element.length > maxLength){
      box.length = 0;
      maxLength = element.length;
      box.push(element)
    }
    else if (element.length == maxLength){
      box.push(element)
    }
  }
  return box
}
longestWords("dupa pies duppa doggo dupa dupa dupa doggo")
module.exports = longestWords;
