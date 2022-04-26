export const firstGrownUp = (ages) => {
    return ages.find(element => {
        return element >= 18;
    });
}


export const firstOrange = (fruit) => {
    return fruit.find((item) => {
        return item === 'orange';
    });
}


export const firstLengthOver5Name = (names) => {
    return names.find((name) => {
        return name.length  > 5;
    });
}