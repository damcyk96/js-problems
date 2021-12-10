const sortAndFind = require('./sort-array');

test('sort and find', () => {
  expect(sortAndFind(5, [5, 4, 3, 1, 2])).toBe('[1,2,3,4,5], 4');
});