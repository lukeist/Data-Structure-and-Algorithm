// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: num

// recursion O(nodes) O(nodes)
const maxPathSum = (root) => {
  if (!root) return -Infinity;

  const left = maxPathSum(root.left);
  const right = maxPathSum(root.right);

  return !root.left && !root.right
    ? root.val
    : root.val + Math.max(left, right);
};

module.exports = {
  maxPathSum,
};
