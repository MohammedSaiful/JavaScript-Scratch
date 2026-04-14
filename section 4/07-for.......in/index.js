const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;


let text = "";
for (let i = 0; i < len; i++) {
    text += cars[i] + " ";
    console.log(text);

}


const user = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (let key in user) {
    console.log(key + ": " + user[key]);
}

// Output:
// name: Alice
// age: 25
// city: New York

// for in
const user1 = ['ami', 'tmi', 'amra', 'tmra', 'shobai'];

for (let key in user1) {
    console.log(key + ": " + user1[key]);
}

// for of
const user2 = ['ami', 'tmi', 'amra', 'tmra', 'shobai'];

for (let key of user2) {
    console.log(key);
}