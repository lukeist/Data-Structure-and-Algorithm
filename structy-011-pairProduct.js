// https://structy.net/problems/premium/pair-product

// p: array, num
// r: array
// e: pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]

const pairProduct = (numbers, targetProduct) => {
  const map = {};

  // loops thru numbers, put num & i to map
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let complement = targetProduct / num;

    if (complement in map) return [i, map[complement]];

    map[num] = i;
  }
};
