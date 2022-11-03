class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: arr, arr
// r: root of bi tree
// [ 'y', 'z', 'x' ],
// [ 'y', 'x', 'z' ]
//        y
//          \
//            x
//           /
//          z
//         i
// [ 't', 'u', 's', 'q', 'r', 'p' ],
// [ 'u', 't', 's', 'r', 'q', 'p' ]
//         i
//                    u
//                  /   \
//                t     s
//                        \
//                         r
//                        / \
//                      q     p

const buildTreeInPre = (
  inOrder,
  preOrder,
  indexIn = inOrder.indexOf(
    preOrder[0],
    (firstIn = 0),
    (lastIn = inOrder.length - 1),
    (firstPre = 0),
    (lastPre = preOrder.length - 1)
  )
) => {
  const root = new Node(preOrder[indexIn]);

  const leftInLen = indexIn;
  const rightInLen = inOrder.length - indexIn;

  //   const leftPreLen = leftInLen.length + 1);
  //   const rightPre = preOrder.slice(leftIn.length + 1);

  root.left = buildTreeInPre(inOrder, preOrder);
  root.right = buildTreeInPre(inOrder, rightPre);

  return root;
};

//
// const buildTreeInPre = (inOrder, preOrder) => {
//   if (inOrder.length === 0 || preOrder.length === 0) return null;
//   const rootVal = preOrder[0];
//   const indexIn = inOrder.indexOf(rootVal);
//   const root = new Node(rootVal);

//   const leftIn = inOrder.slice(0, indexIn);
//   const rightIn = inOrder.slice(indexIn + 1);
//   const leftPre = preOrder.slice(1, leftIn.length + 1);
//   const rightPre = preOrder.slice(leftIn.length + 1);

//   root.left = buildTreeInPre(leftIn, leftPre);
//   root.right = buildTreeInPre(rightIn, rightPre);

//   return root;
// };

console.log(buildTreeInPre(["z", "y", "x"], ["y", "z", "x"]));
//       y
//    /    \
//   z      x
