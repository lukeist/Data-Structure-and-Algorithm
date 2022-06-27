// https://leetcode.com/problems/invert-binary-tree/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// p: root array
// r: array
// e:
// Input: root = [4,2,7,1,3,6,9]
// Output: new root [4,7,2,9,6,3,1]

// Input: root = [2,1,3]
// Output: [2,3,1]

// Input: root = []
// Output: []

// Recursion
var invertTree = function (root) {
  if (!root) return null;

  let curL = root.left;
  let curR = root.right;
  root.right = curL;
  root.left = curR;

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
};

const a = new TreeNode();
const b = new TreeNode();
// const c = new TreeNode();
// const d = new TreeNode();
// const e = new TreeNode();
// const f = new TreeNode();
// const g = new TreeNode();

a.val = 2;
a.left = b;
b.val = 1;
// b.left = c;
// b.val = 1
// b.right = d;
// a.right = e;
// e.val = 3;
// e.left = f;
// e.right = g;

invertTree(a);

// // DFS
// var invertTree = function (root) {
//   console.log(root);

//   if (!root) return null;
//   // console.log(root);
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     const tempR = current.right;
//     const tempL = current.left;
//     current.left = tempR;
//     current.right = tempL;

//     current.right && stack.push(current.right);
//     current.left && stack.push(current.left);
//   }

//   console.log(root);
//   return root;
// };

// // BFS
// var invertTree = function (root) {
//   if (!root) return null;
//   // console.log(root);
//   const queue = [root];

//   while (queue.length > 0) {
//     const current = queue.shift();

//     const curL = current.left;
//     const curR = current.right;
//     current.left = curR;
//     current.right = curL;

//     current.right && queue.push(current.right);
//     current.left && queue.push(current.left);
//   }

//   return root;
// };
