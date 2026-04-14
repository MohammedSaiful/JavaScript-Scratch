const movie = {
  title: 'Inception',
  releaseYear: 2010,
  rating: 8.8,
  director: 'Christopher Nolan'
};

function showStringProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(key, obj[key]);
    }
  }
}

showStringProperties(movie);

// Output:
// title Inception
// director Christopher Nolan