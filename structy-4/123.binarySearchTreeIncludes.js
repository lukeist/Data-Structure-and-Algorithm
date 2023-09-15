// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bniary search tree, number;
// r: boolean;
// e:
//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19

// const binarySearchTreeIncludes = (root, target) => {
//   if (!root) return false;
//   const stack = [root];
//   while (stack.length > 0) {
//     const c = stack.pop();
//     if (c.val === target) return true;
//     c.val > target && !!c.left && stack.push(c.left);
//     c.val < target && !!c.right && stack.push(c.right);
//   }

//   return false;
// };

const binarySearchTreeIncludes = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  if (target < root.val) return binarySearchTreeIncludes(root.left, target);
  if (target > root.val) return binarySearchTreeIncludes(root.right, target);
};
