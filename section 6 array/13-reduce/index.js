const numbers = [1, -1, 2, 3];

// a = accumulator, c = currentValue
const sum = numbers.reduce((a, c) => {
    return a + c;
}, 0); // 0 is the initial value for 'a'

console.log(sum); // 5



const cart = [
    { name: 'Apple', price: 5 },
    { name: 'Orange', price: 10 },
    { name: 'Banana', price: 2 }
];

const total = cart.reduce((total, item) => total + item.price, 0);

console.log(total); // 17