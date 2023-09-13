// p: array, number;
// r: number;
// e:
//
//
// [0, 1, 2, 3, 4, 5, 6, 7, 8], 6
//  i           m           j
//                          m
// [0, 1, 2, 3, 4, 5, 6, 7, 8], 8
//                         ij

const binarySearch = (numbers, target) => {
  let i = 0,
    j = numbers.length - 1;

  while (i <= j) {
    let m = Math.floor((i + j) / 2);
    if (numbers[m] === target) return m;
    if (numbers[m] < target) i = m + 1;
    if (numbers[m] > target) j = m - 1;
  }

  return -1;
};
