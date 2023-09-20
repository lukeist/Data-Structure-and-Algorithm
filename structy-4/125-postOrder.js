// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of binary tree;
// r: array;
// e:
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g
// [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ]

const postOrder = (root) => {
  const result = [];

  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    dfs(root.right);
    result.push(root.val);
  };

  dfs(root);
  return result;
};
