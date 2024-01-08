/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// p: grid; string
// r: boolean
// e: AAB
// [
// ["C","A","A"],
// ["A","A","A"],
// ["B","C","D"]]

// ABCESEEEFS
// [ o   o   o
// ["A","B","C","E"],
// ["S","F","E","S"],
// ["A","D","E","E"]]

// ABCB
// [
// ["A","B","C","E"],
// ["S","F","C","S"],
// ["A","D","E","E"]]

var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (isWord(board, i, j, word, 0, new Set())) return true;
    }
  }
  return false;
};

const isWord = (grid, y, x, s, i, visited) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  const yx = y + "," + x;

  if (!boundY || !boundX || visited.has(yx) || grid[y][x] !== s[i])
    return false;
  if (i === s.length - 1) return true;
  visited.add(yx);

  const n = isWord(grid, y + 1, x, s, i + 1, visited);
  const so = isWord(grid, y - 1, x, s, i + 1, visited);
  const e = isWord(grid, y, x + 1, s, i + 1, visited);
  const w = isWord(grid, y, x - 1, s, i + 1, visited);

  visited.delete(yx); // if n && so && e && w all false

  return n || so || e || w;
};
