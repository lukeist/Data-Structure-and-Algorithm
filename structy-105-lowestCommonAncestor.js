class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root & 2 vals
// r: val (num/str)
const lowestCommonAncestor = (root, v1, v2) => {
  const first = explore(root, v1)[0];
  const second = explore(root, v2)[0];

  let i = 0;
  let val;

  while (first[i] === second[i]) {
    val = first[i];
    i++;
  }

  return val;
};

const explore = (root, v) => {
  if (!root) return [];
  if (root.val === v) return [[v]];

  const left = explore(root.left, v);
  const right = explore(root.right, v);

  // const arrs = [...left, ...right]
  const arrs = left.concat(right);

  arrs.forEach((arr) => arr.unshift(root.val));

  return arrs;
};

// const explore = (root, v1, v2) => {
//   if (!root) return [];
//   if (!root.left && !root.right) return [[root.val]];

//   const left = explore(root.left, v1, v2);
//   const right = explore(root.right, v1, v2);

//   // const arrs = [...left, ...right]
//   const arrs = left.concat(right);

//   arrs.forEach((arr) => arr.unshift(root.val));

//   return arrs;
// };

//   if (root.val === v1) return [[v1]];
//   if (root.val === v2) return [[v2]];
//   const left = explore(root.left, v1, v2);
//   const right = explore(root.right, v1, v2);
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
//[g]g  h[h]
// / \
//[] []
// console.log(lowestCommonAncestor(a, "d", "h")); // b
console.log(lowestCommonAncestor(a, "b", "g")); // b
