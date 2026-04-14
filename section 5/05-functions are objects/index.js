// They Have Properties
function greet(name) {
    console.log("Hello " + name);
}

console.log(greet.name);   // "greet"
console.log(greet.length); // 1 (number of parameters)



// Can Add Own custom Properties
function circle(radius) {
    this.radius = radius;
}

circle.description = "A function to represent circles";

console.log(circle.description); // "A function to represent circles"



function Circle(radius) {
    this.radius = radius;
}

Circle.call({}, 1);
Circle.apply({}, [1,2,3,4]);