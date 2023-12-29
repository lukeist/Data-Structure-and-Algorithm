/**
 * @param {number[][]} grid
 * @return {number}
 */

// p: grid;
// r: number;
// e:
// [2,1,1],
// [1,1,0],
// [0,1,1]

// [2,1,1],
// [0,1,1],
// [1,0,1]

var orangesRotting = function (grid) {
  const queue = [];
  let freshO = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j, 0]);
      if (grid[i][j] === 1) freshO++;
    }
  }

  let max = 0;
  while (queue.length > 0) {
    const [y, x, d] = queue.shift();
    max = Math.max(max, d);
    const deltas = [
      [y + 1, x],
      [y - 1, x],
      [y, x + 1],
      [y, x - 1],
    ];
    for (let [neiY, neiX] of deltas) {
      const boundY = 0 <= neiY && neiY < grid.length;
      const boundX = 0 <= neiX && neiX < grid[0].length;
      if (boundY && boundX && grid[neiY][neiX] === 1) {
        freshO--;
        grid[neiY][neiX] = 2;
        queue.push([neiY, neiX, d + 1]);
      }
    }
  }

  // for (let i = 0; i < grid.length; i++) {
  //     for (let j = 0; j < grid[0].length; j++) {
  //         if (grid[i][j] === 1) return -1;
  //     }
  // }

  // return max;
  return freshO > 0 ? -1 : max;
};
