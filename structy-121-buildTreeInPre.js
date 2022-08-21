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

// time O(n) space O(n)
const buildTreeInPre = (
  inO,
  preO,
  rI = [0, inO.length - 1],
  rP = [0, preO.length - 1]
) => {
  const [firstIinO, lastIinO] = rI;
  const [firstIpreO, lastIpreO] = rP;

  if (lastIinO === -1) return null;
  if (lastIinO === -1) return null;

  const rootVal = preO[firstIpreO];
  const iOfrootValinO = inO.indexOf(rootVal);

  const rangeLeftIn = [firstIinO, iOfrootValinO - 1];
  const rangeRightIn = [iOfrootValinO + 1, inO.length - 1];

  const rangeLeftPre = [firstIpreO + 1, firstIpreO + 1 + iOfrootValinO - 1];
  const rangeRightPre = [firstIpreO + 1 + iOfrootValinO - 1 + 1, lastIpreO];

  const root = new Node(rootVal);

  root.left = buildTreeInPre(inO, preO, rangeLeftIn, rangeRightIn);
  root.right = buildTreeInPre(inO, preO, rangeLeftPre, rangeRightPre);

  return root;
};

// ["d", "b", "g", "e", "h", // "a", // "c", "f"],      inOrder
// ["a", // "b", "d", "e", "g", "h", // "c", "f"]       preOrder

// dbgeh/a/cf
// 01234/5/67
// a/bdegh/cf
// 0/12345/67

// d/b/geh/a/cf
// 0/1/234/-/67
// a/b/degh/cf
// -/1/2345/67

//
//          /    \
//      1,1       6,6
//   /     \      \
// 2,0      3,3      7,7
//    / \
//  4,2  5,4

//       a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

// time O(n2) space O(n2)
// const buildTreeInPre = (inOrder, preOrder) => {
//   if (inOrder.length === 0) return null;

//   const rootVal = preOrder[0];
//   const indexOfRootValInOrder = inOrder.indexOf(rootVal);

//   const leftInOrder = inOrder.slice(0, indexOfRootValInOrder);
//   const rightInOrder = inOrder.slice(indexOfRootValInOrder + 1);

//   const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1);
//   const rightPreOrder = preOrder.slice(1 + leftInOrder.length);

//   const root = new Node(rootVal);
//   root.left = buildTreeInPre(leftInOrder, leftPreOrder);
//   root.right = buildTreeInPre(rightInOrder, rightPreOrder);

//   return root;
// };

// e:
console.log(
  buildTreeInPre(
    ["d", "b", "g", "e", "h", "a", "c", "f"],
    ["a", "b", "d", "e", "g", "h", "c", "f"]
  )
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

// "a", "b", "d", "e", "g", "h", "c", "f"
//  "b", "d", "e", "g", "h" // "c", "f"
//   "d", // "e", "g", "h" "
