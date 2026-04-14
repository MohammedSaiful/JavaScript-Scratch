

// Value Types (Primitives) Copying a Value
let x = 10;
let y = x; // y gets a copy of the value 10

x = 20;

console.log(x); // 20
console.log(y); // 10


// Reference Types (Objects) Copying a Reference

let x1 = { value: 10 };
let y1 = x1; // y gets a copy of the REFERENCE, not the object

x1.value = 20;

console.log(x1.value); // 20
console.log(y1.value); // 20