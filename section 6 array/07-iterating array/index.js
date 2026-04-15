const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}


for (let index in colors) {
    console.log(index, colors[index]);
}



colors.forEach((color, index) => {
    console.log(index, color);
});


