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

  const arr = Array.from(Array(n), (e, i) =>
    Array.from(Array(i + 1), (f, j) => j)
  );
  console.log(arr);
}

rowSumOddNumbers(5);
