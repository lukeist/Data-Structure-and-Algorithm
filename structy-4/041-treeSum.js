// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: number;
// e:
//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1
// => 21
// 19
// [4,-2]

// // O(n) O(n)
// const treeSum = (root) => {
//   if (!root) return 0;
//   const stack = [root];
//   let sum = 0;

//   while (!!stack.length) {
//     const c = stack.pop();
//     sum += c.val;

//     !!c.left && stack.push(c.left);
//     !!c.right && stack.push(c.right);
//   }

//   return sum;
// };

// O(n) O(n)
const treeSum = (root) => {
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};
