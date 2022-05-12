// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  // your code here
  let total = 0;
  for (const value of array) {
    total = total + value;
  }
  if (array.length > 0) {
    return total / array.length;
  } else {
    return 0;
  }
}
