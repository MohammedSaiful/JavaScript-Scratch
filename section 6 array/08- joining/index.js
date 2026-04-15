const parts = ['HTML', 'CSS', 'JS'];

// Default (comma)
const joined = parts.join(); 
console.log(joined); // "HTML,CSS,JS"

// Custom separator (space)
const withSpace = parts.join(' ');
console.log(withSpace); // "HTML CSS JS"

// Custom separator (hyphen)
const slug = parts.join('-');
console.log(slug); // "HTML-CSS-JS"




const title = 'My First Blog Post';

const parts1 = title.split(' '); // ["My", "First", "Blog", "Post"]
const urlSlug = parts1.join('-');

console.log(urlSlug); // "My-First-Blog-Post"