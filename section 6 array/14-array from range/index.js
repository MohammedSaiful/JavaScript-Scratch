function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++) {
        output.push(i);
    }
    return output;
}

const numbers = arrayFromRange(1, 4);
console.log(numbers); // [1, 2, 3, 4]

const negativeRange = arrayFromRange(-2, 2);
console.log(negativeRange); // [-2, -1, 0, 1, 2]