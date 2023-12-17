// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
// prep
// parameters: []
// return: null & [].length < 3 => 0 || number (sum)
// examples
// pseudo code

function sumArray(array) {
  // null & [].length < 3 => 0

  if (array === null || array === undefined) return 0;
  if (array.length < 3) return 0;
  array.sort((a, b) => a - b).pop();
  array.shift();
  return array.reduce((p, c) => p + c);
}

//better solution: sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
