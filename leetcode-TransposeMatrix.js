// https://leetcode.com/problems/transpose-matrix/
// p: array matrix
// r: array matrix
// e:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output:         [[1,4,7],[2,5,8],[3,6,9]]

// 00 10 20 => 00 01 02
// 10 11 12 => 01 11 21
// 20 21 22 => 02 12 22

// Input: matrix = [[1,2,3],[4,5,6]]
// Output:         [[1,4],[2,5],[3,6]]
// 00 01 02 => 00 10 01 11 ;

var transpose = function (matrix) {
  //   // 2 for loops
  //   let newM = [];
  //   for (let i = 0; i < matrix[0].length; i++) {
  //     // push array
  //     newM.push(Array.from(Array(matrix.length), (e, j) => (e = matrix[j][i])));
  //   }
  //   return newM;

  //better solutoin

  console.log(
    matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]))
  );
  matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  return;
};

// transpose([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

transpose([
  [1, 2, 3],
  [4, 5, 6],
]);
