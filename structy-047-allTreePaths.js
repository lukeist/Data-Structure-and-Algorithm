// https://structy.net/problems/premium/all-tree-paths

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

// p: root of bi tree
// r: array matrix m x n

const allTreePaths = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  const left = allTreePaths(root.left);
  const right = allTreePaths(root.right);

  const arrs = [...left, ...right];

  for (const arr of arrs) {
    arr.unshift(root.val);
  }

  return arrs;
};

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

console.log(allTreePaths(a)); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]
[
  "a",
  ["b", ["d", [], "d", []], "b", ["e", [], "e", []]],
  "a",
  ["c", [], "c", ["f", [], "f", []]],
];

// iteration NOT WORKING
// const allTreePaths = (root) => {
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();

//     console.log(current.val);

//     current.left && stack.push(current.left);
//     current.right && stack.push(current.right);
//   }

//   return stack;
// };
