// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bi treeMinValue
// r: num
// recursion O(nodes) O(nodes)
const treeMinValue = (root) => {
  if (!root) return Infinity;

  const left = treeMinValue(root.left);
  const right = treeMinValue(root.right);

  return Math.min(root.val, left, right);
};
// // iteration O(nodes) O(nodes)
// const treeMinValue = (root) => {
//   const stack = [root];
//   let min = Infinity;

//   while (stack.length > 0) {
//     const current = stack.pop();
//     min = Math.min(current.val, min);

//     current.left && stack.push(current.left);
//     current.right && stack.push(current.right);
//   }

//   return min;
// };
