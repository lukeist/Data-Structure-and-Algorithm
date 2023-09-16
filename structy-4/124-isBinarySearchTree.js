// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of a binary tree;
// r: boolean;
// e:
//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19
//
// [3,5,9,12,18,19]
// true
//
//
//      12
//    /   \
//   5     18
//  / \     \
// 3   15     19
//
// false
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(15);
const f = new Node(19);

const isBinarySearchTree = (root) => {
  const arr = [];

  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    arr.push(root.val);
    dfs(root.right);
  };

  dfs(root);
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }

  return true;
};
