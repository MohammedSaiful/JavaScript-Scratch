// global
const color = 'red'; // Global variable

function start() {
    console.log(color); // Accessible here
}

function stop() {
    console.log(color); // Accessible here too
}




// local
function start() {
    const message = 'hi'; // Local variable
}

console.log(message); // Error: message is not defined