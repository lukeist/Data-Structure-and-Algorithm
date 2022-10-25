class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree, val, val;
// r: val (str/num)

// dfs iterative: O(d+h) O(d+h)
const lowestCommonAncestor = (root, val1, val2) => {
  // find paths of both val
  const path1 = findPath(root, val1);
  const path2 = findPath(root, val2);
  console.log(path1, path2);
  let val;

  for (let i = 0; i <= path1.length; i++) {
    if (path1[i] !== path2[i]) return val;
    val = path1[i];
  }
};

const findPath = (root, val) => {
  if (!root) return null;
  if (root.val === val) return [root.val];

  const left = findPath(root.left, val);
  const right = findPath(root.right, val);

  if (left) return [root.val, ...left];
  if (right) return [root.val, ...right];
};

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
// console.log(lowestCommonAncestor(a, "d", "h")); // b
console.log(lowestCommonAncestor(a, "b", "g")); // b)

// // iterative NOT WORKING
// const findPath = (root, val) => {
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();

//     root.left && stack.push(root.left);
//     root.right && stack.push(root.right);
//   }
// }
