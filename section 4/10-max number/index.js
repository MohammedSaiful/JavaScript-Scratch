// Max of Two Numbers

let a = 10;
let b = 20;

// Using Math.max()
console.log(Math.max(a, b)); 

// Using Ternary Operator
let max = a > b ? a : b;
console.log(max);



let a1 = 10, b1 = 45, c1 = 30;

// Using Math.max()
console.log(Math.max(a1, b1, c1));

// Using Logic
let max3;
if (a1 >= b1 && a1 >= c1) {
    max3 = a1;
} else if (b1 >= a1 && b1 >= c1) {
    max3 = b1;
} else {
    max3 = c1;
}
console.log(max3);





let a2 = 12, b2 = 88, c2 = 45, d2 = 92;

// Using Math.max()
console.log(Math.max(a2, b2, c2, d2));

// Using Array and Spread Operator
let numbers = [12, 88, 45, 92];
console.log(Math.max(...numbers));