function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    // Guard Clause: Handle the 'Ok' case first and exit
    if (speed <= speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points >= 12) {
        console.log('License suspended');
    } else {
        console.log('Points', points);
    }
}


console.log(checkSpeed(85));



function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}

checkEvenOdd(10); // 10 is Even
checkEvenOdd(7);  // 7 is Odd