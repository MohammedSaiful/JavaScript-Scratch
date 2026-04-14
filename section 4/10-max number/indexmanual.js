
function findMaxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(findMaxOfTwo(10, 25)); // 25



function findMaxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMaxOfThree(10, 45, 30)); // 45



function findMaxOfFour(a, b, c, d) {
    let max = a;

    if (b > max) max = b;
    if (c > max) max = c;
    if (d > max) max = d;

    return max;
}

console.log(findMaxOfFour(12, 88, 45, 92)); // 92


function findMaxManual(numbers) {
    let max = numbers[0]; 
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(findMaxManual([5, 12, 99, 3, 74])); // 99