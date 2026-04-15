// 1. Current date and time
const now = new Date();

console.log(now.toDateString());     // "Wed Apr 15 2026"
console.log(now.toTimeString());     // "10:58:23 GMT+0600..."
console.log(now.toISOString());      // "2026-04-15T04:58:23.000Z" (Standard for databases)




// 2. Specific date string (various formats)
const date1 = new Date('May 11 2026 09:00');

// 3. Specific components (Year, Month, Day, Hour, Minute, Second)
// Note: Months are 0-indexed (0 = January, 4 = May)
const date2 = new Date(2026, 4, 11, 9, 0);





