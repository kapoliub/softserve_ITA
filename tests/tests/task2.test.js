const { toBinary } = require("../js/task2");

describe("toBinary function:", () => {
  const num = 17;
  test("should be defined", () => {
    expect(toBinary(num)).toBeDefined();
    expect(toBinary(num)).not.toBeUndefined();
  });
  test("input/output value must be a number", () => {
    expect(num).toBeGreaterThanOrEqual(0);
    expect(toBinary(num)).toBeGreaterThanOrEqual(0);
    expect(typeof num).toBe("number");
  });
  test("should convert input number correctly", () => {
    expect(toBinary(17)).toEqual(10001);
    expect(toBinary(100)).toEqual(1100100);
    expect(toBinary(56)).toEqual(111000);
    expect(toBinary(0)).toEqual(0);
    if (num !== 0) {
      expect(toBinary(num).toString()).toContain(1);
    }
  });
});
