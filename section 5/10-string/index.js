const message = ' Hello World ';

// 1. .length
console.log(message.length); 
// Output: 13 (Includes the spaces at the start and end)

// 2. .includes()
console.log(message.includes('World')); 
// Output: true

// 3. .startsWith()
// Note: This is false because the string starts with a space ' '
console.log(message.startsWith('H')); 
// Output: false 

// 4. .indexOf()
console.log(message.indexOf('W')); 
// Output: 7

// 5. .replace()
console.log(message.replace('World', 'JavaScript')); 
// Output: ' Hello JavaScript '

// 6. .toUpperCase()
console.log(message.toUpperCase()); 
// Output: ' HELLO WORLD '

// 7. .trim()
const trimmed = message.trim();
console.log(trimmed); 
// Output: 'Hello World'

// 8. .split()
// Splitting the trimmed version by the space between words
console.log(trimmed.split(' ')); 
// Output: ['Hello', 'World']