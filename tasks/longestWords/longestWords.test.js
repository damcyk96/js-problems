const longestWords = require('./longestWords');

test('longest words', () => {
  expect(longestWords("dupa pies duppa doggo dupa dupa dupa doggo")).toStrictEqual(["duppa", "doggo", "doggo"]);
});