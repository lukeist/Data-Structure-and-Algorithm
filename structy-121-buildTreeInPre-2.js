class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPre = (
  a1,
  a2,
  startIn = 0,
  endIn = a1.length - 1,
  startPre = 0,
  endPre = a2.length - 1
) => {
  if (startIn > endIn) return null;

  //           l                  root  r
  //   [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
  //     root  l                        r
  //   [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ]
  let iRootPre = startPre;
  let iRootIn = a1.indexOf(a2[iRootPre]);
  let startLeftIn = startIn;
  let endLeftIn = iRootIn - 1;
  let startRightIn = iRootIn + 1;
  let endRightIn = a1.length - 1;

  let iLeftPre = iRootPre + 1;
  let iRightPre = iLeftPre + iRootIn;

  const root = new Node(a2[iRootPre]);
  root.left = buildTreeInPre(
    a1,
    a2,
    startLeftIn,
    endLeftIn,
    iLeftPre,
    iRightPre - 1
  );
  root.right = buildTreeInPre(
    a1,
    a2,
    startRightIn,
    endRightIn,
    iRightPre,
    endPre
  );

  return root;
};

// // p: arr, arr
// // r: root of bi tree
// // [ 'y', 'z', 'x' ],
// // [ 'y', 'x', 'z' ]
// //        y
// //          \
// //            x
// //           /
// //          z
// //    m    x                   n
// // [ 't', 'u', 's', 'q', 'r', 'p' ],
// // [ 'u', 't', 's', 'r', 'q', 'p' ]
// //         i                   j
// //                    u
// //                  /   \
// //                t     s
// //                        \
// //                         r
// //                        / \
// //                      q     p

// // buildTreeInPre(
// //                               i
// //   [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
// //   [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ]
// // );
// // //       a
// // //    /    \
// // //   b      c
// // //  / \      \
// // // d   e      f
// // //    / \
// // //    g  h

// //      lf                  ll   x5   rf   rl
// //   [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
// //     x0    lf                  ll   rf   rl
// //   [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ]
// //
// //        m
// // ["z", "y", "x"],
// //
// // ["y", "z", "x"]

// const buildTreeInPre = (
//   inOrder,
//   preOrder,
//   inOrderStart = 0,
//   inOrderEnd = inOrder.length - 1,
//   preOrderStart = 0,
//   preOrderEnd = preOrder.length - 1
// ) => {
//   if (inOrderEnd < inOrderStart) return null;
//   const value = preOrder[preOrderStart];
//   const root = new Node(value);
//   const mid = inOrder.indexOf(value);
//   const leftSize = mid - inOrderStart;
//   root.left = buildTreeInPre(
//     inOrder,
//     preOrder,
//     inOrderStart,
//     mid - 1,
//     preOrderStart + 1,
//     preOrderStart + leftSize
//   );
//   root.right = buildTreeInPre(
//     inOrder,
//     preOrder,
//     mid + 1,
//     inOrderEnd,
//     preOrderStart + leftSize + 1,
//     preOrderEnd
//   );
//   return root;
// };

// // const buildTreeInPre = (
// //   inOrder,
// //   preOrder,
// //   firstIn = 0,
// //   lastIn = inOrder.length - 1,
// //   firstPre = 0,
// //   lastPre = preOrder.length - 1
// // ) => {
// //   if (firstIn > lastIn) return null;
// //   if (firstPre > lastPre) return null;

// //   const root = new Node(preOrder[firstPre]);
// //   const mid = inOrder.indexOf(root.val);

// //   root.left = buildTreeInPre(
// //     inOrder,
// //     preOrder,
// //     0, // 0
// //     mid - 1, // 0
// //     firstPre + 1, // 0 + 1
// //     firstPre + mid // 0 + 1
// //   );
// //   root.right = buildTreeInPre(
// //     inOrder,
// //     preOrder,
// //     mid + 1, // 1 + 1
// //     lastIn, // 2
// //     firstPre + mid + 1, // 0 + 1 + 1
// //     lastPre // 2
// //   );

// //   return root;
// // };

// //
// // const buildTreeInPre = (inOrder, preOrder) => {
// //   if (inOrder.length === 0 || preOrder.length === 0) return null;
// //   const rootVal = preOrder[0];
// //   const indexIn = inOrder.indexOf(rootVal);
// //   const root = new Node(rootVal);

// //   const leftIn = inOrder.slice(0, indexIn);
// //   const rightIn = inOrder.slice(indexIn + 1);
// //   const leftPre = preOrder.slice(1, leftIn.length + 1);
// //   const rightPre = preOrder.slice(leftIn.length + 1);

// //   root.left = buildTreeInPre(leftIn, leftPre);
// //   root.right = buildTreeInPre(rightIn, rightPre);

// //   return root;
// // };

console.log(buildTreeInPre(["z", "y", "x"], ["y", "z", "x"]));
//       y
//    /    \
//   z      x
