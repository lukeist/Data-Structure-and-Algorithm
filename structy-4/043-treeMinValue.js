// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// p: root of binary tree;
// r: number;
//
//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// treeMinValue(a); // -> -2

// const treeMinValue = (root) => {
//   const stack = [root];
//   let min = Infinity;
//   while (stack.length > 0) {
//     const c = stack.pop();
//     min = Math.min(min, c.val);

//     !!c.left && stack.push(c.left);
//     !!c.right && stack.push(c.right);
//   }
//   return min;
// };

const treeMinValue = (root) => {
  if (!root) return Infinity;

  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};
