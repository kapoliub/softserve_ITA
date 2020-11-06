const { makeSingleSequence } = require("../js/task3");

describe("makeSingleSequence function:", () => {
  const firstArray = [45, 3, 0, -12];
  const secondArray = [3245, 1.5, 333];
  const result = [-12, 0, 1.5, 3, 45, 333, 3245];

  test("should be defined", () => {
    expect(makeSingleSequence(firstArray, secondArray)).toBeDefined();
    expect(makeSingleSequence(firstArray, secondArray)).not.toBeUndefined();
    expect(makeSingleSequence(firstArray, secondArray)).toBeTruthy();
    expect(makeSingleSequence(firstArray, secondArray)).not.toBeFalsy();
  });
  test("should receive arrays of numbers as parameters", () => {
    expect(Array.isArray(firstArray)).toBeTruthy();
    expect(Array.isArray(secondArray)).toBeTruthy();
    expect(firstArray.every((num) => typeof num === "number")).toBeTruthy();
    expect(secondArray.every((num) => typeof num === "number")).toBeTruthy();
  });
  test("should return 1 array of numbers", () => {
    expect(
      Array.isArray(makeSingleSequence(firstArray, secondArray))
    ).toBeTruthy();
    expect(result.every((num) => typeof num === "number")).toBeTruthy();
    expect(makeSingleSequence(firstArray, secondArray)).not.toContain(null);
    expect(makeSingleSequence(firstArray, secondArray)).not.toContain(false);
    expect(makeSingleSequence(firstArray, secondArray)).not.toContain(NaN);
    expect(makeSingleSequence(firstArray, secondArray)).not.toContain("");
  });
  test("should return single sequence correctly", () => {
    expect(makeSingleSequence(firstArray, secondArray)).toEqual(result);
  });
});
