// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12
//
// treeValueCount(a,  6); // -> 3

// p: root of bi tree; val(num/str);
// r: num
//

const treeValueCount = (root, target) => {
  if (!root) return 0;
  let count = root.val === target ? 1 : 0;

  const left = treeValueCount(root.left, target);
  const right = treeValueCount(root.right, target);

  return count + left + right;
};

// const treeValueCount = (root, target) => {
//   if (!root) return 0;
//   const stack = [root];
//   let count = 0;
//   while (stack.length > 0) {
//     const c = stack.pop();
//     c.val === target && (count++);

//     c.left && stack.push(c.left);
//     c.right && stack.push(c.right);
//   }

//   return count;
// };

module.exports = {
  treeValueCount,
};
