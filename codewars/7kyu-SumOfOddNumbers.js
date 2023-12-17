// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

// p: num int +
// r: num (sum)
// e:
// 1 -->  1
// 2 --> 3 + 5

// 7 -->

function rowSumOddNumbers(n) {
  // TODO
  // loop from 1++ to n
  //// loop from j = i

  let totalNum = 0;
  for (i = 1; i <= n; i++) {
    totalNum += i;
  }
  return Array.from(Array(totalNum), (e, i) => i * 2 + 1)
    .splice(-n, n)
    .reduce((p, c) => p + c, 0);
}

// better solution : return Math.pow(n,3) or n*n*n
