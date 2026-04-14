const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) {
    console.log(key, circle[key]);
}
// Output: 
// radius 1
// draw ƒ draw()

for (let key of circle) {
    console.log(key);  //ERROR: is not iterable
}


for (let key of Object.keys(circle)) {
    console.log(key);  
}
// Output: 
// radius 
// draw 

const keys = Object.keys(circle);
console.log(keys); // ["radius", "draw"]

const values = Object.values(circle);
console.log(values); // [1, ƒ]


if('radius' in circle) console.log('yes');