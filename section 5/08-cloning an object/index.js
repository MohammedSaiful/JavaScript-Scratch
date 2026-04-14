

// cloning an object

// 1. Using a for...in Loop (Manual)
const circle = { radius: 1, draw() {console.log('hahahhaha')} };
const another = {};

for (let key in circle) {
    another[key] = circle[key];
}


//2. Using Object.assign()
const circle1 = { radius: 1, draw() {} };

// Copying into a new empty object
const another1 = Object.assign({}, circle1);

//  can also add new properties during the clone
const modified = Object.assign({ color: 'yellow' }, circle1);



//3. Using the Spread Operator (...)
const user = { 
    id: 1, 
    details: { name: 'Bob' } 
};

const clone = { ...user };

clone.details.name = 'Alice'; 

console.log(user.details.name); // 'Alice' (The original was changed!)