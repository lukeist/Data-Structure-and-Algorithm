class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//      e         e
//      s         s
//      r         r
//   [ 'z', 'y', 'x' ],
//      r    l     r
//   [ 'y', 'z', 'x' ]

//
// p: array, array;
// r: root of binary tree;
// e:
//    0    1    2    3    4    5    6    7
//    s    l                   o    r    e
// [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
//    s                                  e
//
//         s                   e
//    o    l                        r
// [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ]
//
//       a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

//
//     s         e
//     o         r
//  [ 'y', 'z', 'x' ],
//
//     s    l      e
//     o    r
//  [ 'y', 'x', 'z' ]
// //       y
// //        \
// //         x
// //        /
// //       z
const buildTreeInPre = (
  inOrder,
  preOrder,
  rootIndexPre = 0,
  startIn = 0,
  endIn = inOrder.length - 1,
  startPre = 0,
  endPre = preOrder.length - 1
) => {
  if (startIn === endIn) return new Node(preOrder[rootIndexPre]);
  if (rootIndexPre < startPre || endPre < rootIndexPre) return null;

  const rootValue = preOrder[rootIndexPre];
  const root = new Node(rootValue);

  const rootIndexIn = inOrder.indexOf(rootValue);
  const leftLen = rootIndexIn - startIn;
  const leftRootIndexPre = rootIndexPre + 1;
  const rightRootIndexPre = rootIndexPre + leftLen + 1;

  root.left = buildTreeInPre(
    inOrder,
    preOrder,
    leftRootIndexPre,
    startIn,
    rootIndexIn - 1,
    leftRootIndexPre,
    rightRootIndexPre - 1
  );
  root.right = buildTreeInPre(
    inOrder,
    preOrder,
    rightRootIndexPre,
    rootIndexIn + 1,
    endIn,
    rightRootIndexPre,
    endPre
  );

  return root;
};
