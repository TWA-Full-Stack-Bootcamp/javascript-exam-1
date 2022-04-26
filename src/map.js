export const halfNumbers = (numbers) => {
    return numbers.map((item) => {
        return item/2;
    })
}


export const spliceNames = (names) => {
    return names.map((item) => {
        return `Hello ${item}`;
    });
}



export const addSerialNumber = (fruit) => {
    return fruit.map((item, index) => {
        return `${index + 1}. ${item}`;
    })
}

