const circle = {
    radius: 1
};

// circle={}; XXXX
// Adding a new property
circle.color = 'yellow';

// Adding a method
circle.draw = function() {
    console.log('draw');
}

console.log(circle); // { radius: 1, color: 'yellow', draw: ƒ }