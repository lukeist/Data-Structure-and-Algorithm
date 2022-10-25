// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: root of bi tree

//      a                     a
//    /    \                /    \
//   b      c              c      b
//  / \      \            /     /   \
// d   e      f         f      e     d
//    / \                     / \
//    g  h                   h   g

// iterative O(n) O(n)
const flipTree = (root) => {
  const stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();

    let left = current.left;
    let right = current.right;

    current.left = right;
    current.right = left;

    current.left && stack.push(current.left);
    current.right && stack.push(current.right);
  }

  return root;
};
// // recursive O(nodes) O(nodes)
// const flipTree = (root) => {
//   if (!root) return null;

//   let right = flipTree(root.right);
//   let left = flipTree(root.left);
//   root.left = right;
//   root.right = left;

//   return root;
// };
