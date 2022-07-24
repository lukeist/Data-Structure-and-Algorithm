class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree & (num)
// r: num+
/ dfs alvins recursion
const treeValueCount = (root, target) => {
  if (!root) return 0;
  const match = root.val !== target ? 0 : 1;

  return (
    match +
    treeValueCount(root.right, target) +
    treeValueCount(root.left, target)
  );
};

// // dfs recursion
// const treeValueCount = (root, target) => {
//   if (!root) return 0;
//   if (root.val !== target) root.val = 0;
//   if (root.val === target) root.val = 1;

//   return (
//     root.val +
//     treeValueCount(root.right, target) +
//     treeValueCount(root.left, target)
//   );
// };

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

console.log(treeValueCount(a, 6)); // -> 3

// // dfs iteration
// const treeValueCount = (root, target) => {
//     if (!root) return 0;

//     const stack = [root];
//     let count = 0;

//     while (stack.length > 0) {
//       const current = stack.pop();

//       current.val === target && count++;

//       current.right && stack.push(current.right);
//       current.left && stack.push(current.left);
//     }

//     return count;
//   };
