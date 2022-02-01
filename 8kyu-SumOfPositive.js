// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  arr = arr.filter((num) => num > 0);
  if (arr.length === 0) return 0;
  return arr.reduce((p, c) => p + c);
  console.log(arr);
}

positiveSum([1, -4, 7, 12]);
