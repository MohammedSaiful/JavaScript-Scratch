

let pattern = '';

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        pattern = '';
        for (let i = 0; i < row; i++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

showStars(5);