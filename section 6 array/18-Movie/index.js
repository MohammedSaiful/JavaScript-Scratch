const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// Logic: 
// 1. Get movies from 2018 with rating > 4
// 2. Sort them by rating (descending)
// 3. Pick only the titles
const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => b.rating - a.rating)
    .map(m => m.title);

console.log(titles); // ['b', 'a']