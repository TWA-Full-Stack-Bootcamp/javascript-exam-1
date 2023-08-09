import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  it("half the numbers", () => {
    const listOfEvenNumber = [2, 4, 6, 8, 10];
    const expected = [1, 2, 3, 4, 5];
    const result = halfNumbers(listOfEvenNumber);
    expect(result).toEqual(result);
  });

  it("splice the names", () => {
    const listOfWords = ["World", "There", "Everyone"]
    const expected = ["Hello World", "Hello There", "Hello Everyone"];
    const result = spliceNames(listOfWords)
    expect(result).toEqual(result);
  });

  it("add serial number", () => {
    const fruits = ['apple', 'banana', 'orange'];
    const result = addSerialNumber(fruits);
    const expected = ['1. apple', '2. banana', '3. orange'];
    expect(result).toEqual(expected);
  })
});
