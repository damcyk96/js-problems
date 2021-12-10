const { expect } = require('@jest/globals');
const fibonacci = require('./fibonacci');

test('fibonacci', () => {
  expect(fibonacci(15)).toBe(377);
  expect(fibonacci(2)).toBe(1);
});