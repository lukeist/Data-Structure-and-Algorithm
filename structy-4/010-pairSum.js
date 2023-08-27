// p: array, number;
// r: array;
// e:
//
// [3, 2, 5, 4, 1], 8; // -> [0, 2]
// {
//  5  6
//  0  1
// }
//

const pairSum = (numbers, targetSum) => {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num in map) return [map[num], i];
    map[targetSum - num] = i;
  }
};
