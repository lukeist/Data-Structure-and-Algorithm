// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// p: root of binary tree;
// r: root of binary tree;
// e:
//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h
// [de
//      a
//    /    \
//   c      b
//  /      / \
// f       e   d

//       a
//    /    \
//   c      b
//  /     /   \
// f     e    d
//     /  \
//    h    g

// const flipTree = (root) => {
//   if (!root) return null;
//   const stack = [root];

//   while (stack.length > 0) {
//     const c = stack.pop();
//     const left = c.left;
//     const right = c.right;

//     if (!!left) {
//       c.right = left;
//       stack.push(left);
//     } else {
//       c.right = null;
//     }

//     if (!!right) {
//       c.left = right;
//       stack.push(right);
//     } else {
//       c.left = null;
//     }
//   }
//   return root;
// };

const flipTree = (root) => {
  if (!root) return null;
  const left = flipTree(root.left);
  const right = flipTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

module.exports = {
  flipTree,
};
