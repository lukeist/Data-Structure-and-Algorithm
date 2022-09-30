// p: grid, num, num
// r: num
// const grid = [
//   ['O', 'O', 'O', 'O', 'O'],
//   ['O', 'X', 'O', 'O', 'O'],
//   ['O', 'X', 'X', 'O', 'O'],
//   ['O', 'X', 'C', 'O', 'O'],
//   ['O', 'X', 'X', 'O', 'O'],
//   ['C', 'O', 'O', 'O', 'O'],
// ];

// bfs O(rc) O(rc)
const closestCarrot = (grid, startRow, startCol) => {
  const queue = [[startRow, startCol, 0]];
  const visited = new Set([startRow + "," + startCol]);

  while (queue.length > 0) {
    const [y, x, distance] = queue.shift();

    if (grid[y][x] === "C") return distance;

    const deltas = [
      [y + 1, x],
      [y - 1, x],
      [y, x + 1],
      [y, x - 1],
    ];
    for (let delta of deltas) {
      const [neiY, neiX] = delta;
      const neiYX = neiY + "," + neiX;
      const boundY = 0 <= neiY && neiY < grid.length;
      const boundX = 0 <= neiX && neiX < grid[0].length;

      if (boundY && boundX && !visited.has(neiYX) && grid[y][x] !== "X") {
        visited.add(neiYX);
        queue.push([neiY, neiX, distance + 1]);
      }
    }
  }

  return -1;
};
