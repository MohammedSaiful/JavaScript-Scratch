// solution 1
let numbers = [1, 2, 3];
numbers = [];

// solution 2
const numbers1 = [1, 2, 3];
numbers1.length = 0;

// solution 3
const numbers2 = [1, 2, 3];
numbers2.splice(0, numbers2.length);


// solution 4
const numbers3 = [1, 2, 3];
while (numbers3.length > 0) {
    numbers3.pop();
}