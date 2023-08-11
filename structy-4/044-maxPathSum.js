// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of binary tree;
// r: number
// e:
//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1
// => 18

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//   -1        -2
//

// recursive O(nodes) O(nodes)
const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};
