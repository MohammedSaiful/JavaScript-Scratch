for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Stops the loop entirely when i is 3
  }
  console.log(i);
}
// Output:
// 1
// 2



for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skips the rest of the code for i = 3
  }
  console.log(i);
}
// Output:
// 1
// 2
// 4
// 5