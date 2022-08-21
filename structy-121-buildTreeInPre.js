// https://structy.net/problems/premium/build-tree-in-pre

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: 2 arrs
// r: root bi tree

const buildTreeInPre = (inOrder, preOrder) => {
  if (inOrder.length === 0) return null;

  const rootVal = preOrder[0];
  const indexOfRootValInOrder = inOrder.indexOf(rootVal);

  const leftInOrder = inOrder.slice(0, indexOfRootValInOrder);
  const rightInOrder = inOrder.slice(indexOfRootValInOrder + 1);

  const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1);
  const rightPreOrder = preOrder.slice(1 + leftInOrder.length);

  const root = new Node(rootVal);
  root.left = buildTreeInPre(leftInOrder, leftPreOrder);
  root.right = buildTreeInPre(rightInOrder, rightPreOrder);

  return root;
};

// e:
buildTreeInPre(
  ["d", "b", "g", "e", "h", "a", "c", "f"],
  ["a", "b", "d", "e", "g", "h", "c", "f"]
);

// ["d", "b", "g", "e", "h", // "a", // "c", "f"],
// ["a", // "b", "d", "e", "g", "h", "c", "f"]

//       a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h
