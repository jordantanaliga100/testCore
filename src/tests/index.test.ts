import { describe, expect, it } from "@jest/globals";
import { sum } from "..";

// returns 🔥
describe("Example Test", () => {
  it("should return a number equal to 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assign", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

// boolean 🔥
describe("truthy or falsy", () => {
  it("null", () => {
    const n = null;

    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });
});

// numbers 🔥
describe("numbers", () => {
  it("two plus two", () => {
    const values = 2 + 2;
    expect(values).toBe(4);
    expect(values).toBeGreaterThan(3);
    expect(values).toBeGreaterThanOrEqual(4);
  });
});
