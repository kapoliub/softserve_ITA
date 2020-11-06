const { transformMatrix } = require("../js/task1");

describe("transformMatrix function:", () => {
  const matrix = [
    [1, 2, 3, 4],
    [5, 3, -1, 4],
  ];

  const result = [
    [0.2, 0.4, 0.6, 0.8],
    [1, 0.6, -0.2, 0.8],
  ];
  test("should be defined", () => {
    expect(transformMatrix(matrix)).toBeDefined();
    expect(transformMatrix(matrix)).toBeTruthy();
    expect(transformMatrix(matrix)).not.toBeUndefined();
    expect(transformMatrix(matrix)).not.toBeFalsy();
  });
  test("should receive matrix with only numbers", () => {
    expect(matrix.every((arr) => Array.isArray(arr))).toBeTruthy();
    expect(
      matrix.every((arr) => arr.every((num) => typeof num === "number"))
    ).toBeTruthy();
  });
  test("input/output value must be a matrix", () => {
    expect(Array.isArray(matrix)).toBe(true);
    expect(Array.isArray(result)).toBe(true);
    expect(matrix).toEqual(expect.arrayContaining([]));
    expect(transformMatrix(matrix)).not.toContain(null);
    expect(transformMatrix(matrix)).not.toContain(false);
    expect(transformMatrix(matrix)).not.toContain(NaN);
    expect(transformMatrix(matrix)).not.toContain("");
  });
  test("should return matrix, all values divided by the largest value", () => {
    expect(transformMatrix(matrix)).toEqual(result);
    expect(transformMatrix(matrix)).toEqual(expect.arrayContaining([]));
  });
});
