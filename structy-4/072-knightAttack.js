// p: 5 numbers;
// r: number/nulll;
// e:



// . . . 1 . . . .
// . K . . . . . .
// . . P 1 . . . .
// 1 . 1 . . . . .
// . . . . . . . .
// . . . . . . . .
// . . . . . . . .
// . . . . . . . .

// . o . o .
// o . . . o
// . . K . .
// o . . . o
// . o . o .

const knightAttack = (n, kr, kc, pr, pc) => {
    const queue = [[kr, kc, 0]];
    const visited = new Set([kr + ',' + kc]);
    
    while (queue.length > 0) {
      const [y, x, d] = queue.shift();
      if (y === pr && x === pc) return d;
      
      const moves = [[y + 2, x + 1], [y + 1, x + 2],
                     [y - 1, x + 2], [y - 2, x + 1],
                     [y - 2, x - 1], [y - 1, x - 2],
                     [y + 1, x - 2], [y + 2, x - 1]];

      for (let move of moves) {
        const [neiY, neiX] = move;
        const boundY = 0 <= neiY && neiY < n;
        const boundX = 0 <= neiX && neiX < n;
        const neiYX = neiY + ',' + neiX;
        
        if (boundY && boundX && !visited.has(neiYX)) {
          queue.push([neiY, neiX, d + 1]);
          visited.add(neiYX);
        }
      }
    }

    return null;
};
    