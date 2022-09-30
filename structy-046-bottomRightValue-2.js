// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: val (num // str)

// iterative bfs O(n^2) O(n)
const bottomRightValue = (root) => {
  const queue = [root];
  let lastVal = null;

  while (queue.length > 0) {
    const current = queue.shift();
    lastVal = current.val;

    current.left && queue.push(current.left);
    current.right && queue.push(current.right);
  }

  return lastVal;
};
