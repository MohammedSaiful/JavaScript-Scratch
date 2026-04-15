const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

// Returns the object
const course = courses.find(function (course) {
    return course.name === 'a';
});

// Returns the object // short form
const course1 = courses.find(course => course.name === 'a');



// Returns the index (0)
const index = courses.findIndex(function (course) {
    return course.name === 'a';
});
// Returns the index (0) //short form
const index1 = courses.findIndex(course => course.name === 'a');