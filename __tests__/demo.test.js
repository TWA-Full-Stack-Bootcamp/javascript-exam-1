// Please delete the demo.test file
import { addNumers } from "../src/demo";

describe("array filter test", () => {
  test("demo: should return true", () => {
    //GIVEN
    const number1 = 1;
    const number2 = 1;

    //WHEN
    const result = addNumers(number1, number2);

    //THEN
    expect(result).toBe(2);
  });
});
