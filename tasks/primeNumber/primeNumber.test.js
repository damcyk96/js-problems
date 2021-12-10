const isPrimeNumber = require("./primeNumber");

test('prime number', () => {
  expect(isPrimeNumber(2)).toBe(true);
  expect(isPrimeNumber(5)).toBe(true);
  expect(isPrimeNumber(11)).toBe(true);
  expect(isPrimeNumber(12)).toBe(false);
  expect(isPrimeNumber(51)).toBe(false);
  expect(isPrimeNumber(53)).toBe(true);
});