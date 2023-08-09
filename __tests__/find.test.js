import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  it("should find the first grown up", () => {
    const age = [15, 16, 17, 18];
    const expected = 18;
    const result = firstGrownUp(age);
    expect(result).toEqual(expected)
  });

  it('should find the orange', () => {
    const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
    const expected = "orange";
    const result = firstOrange(fruits);
    expect(result).toEqual(expected);
  });

  it('should find length over 5 name', () => {
    const names = ['Alice', 'Bob', 'Catherine', 'David'];
    const expected = "Catherine";
    const result = firstLengthOver5Name(names);
    expect(result).toEqual(expected);
  });
});
