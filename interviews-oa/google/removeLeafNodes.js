// For a rooted tree with any arbitary number of children for each node,
// not necessarily n-ary tree.
// Remove all the leaf nodes, and store them in a list, this would create
// new leaf nodes. Repeat untill all the nodes are removed
// Conditions : Freshly created leaf nodes(node whose children are removed)
// should not be removed just after its children are removed, unless
// there's no other option for us, then we can remove it

class Nodes {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

//                                   1
//                         /   /   /    \         \
//                        2   3   4      5          6
//                     / / \      |    /   \      / \ \
//                   7  8  9    10  11   12     13 14 15
//                      |
//                     16
const a = new Nodes(1);
const b = new Nodes(2);
const c = new Nodes(3);
const d = new Nodes(4);
const e = new Nodes(5);
const f = new Nodes(6);
const g = new Nodes(7);
const h = new Nodes(8);
const i = new Nodes(9);
const j = new Nodes(10);
const k = new Nodes(11);
const l = new Nodes(12);
const m = new Nodes(13);
const n = new Nodes(14);
const o = new Nodes(15);
const z = new Nodes(16);

//                                   1
//                         /   /   /    \         \
//                        2   3   4      5          6
//                     / / \      |    /   \      / \ \
//                   7  8  9    10  11   12     13 14 15
//                      |
//                     16

a.children.push(b);
a.children.push(c);
a.children.push(d);
a.children.push(e);
a.children.push(f);
b.children.push(g);
b.children.push(h);
b.children.push(i);
d.children.push(j);
e.children.push(k);
e.children.push(l);
f.children.push(m);
f.children.push(n);
f.children.push(o);
h.children.push(z);
// console.log(a);

//                                   1
//                         /   /   /    \         \
//                        2   3   4      5          6 root
//                     / / \      |    /   \      / \  \
//                   7  8  9    10  11   12    13c 14c 15c children
//                      |
//                     16
const removeLeafNodes = (root) => {
  if (!root) return [];
  let result = [];

  // dfs to get only leaf nodes
  const dfs = (node) => {
    if (node.children.length === 0) {
      result.push(node.val);
      return null;
    }

    node.children = node.children.filter((c) => dfs(c) !== null);
    console.log(result);
  };

  // keep running dfs until root has no children
  while (root.children.length !== 0) dfs(root);

  return result;
};

console.log(removeLeafNodes(a));
