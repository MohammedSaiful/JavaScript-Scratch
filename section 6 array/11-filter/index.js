const numbers = [1, -1, 2, 3];

// The callback function returns true if the number is >= 0
const filtered = numbers.filter(n => n >= 0);

console.log(filtered); // [1, 2, 3]