const canScramble = require("./canScramble");

test('sort and find', () => {
  expect(canScramble("dupa", "upad")).toBe(true);
  expect(canScramble("dupas", "upad")).toBe(false);
  expect(canScramble("trollo", "lolort")).toBe(true);

});