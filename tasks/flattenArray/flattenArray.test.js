const flattenArray = require("./flattenArray");

test("flatten array", () => {
  expect(flattenArray([1, 2, [3, [4], 5, 6], 7])).toStrictEqual([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  expect(flattenArray([11, 3, ["test", [3, [4], 2, 6], "exampleString"]])).toStrictEqual([
    11, 3, "test", 3, 4, 2, 6, "exampleString",
  ]);
});