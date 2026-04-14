

const marks=[80, 90, 95, 100, 55, 60];



function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    const average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

console.log(calculateGrade(marks)); 
// Output: F (Average is 70, but logic checks ranges)