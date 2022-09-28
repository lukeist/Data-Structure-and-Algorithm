// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi tree, num
// r: num

// dfs recursion O(nodes) O(nodes)
const treeValueCount = (root, target) => {
  if (!root) return 0;
  let count = 0;

  const left = treeValueCount(root.left, target);
  const right = treeValueCount(root.right, target);

  root.val === target && count++;

  return count + left + right;
};

// // dfs iteration O(nodes) O(1)
// const treeValueCount = (root, target) => {
//   if (!root) return 0;
//   const stack = [root];
//   let count = 0;

//   while (stack.length > 0) {
//     const current = stack.pop();

//     current.val === target && count++;

//     current.left && stack.push(current.left);
//     current.right && stack.push(current.right);
//   }

//   return count;
// };
