function integerLength(number) {
  const intAsString = number.toString();
  //mozna tez split i length arrayki i tez jest git :)
  let length = 0;
  while (intAsString[length] !== undefined) {
    length++;
  }
  return length;
}

module.exports = integerLength;
