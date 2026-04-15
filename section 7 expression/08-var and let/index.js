function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    function print() {
        // i is accessible here because it's within the same function scope
        console.log('From print:', i); 
    }

    print(); // This will output: From print: 5
}


function startLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    function print() {
        // console.log(i); // Error: i is not defined
    }
}