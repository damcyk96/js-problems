function isPrimeNumber(number) {
  let isPrime = true;
  if(number == 1 || number == 2) return isPrime
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

module.exports = isPrimeNumber;
