/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// p: grid m x n;
// r: grid m x n;
// e:
//
//
// [[0,0,0],
//  [0,1,0],
//  [1,1,1]]
//
//

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
        mat[neiY][neiX] = d + 1;
        queue.push([neiY, neiX, d + 1]);
      }
    }
  }

  return mat;
};
