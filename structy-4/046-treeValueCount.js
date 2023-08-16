// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// p: number, root of binary treeValueCount
// r: number
//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

// // iterative: O(nodes) O(nodes)
// const treeValueCount = (root, target) => {
//   if (!root) return 0;
//   const stack = [root];
//   let count = 0;

//   while (stack.length > 0) {
//     const c = stack.pop();
//     c.val === target && count++;

//     c.left && stack.push(c.left);
//     c.right && stack.push(c.right);
//   }

//   return count;
// };

// recursive: O(nodes) O(nodes)
// const treeValueCount = (root, target) => {
//   let count = 0;

//   const dfsCount = (root, target) => {
//     if (!root) return 0;
//     if (root.val === target) count++;

//     dfsCount(root.left, target);
//     dfsCount(root.right, target);
//   }

//   dfsCount(root, target);

//   return count;
// };

// recursive 2:
const treeValueCount = (root, target) => {
  if (!root) return 0;
  const match = root.val === target ? 1 : 0;

  return (
    match +
    treeValueCount(root.left, target) +
    treeValueCount(root.right, target)
  );
};
