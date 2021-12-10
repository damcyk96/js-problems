const integerlength = require('./integer-length');

test('integer-length', () => {
  expect(integerlength(505)).toBe(3);
});