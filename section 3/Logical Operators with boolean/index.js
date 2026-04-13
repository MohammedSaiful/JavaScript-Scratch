// Logical AND (&&)
// Returns TRUE if both operator are TRUE

console.log(true && true);
console.log(true && false);


let highIncome = true;
let goodCreditScore= true;
let eligibleForLoan = highIncome && goodCreditScore;


console.log(eligibleForLoan);


// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

let highIncome1 = false;
let goodCreditScore1= true;
let eligibleForLoan1 = highIncome1 || goodCreditScore1;

console.log('Eligable', eligibleForLoan1);
// NOT (!)

let applicationRefused = !eligibleForLoan1;

console.log('Application Refused', applicationRefused);
