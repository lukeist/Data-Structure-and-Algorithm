// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: num

// recursion O(n) O(n)
const treeSum = (root) => {
  if (!root) return 0;

  const left = treeSum(root.left);
  const right = treeSum(root.right);

  return root.val + left + right;
};

// // iteration O(n) O(1)
// const treeSum = (root) => {
//   if (!root) return 0;
//   const stack = [root];
//   let count = 0;

//   while (stack.length > 0) {
//     const current = stack.pop();

//     count += current.val;
//     current.left && stack.push(current.left);
//     current.right && stack.push(current.right);
//   }

//   return count;
// };

module.exports = {
  treeSum,
};
