function sum(...items) {
    // If the first argument is an array, use it; otherwise, use the items array
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b, 0);
}

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum(1, 2, 3, 4));   // 10