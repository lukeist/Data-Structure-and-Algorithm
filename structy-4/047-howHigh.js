// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root binary tree;
// r: number;
// e:
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//

const howHigh = (node) => {
  if (!node) return -1;

  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};
