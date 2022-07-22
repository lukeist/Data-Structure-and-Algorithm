// https://structy.net/problems/premium/tree-path-finder

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: root of bi tree & val (str/num)
// r: arr / null

// // dfs recursion better //////////////////////////////////////////////////// but have no idea why it works
const pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  const rightPath = pathFinder(root.right, target);
  const leftPath = pathFinder(root.left, target);

  if (rightPath) rightPath.unshift(root.val);
  if (leftPath) leftPath.unshift(root.val);

  console.log(leftPath || rightPath);
  return leftPath || rightPath;
};

// ///////////////////////////// alvin's solution
// const pathFinder = (root, target) => {
//   if (!root) return null;
//   if (root.val === target) return [root.val];

//   const rightPath = pathFinder(root.right, target);
//   if (rightPath) {
//     rightPath.unshift(root.val);
//     return rightPath;
//   }

//   const leftPath = pathFinder(root.left, target);
//   if (leftPath) {
//     leftPath.unshift(root.val);
//     return leftPath;
//   }

//   return null;
// };

// // dfs recusion 2 NOT WORKING
// const pathFinder = (root, target, arr = []) => {
//   if (!root) return null;
//   if (root.val === target) arr.push(target);

//   if (pathFinder(root.right, target, arr)) {
//     arr.push(root.val);
//     root.val = target;
//   }
//   if (pathFinder(root.left, target, arr)) {
//     arr.push(root.val);
//     root.val = target;
//   }
//   //   pathFinder(root.right, target, arr).includes(target) && arr.push(root.val);
//   //   pathFinder(root.left, target, arr).includes(target) && arr.push(root.val);

//   return arr;
// };

// // dfs recursion 1 - WORKING
// const pathFinder = (root, target) => {
//   const arr = [];

//   explore(root, target, arr);

//   return arr.length === 0 ? null : arr.reverse();
// };

// const explore = (root, target, arr) => {
//   if (!root) return null;
//   if (root.val === target) arr.push(target);

//   if (
//     explore(root.right, target, arr) === target ||
//     explore(root.left, target, arr) === target
//   ) {
//     arr.push(root.val);
//     root.val = target;
//   }

//   return root.val;
// };

// // dfs iteration NOT WORKING
// const pathFinder = (root, target) => {
//   const stack = [root];
//   const map = {};

//   while (stack.length > 0) {
//     const current = stack.pop();

//     map[current.val] = [];

//     // if (current.val === "e") return "e";

//     if (current.left) {
//       map[current.val].push(current.left.val);
//       stack.push(current.left);
//     }

//     if (current.right) {
//       map[current.val].push(current.right.val);
//       stack.push(current.right);
//     }

//     // console.log(current);
//   }

//   return map;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(pathFinder(a, "e")); // -> [ 'a', 'b', 'e' ]
// console.log(pathFinder(a, "p")); // -> null
