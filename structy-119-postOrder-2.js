// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: arr

//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g

const postOrder = (root) => {
  if (!root) return [];

  const left = postOrder(root.left);
  const right = postOrder(root.right);

  return [...left, ...right, root.val];
};
