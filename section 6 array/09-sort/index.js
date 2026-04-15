
const fruits = ['Banana', 'Orange', 'Apple'];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]

fruits.reverse();
console.log(fruits); // ["Orange", "Banana", "Apple"]





const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
];

courses.sort((a, b) => {
    // Convert to uppercase to ensure case-insensitive sorting
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses); // JavaScript will now come before Node.js