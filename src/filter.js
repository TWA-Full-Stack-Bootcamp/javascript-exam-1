export const filterEvenNumbers = (numbers) => {
    return numbers.filter((number) => {
        return number%2 === 0;
    });
}


export const filterLengthWith4 = (words) => {
    return words.filter(word => {
        return word.length === 4;
    });
}



export const filterStartWithA = (letters) => {
    return letters.filter((letter) => {
        return letter.charAt(0) === 'a';
    });
}