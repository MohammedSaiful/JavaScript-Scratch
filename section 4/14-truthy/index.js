function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) { // This check automatically filters for truthy
      console.log(value);
      count++;
    }
  }
  return count;
}

const data = [0, null, undefined, '', 2, 3];
console.log(countTruthy(data));