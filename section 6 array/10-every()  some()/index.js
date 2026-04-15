const numbers = [1, 2, -3, 4];

const allPositive = numbers.every(value => value >= 0);

console.log(allPositive); // false (because -3 is negative)


const numbers1 = [1, 2, -3, 4];

const atLeastOnePositive = numbers1.some(value => value >= 0);

console.log(atLeastOnePositive); // true