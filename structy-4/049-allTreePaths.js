// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of binary tree;
// r: 2d array;
// e:

//                            a
//                          /    \
//                        b      c [[i,f,c]]
//                      /  \      \
//                    d    e      f [[i,f]]
//                         / \    /  \
//                [[g]]g  [[h]]h   i [[i]]  null []
//                              /   \
//                            null []  null []
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e', 'g' ],
//   [ 'a', 'b', 'e', 'h' ],
//   [ 'a', 'c', 'f', 'i' ]
// ]

const allTreePaths = (root) => {
  const arrays = _allTreePaths(root);

  for (let a of arrays) {
    a.reverse();
  }

  return arrays;
};

const _allTreePaths = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  const left = _allTreePaths(root.left);
  const right = _allTreePaths(root.right);

  const result = [];
  for (let l of left) {
    l.push(root.val);
    result.push(l);
  }

  for (let r of right) {
    r.push(root.val);
    result.push(r);
  }

  return result;
};
