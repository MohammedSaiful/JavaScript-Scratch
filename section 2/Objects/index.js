// Reference Types Cat
// 1. Object
// 2. Array
// 3. Function


// let name = 'Luna';
// let age = 30;

let person = {
    name: 'Luna',
    age: 25
};

//Dot Notation (we can also it to read the value of property)
person.name = 'Nahar'
console.log(person.name);

// Bracket Notation (we pass a string to determinded the name of the target property)
let selection = 'name';
person[selection] = 'Badrun'
console.log(person.name);

//Dot notaiton is more concise and shorter, however the in the brecket property we do not know about the target property untill the runtime, sometimes it will be given the user. 