const largestPalindrome = require("./largestPalindrome");

test('sort and find', () => {
  expect(largestPalindrome("dupa test kot kajak madam tteesseett")).toStrictEqual(["tteesseett"]);
});