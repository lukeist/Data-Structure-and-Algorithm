// p: arr, num
// r: arr
//         n1
// nums = [4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
//
// map  = -1 -4 -6  1 -2  x
//         0  1  2  3  4
const pairSum = (numbers, target) => {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    let n1 = numbers[i];
    let n2 = target - n1;
    if (n1 in map) return [map[n1], i];
    map[n2] = i;
  }
};

module.exports = {
  pairSum,
};
