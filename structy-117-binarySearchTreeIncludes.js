// https://structy.net/problems/premium/binary-search-tree-includes

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi search tree
// r: boolean

// dfs recursion
const binarySearchTreeIncludes = (root, target) => {
  if (!root) return false;

  if (root.val === target) return true;

  const left = binarySearchTreeIncludes(root.left, target);
  const right = binarySearchTreeIncludes(root.right, target);

  target < root.val ? left : right;

  if (left) return true;
  if (right) return true;

  return false;
};

// // dfs iteration
// const binarySearchTreeIncludes = (root, target) => {
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();

//     if (current.val === target) return true;
//     target < current.val
//       ? current.left && stack.push(current.left)
//       : current.right && stack.push(current.right);
//   }

//   return false;
// };

const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19

console.log(binarySearchTreeIncludes(a, 9)); // -> true
console.log(binarySearchTreeIncludes(a, 15)); // -> false
