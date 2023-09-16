// p: array
// r: number;

// max = 0
//     0  1   2x    3  4   5   6   7   8
// e: [4, 18, 20, 10, 4, 12, 15, 19, 17]
//     1   2  3   2   1
//
//   0  1   2    3   4  5   6  7   8
// [42, 50, 51, 60, 55, 70, 4, 5, 70];
//  1   2   3   4   4   5   1  2

// !!!!!!!!!!!!! <<< BEST SOLUTION >>> !!!!!!!!!!!!!
const maxIncreasingSubseq = (numbers) => {
  const arr = [1];

  for (let i = 1; i < numbers.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (numbers[j] < numbers[i]) max = Math.max(max, arr[j]);
    }
    arr[i] = max + 1;
  }

  return Math.max(...arr);
};
