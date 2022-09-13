// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree
// r: boolean

// dfs recursion O(nodes) O(n)
const treeIncludes = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  const left = treeIncludes(root.left, target);
  const right = treeIncludes(root.right, target);

  return left || right;
};

// // dfs recursion O(nodes) O(n)
// const treeIncludes = (root, target) => {
//   if (!root) return false;
//   if (root.val === target) return true;

//   const left = treeIncludes(root.left, target);
//   const right = treeIncludes(root.right, target);

//   if (left || right) return true;

//   return false;
// };

// // dfs iteration O(nodes) O(n)
// const treeIncludes = (root, target) => {
//   if (!root) return false;
//   const stack = [root]

//   while (stack.length > 0) {
//     const current = stack.pop()

//     if (current.val === target) return true;
//     current.left && stack.push(current.left);
//     current.right && stack.push(current.right);
//   }

//   return false;
// };

module.exports = {
  treeIncludes,
};
