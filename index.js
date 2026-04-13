console.log('Helloo man')

let a = 10
let name = 'John Doe'
let isActive = true
let value = null
let undef = undefined


// objects
let person = {
    name: 'John Doe',
    age: 30,
    isActive: true
}

// dot notation
person.name = 'Jane Doe'
person.age = 25
person.isActive = false


// bracket notation
person['name'] = 'Alice Smith'
person['age'] = 28
person['isActive'] = true


let select = 'name'
person[select] = 'Bob Johnson'


// arrays
let numbers = [1, 2, 3, 4, 5]

let cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]) // Saab
console.log(cars[1]) // Volvo
console.log(cars[2]) // BMW

// modifying array elements
cars[0] = "Opel";
cars[1] = "Mercedes";

console.log(cars[0]) // Opel
console.log(cars[1]) // Mercedes
console.log(cars[2]) // BMW


// functions
function greet(name) {
    return ('Hello, ' + name);
}
console.log(greet('Alice')) // Hello, Alice!

function add(a, b) {
    return a + b
}
console.log(add(5, 3)) // 8


function square(x) {
    return x * x
}

console.log(square(4)) // 16