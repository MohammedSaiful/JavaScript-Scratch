//falsy (false)
//undefined
//null
//0
//flase
//''
//NaN


//Anything that is not Falsy in truthy

// Short-circuiting
//false || 1 || 2
// 1

// let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);


