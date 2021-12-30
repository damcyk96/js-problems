const reverseString = require("./reverseString");


test('reverse words in text', () => {
  expect(reverseString("Dupa ma psa kota dupa")).toBe("dupa kota psa ma Dupa");
  expect(reverseString("Dupa ma")).toBe("ma Dupa");
});