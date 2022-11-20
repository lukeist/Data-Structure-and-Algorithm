// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi search tree, num
// r: boolean

// recursion O(logn) O(1)
const binarySearchTreeIncludes = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  //   let left, right;
  //   target < root.val && (left = binarySearchTreeIncludes(root.left, target));
  //   root.val <= target && (right = binarySearchTreeIncludes(root.right, target));

  //   if (left || right) return true;
  //   return false;

  const left = binarySearchTreeIncludes(root.left, target);
  const right = binarySearchTreeIncludes(root.right, target);

  return target < root.val ? left : right;
};

// // iteration O(logn) O(n)
// const binarySearchTreeIncludes = (root, target) => {
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();

//     if (current.val === target) return true

//     current.left && target < current.val && stack.push(current.left);
//     current.right && current.val <= target && stack.push(current.right);
//   }

//   return false;
// };
