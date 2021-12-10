//dla każdego dodać jeden i zsumowac

function sumArrayPlusOne(array) {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(element + 1);
  });
  let sum = 0;
  newArray.forEach((number) => {
    sum += number;
  });
  return sum;
}

module.exports = sumArrayPlusOne;
