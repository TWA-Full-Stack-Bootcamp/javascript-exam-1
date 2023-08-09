import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    it('should filter even number', () => {
        const numbersArray = [1, 5, 10, 15, 20];
        const expected = [10, 20];
        const result1 = filterEvenNumbers(numbersArray);
        expect(result1).toEqual(expected);

    });

    it('should filter words with length 4', () => {
        const wordsArray = ['apple', 'banana', 'cars', 'date', 'grape'];
        const expected = ['cars', 'date']
        const result2 = filterLengthWith4(wordsArray);
        expect(result2).toEqual(expected);
    });

    it('should filter words that start with "a"', () => {
        const wordsArray = ['apple', 'banana', 'apricot', 'grape', 'avocado'];
        const expected = ['apple', 'apricot', 'avocado'];
        const result = filterStartWithA(wordsArray);
        expect(result).toEqual(expected);
    });
    //expect(result1).tobe([10, 20]);
});
