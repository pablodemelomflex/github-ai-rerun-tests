import { sum } from "../app-under-test/src/sum";
import { subtract } from "../app-under-test/src/subtract";
import { describe, test, expect } from "@jest/globals";

describe("App under test", () => {
  test("sum works from official app repo", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("subtract works from official app repo", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
