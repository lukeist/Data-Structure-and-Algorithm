// https://structy.net/problems/premium/lefty-nodes

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree
// r: arr

//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

// // dfs recursion BETTER
const leftyNodes = (root) => {
  const vals = [];

  const explore = (root, level) => {
    if (!root) return;

    vals.length === level && vals.push(root.val);

    explore(root.left, level + 1);
    explore(root.right, level + 1);
  };

  explore(root, 0);

  return vals;
};
// // dfs recursion
// const leftyNodes = (root) => {
//   const arr = [];
//   const result = [];
//   explore(root, arr);

//   for (const a of arr) {
//     result.push(a[0]);
//   }

//   return result;
// };

// const explore = (root, arr, i = 0) => {
//   if (!root) return [];

//   arr[i] === undefined && (arr[i] = []);
//   arr[i].push(root.val);

//   explore(root.left, arr, i + 1);
//   explore(root.right, arr, i + 1);

//   return arr;
// };

// // bfs time O(n) space O(n)
// const leftyNodes = (root) => {
//   const queue = [[root, 0]];
//   const arrs = [];
//   const result = [];

//   while (queue.length > 0) {
//     const [current, level] = queue.shift();

//     if (arrs[level] === undefined) arrs[level] = [];
//     arrs[level].push(current.val);

//     current.left && queue.push([current.left, level + 1]);
//     current.right && queue.push([current.right, level + 1]);
//   }

//   for (const arr of arrs) {
//     result.push(arr[0]);
//   }

//   return result;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

leftyNodes(a); // [ 'a', 'b', 'd', 'g' ]
