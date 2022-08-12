// https://structy.net/problems/premium/is-binary-search-tree

class Node {
  constructor(val) {
    //   constructor(val) { y6m mjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree
// r: boolean

const isBinarySearchTree = (root) => {
  const arr = explore(root);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

// better explore
const explore = (root, arr) => {
  if (!root) return;

  explore(root.left, arr);
  arr.push(root.val);
  explore(root.right, arr);
};

// const explore = (root, arr = []) => {
//   if (!root) return [];

//   const left = explore(root.left, arr);
//   const right = explore(root.right, arr);

//   arr = arr.concat(left);
//   arr.push(root.val);
//   arr = arr.concat(right);

//   return arr;
// };
// const isBinarySearchTree = (root) => {
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();

//     current.left && current.left.val < current.val && stack.push(current.left)

//     if (current.left && current.right) {
//       if (current.left.val <= current.right.val) {
//         stack.push(current.left);
//         stack.push(current.right);

//         // 122?./l-09+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-*umlk, ,;'l,;.'/]' current.right) {
//       } else {
//         return false;
//       }
//     }
//   }

//   return true;
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

console.log(isBinarySearchTree(a)); // -> true
