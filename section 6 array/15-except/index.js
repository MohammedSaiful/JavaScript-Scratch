const numbers = [1, 2, 3];

console.log(numbers.includes(1)); // true
console.log(numbers.includes(5)); // false




// except
function except(array, excluded) {
    const output = [];
    for (let element of array) {
        if (!excluded.includes(element)) {
            output.push(element);
        }
    }
    return output;
}

const numbers1 = [10, 20, 30, 40];
console.log(except(numbers1, [20, 40])); // [10, 30]
