// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//       3
//    /    \
//   11     10
//  / \      \
// 4   -2     1

// p: root of bi tree;
// r: number/string;
// e:

// bfs
const bottomRightValue = (root) => {
  if (!root) return null;
  const queue = [root];
  let val;
  while (!!queue.length) {
    const c = queue.shift();
    val = c.val;
    !!c.left && queue.push(c.left);
    !!c.right && queue.push(c.right);
  }
  return val;
};
