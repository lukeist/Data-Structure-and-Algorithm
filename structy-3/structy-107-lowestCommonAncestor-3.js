// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: bi tree, val, val
// r: val
// e:
//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

const lowestCommonAncestor = (root, val1, val2) => {
  const v1 = getArr(root, val1);
  const v2 = getArr(root, val2);

  let i = v1.length - 1,
    j = v2.length - 1;
  while (v1[i] === v2[j]) {
    r = v1[i];
    i--;
    j--;
  }

  return r;
};

const getArr = (root, val) => {
  if (!root) return null;
  if (root.val === val) return [val];

  const left = getArr(root.left, val);
  const right = getArr(root.right, val);

  if (left) {
    left.push(root.val);
    return left;
  }

  if (right) {
    right.push(root.val);
    return right;
  }
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
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

console.log(lowestCommonAncestor(a, "d", "h")); // b
// // p: root of bi tree, num, num;
// // r: val (num/str)
// //

// const lowestCommonAncestor = (root, val1, val2) => {
//   const a1 = getA(root, val1).reverse();
//   const a2 = getA(root, val2).reverse();

//   let val;
//   let i = 0;
//   while (a1[i] === a2[i] && i < Math.min(a1.length, a2.length)) {
//     val = a1[i];
//     i++;
//   }

//   return val;
// };

// const getA = (root, val) => {
//   if (!root) return null;
//   if (root.val === val) return [val];
//   const left = getA(root.left, val);
//   const right = getA(root.right, val);
//   if (left) {
//     left.push(root.val);
//     return left;
//   }
//   if (right) {
//     right.push(root.val);
//     return right;
//   }
//   return null;
// };

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;

// console.log(lowestCommonAncestor(a, "d", "h")); // b
