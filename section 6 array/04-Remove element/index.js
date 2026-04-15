const numbers = [1, 2, 3, 4];
const last = numbers.pop();

console.log(numbers); // [1, 2, 3]
console.log(last);    // 4




const numbers1 = [1, 2, 3, 4];
const first = numbers1.shift();

console.log(numbers1); // [2, 3, 4]
console.log(first);   // 1



const numbers2 = [1, 2, 3, 4, 5];
// Go to index 2, remove 1 element
numbers2.splice(2, 1); 

console.log(numbers2); // [1, 2, 4, 5]