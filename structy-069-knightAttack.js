// p: num, num, num, num, num
// r: num // null
// e:
//    x o x o x x x x
//    o x x x o x x x
//    x x O x x x x x
//    o x x x o x x x
//    x o x o x x x x
//    x x x x x x x x
//    x x x x x P x x
//    x x x x x x x x
//
//  o x x
//  x 1 x
//  x x x

// [ y + 2,x + 1 ],
// [ y + 1,x + 2 ],
// [ y - 1,x + 2 ],
// [ y - 2,x + 1 ],
// [ y - 2,x - 1 ],
// [ y - 1,x - 2 ],
// [ y + 1,x - 2 ],
// [ y + 2,x - 1 ],

// bfs O(rxc) O(rxc)
const knightAttack = (n, kr, kc, pr, pc) => {
  let queue = [[kr, kc, 0]];
  const visited = new Set([kr + "," + kc]);

  while (queue.length > 0) {
    const [y, x, distance] = queue.shift();
    if (y === pr && x === pc) return distance;
    const moves = [
      [y + 2, x + 1],
      [y + 1, x + 2],
      [y - 1, x + 2],
      [y - 2, x + 1],
      [y - 2, x - 1],
      [y - 1, x - 2],
      [y + 1, x - 2],
      [y + 2, x - 1],
    ];

    for (let m of moves) {
      const [my, mx] = m;
      const boundY = 0 <= my && my < n;
      const boundX = 0 <= mx && mx < n;
      const mymx = my + "," + mx;
      if (boundY && boundX && !visited.has(mymx)) {
        visited.add(mymx);
        queue.push([my, mx, distance + 1]);
      }
    }
  }

  return null;
};
