const sum = add(2, 3); // Will work

function add(a, b) {return a + b;}



const sum1 = add(2, 3); // ⛔ Will generate error

const add = function (a, b) {return a + b;};