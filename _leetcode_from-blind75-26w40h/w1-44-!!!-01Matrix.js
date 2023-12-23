/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// p: matrix;
// r: matrix;
// e:
// [[0,0,0],
//  [0,1,0],
//  [1,1,1]]
//
// [
//  [0,0,0,0,0],
//  [0,1,0,1,1],
//  [1,1,1,1,1],
//  [0,1,1,1,1],
//  [0,1,1,1,1]
// ]

// [
//  [ 0,  0,  0,  0,  0],
//  [ 0, -1,  0, -1, -1],
//  [-1, -1, -1, -1, -1],
//  [ 0, -1, -1, -1, -1],
//  [ 0, -1, -1, -1, -1]
// ]

// [
//  [ 0,  0,  0,  0,  0],
//  [ 0,  1,  0,  1,  1],
//  [ 1, -1, -1, -1, -1],
//  [ 0,  1, -1, -1, -1],
//  [ 0,  1, -1, -1, -1]
// ]

var updateMatrix = function (mat) {
  const queue = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        mat[i][j] = -1;
      }
    }
  }

  while (queue.length > 0) {
    const [y, x, d] = queue.shift();

    const deltas = [
      [y + 1, x],
      [y - 1, x],
      [y, x + 1],
      [y, x - 1],
    ];
    for (let [neiY, neiX] of deltas) {
      const boundY = 0 <= neiY && neiY < mat.length;
      const boundX = 0 <= neiX && neiX < mat[0].length;
      if (boundY && boundX && mat[neiY][neiX] === -1) {
        console.log(mat);
        mat[neiY][neiX] = d + 1;
        queue.push([neiY, neiX, d + 1]);
      }
    }
  }

  return mat;
};

// // [
// //  [0,0,0,0,0],
// //  [0,1,0,1,1],
// //  [3,2,3,2,2],
// //  [0,3,4,3,4],
// //  [0,4,5,4,5]
// // ]

// var updateMatrix = function (mat) {
//   const queue = [];
//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[0].length; j++) {
//       if (mat[i][j] === 0) {
//         queue.push([i, j]);
//       } else {
//         mat[i][j] = Infinity;
//       }
//     }
//   }

//   while (queue.length > 0) {
//     const [y, x] = queue.shift();

//     const deltas = [
//       [y + 1, x],
//       [y - 1, x],
//       [y, x + 1],
//       [y, x - 1],
//     ];
//     for (let delta of deltas) {
//       const [neiY, neiX] = delta;
//       const boundY = 0 <= neiY && neiY < mat.length;
//       const boundX = 0 <= neiX && neiX < mat[0].length;
//       if (boundY && boundX && mat[y][x] < mat[neiY][neiX] - 1) {
//         mat[neiY][neiX] = mat[y][x] + 1;
//         queue.push([neiY, neiX]);
//       }
//     }
//   }

//   return mat;
// };

// //  TIME LIMIT EXCEEDED:
// var updateMatrix = function(mat) {
//     for (let i = 0; i < mat.length; i++) {
//         for (let j = 0; j < mat[0].length; j++) {
//             if (mat[i][j] === 0) continue;
//             const queue = [[i, j, 0]];

//             while (queue.length > 0) {
//                 const [y, x, d] = queue.shift();
//                 if (mat[y][x] === 0) {
//                     mat[i][j] = d;
//                     break;
//                 };

//                 const deltas = [[y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1]];
//                 for (let delta of deltas) {
//                     const [neiY, neiX] = delta;
//                     const boundY = 0 <= neiY && neiY < mat.length;
//                     const boundX = 0 <= neiX && neiX < mat[0].length;
//                     const neiYX = neiY + "," + neiX;
//                     if (boundY && boundX && !visited.has(neiYX)) {
//                         queue.push([neiY, neiX, d + 1]);
//                         visited.add(neiYX);
//                     }
//                 }
//             }
//         }
//     }

//     return mat;
// };
