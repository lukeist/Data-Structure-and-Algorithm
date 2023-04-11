// function orangesRotting(grid) {
//   const rotten = [];
//   let hasFresh = false;
//   let hasRotten = false;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === 1) hasFresh = true;
//       if (grid[i][j] === 2) {
//         hasRotten = true;
//         rotten.push([i, j, 0]);
//       }
//     }
//   }

//   if (hasFresh && !hasRotten) return -1;
//   if (!hasFresh) return 0;

//   let maxTime = 0;
//   const visited = new Set(rotten.map(([r, c]) => `${r},${c}`));

//   while (rotten.length > 0) {
//     const [y, x, time] = rotten.shift();
//     maxTime = Math.max(maxTime, time);
//     grid[y][x] = 2;

//     const neighbors = [
//       [y + 1, x],
//       [y - 1, x],
//       [y, x + 1],
//       [y, x - 1],
//     ];

//     for (const [neiY, neiX] of neighbors) {
//       const isInBounds =
//         0 <= neiY && neiY < grid.length && 0 <= neiX && neiX < grid[0].length;
//       const neiYX = `${neiY},${neiX}`;

//       if (isInBounds && grid[neiY][neiX] === 1 && !visited.has(neiYX)) {
//         rotten.push([neiY, neiX, time + 1]);
//         visited.add(neiYX);
//       }
//     }
//   }

//   for (const row of grid) {
//     if (row.some((cell) => cell === 1)) return -1;
//   }

//   return maxTime;
// }

// CHAT GPT SOLUTION: without expensive .shift()
function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const rottenQueue = [];
  let freshOranges = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        freshOranges++;
      } else if (grid[row][col] === 2) {
        rottenQueue.push([row, col]);
      }
    }
  }

  let minutes = 0;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (rottenQueue.length > 0 && freshOranges > 0) {
    const newRottenQueue = [];

    for (const [currentRow, currentCol] of rottenQueue) {
      for (const [rowDir, colDir] of directions) {
        const newRow = currentRow + rowDir;
        const newCol = currentCol + colDir;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 2;
          freshOranges--;
          newRottenQueue.push([newRow, newCol]);
        }
      }
    }

    rottenQueue.length = 0;
    Array.prototype.push.apply(rottenQueue, newRottenQueue);
    minutes++;
  }

  return freshOranges === 0 ? minutes : -1;
}
