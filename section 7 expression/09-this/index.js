// Alone, this refers to the global object.
console.log(this); // window


// In a function, this refers to the global object.
function showThis() {
    console.log(this); 
}

showThis(); // window


//In an object method, this refers to the object.
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.play(); // {title: 'a', play: ƒ}