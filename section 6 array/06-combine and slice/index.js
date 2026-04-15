// Combining Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

console.log(combined); // [1, 2, 3, 4, 5, 6]


// Combining Arrays
const first11 = [1, 2, 3];
const second11 = [4, 5, 6];

// Combining with spread
const combined11 = [...first11, ...second11];

console.log(combined11); // [1, 2, 3, 'a', 4, 5, 6, 'b']




// Combining Arrays and add element
const first1 = [1, 2, 3];
const second1 = [4, 5, 6];

// Combining with spread
const combined1 = [...first1, 'a', ...second1, 'b'];

console.log(combined1); // [1, 2, 3, 'a', 4, 5, 6, 'b']






// Slicing Arrays
const numbers = [1, 2, 3, 4, 5, 6];

// Slice from index 2 to 4
const sliced = numbers.slice(2, 4); 
console.log(sliced); // [3, 4]

// Slice from index 2 to the end
const fromTwo = numbers.slice(2);
console.log(fromTwo); // [3, 4, 5, 6]

// Copy the entire array
const copy = numbers.slice();