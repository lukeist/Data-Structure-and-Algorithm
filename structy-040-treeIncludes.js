// https://structy.net/problems/tree-includes

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

// p: root of bi-tree
// r: boolean

// dfs: recursion
const treeIncludes = (root, target) => {
  if (!root) return false;

  if (root.val === target) return true;

  if (treeIncludes(root.right, target)) return true;
  if (treeIncludes(root.left, target)) return true;

  return false;
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

treeIncludes(a, "e"); // -> true

// // bfs
// const treeIncludes = (root, target) => {
//     if (!root) return false;
//     const queue = [root];

//     while (queue.length > 0) {
//       let current = queue.shift();

//       if (current.val === target) return true;

//       current.right && queue.push(current.right);
//       current.left && queue.push(current.left);
//     }

//     return false;
//   };
