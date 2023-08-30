// p: grid, number, number;
// r: number;
// e: 
// const grid = [
//   ['O', 'O',  1 , 'O', 'O'],
//   ['O', 'X', 'O',  1 , 'O'],
//   ['O', 'X', 'X',  2 , 'O'],
//   ['O', 'X', 'C',  3 , 'O'],
//   ['O', 'X', 'X', 'O', 'O'],
//   ['C', 'O', 'O', 'O', 'O'],
// ];

// closestCarrot(grid, 1, 2); // -> 4

const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set([startRow + ',' + startCol]);
    const queue = [[startRow, startCol, 0]];
    
    while (queue.length > 0) {
      const [y, x, d] = queue.shift();
      if (grid[y][x] === 'C') return d; 
      
      const deltas = [[y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1]];
      for (let delta of deltas) {
        const [neiY, neiX] = delta;
        const neiYX = neiY + ',' + neiX;
        const boundY = 0 <= neiY && neiY < grid.length;
        const boundX = 0 <= neiX && neiX < grid[0].length;
        if (boundY && boundX && grid[neiY][neiX] !== 'X' && !visited.has(neiYX)) {
          queue.push([neiY, neiX, d + 1]);
          visited.add(neiYX);
        }
      }
    }
    
    return -1;
};
    