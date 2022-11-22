class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: arr, arr
// r: root

// [ 'z' ],
// [ 'z',  ]
//       x
//    /    \
//   y      z

const buildTreeInPost = (inOrder, postOrder) => {
  if (!inOrder.length || !postOrder.length) return null;

  const indexRootPo = postOrder.length - 1;
  const indexRPo = indexRootPo - 1;
  const rootVal = postOrder[indexRootPo];
  const indexRootIn = inOrder.indexOf(rootVal);
  const rightLen = inOrder.length - 1 - indexRootIn;
  const indexLPo = indexRPo - rightLen;

  const root = new Node(rootVal);
  // console.log(root);
  root.left = buildTreeInPost(
    inOrder.slice(0, indexRootIn),
    postOrder.slice(0, indexLPo + 1)
  );
  root.right = buildTreeInPost(
    inOrder.slice(indexRootIn + 1),
    postOrder.slice(indexLPo + 1, indexRootPo)
  );

  return root;
};

console.log(
  // buildTreeInPost(
  //   ["d", "b", "g", "e", "h", "a", "c", "f"],
  //   ["d", "g", "h", "e", "b", "f", "c", "a"]
  // )
  buildTreeInPost(["y", "x", "z"], ["y", "z", "x"])
);

// //
// // [ 'd', 'b', 'e', /'a',/ 'f',// 'c',// 'g' ],
// // [ 'd', 'e', 'b', 'f', 'g', //'c', /'a' ]
// //      a
// //    /    \
// //   b      c
// //  / \    / \
// // d   e  f   g

// // [ 'd', 'b', 'g', 'e', 'h',/ 'a', / 'c', // 'f' ],
// // [ 'd', 'g', 'h', 'e', 'b', 'f', //'c', /'a' ]

// //      a
// //    /    \
// //   b      c
// //  / \      \
// // d   e      f
// //    / \
// //    g  h

// // recu O(n^2) O(n^2)
// const buildTreeInPost = (inOrder, postOrder) => {
//   if (inOrder.length === 0 || postOrder.length === 0) return null;

//   const rootVal = postOrder[postOrder.length - 1];
//   const root = new Node(rootVal);
//   const indexIn = inOrder.indexOf(rootVal);

//   const leftInOrder = inOrder.slice(0, indexIn);
//   const leftPostOrder = postOrder.slice(0, leftInOrder.length);
//   const rightInOrder = inOrder.slice(indexIn + 1);
//   const rightPostOrder = postOrder.slice(leftInOrder.length, -1);

//   root.left = buildTreeInPost(leftInOrder, leftPostOrder);
//   root.right = buildTreeInPost(rightInOrder, rightPostOrder);

//   return root;
// };

// const buildTreeInPost = (inOrder, postOrder) => {
//   if (inOrder.length === 0 || postOrder.length === 0) return null;

//   const indexPost = postOrder.length - 1;
//   const rootVal = postOrder[indexPost];
//   //   console.log(indexPost);
//   const root = new Node(rootVal);
//   const indexIn = inOrder.indexOf(rootVal);
//   //   const rightInOrderLength = inOrder.length - indexIn;
//   //   const leftIndexPost = postOrder.length - 1 - rightInOrderLength;
//   //                    iI
//   //   [ 'd', 'b', 'e', 'a', 'f', 'c', 'g' ],
//   //                    iML
//   //   [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ]
//   const leftInOrder = inOrder.slice(0, indexIn);
//   const leftPostOrder = postOrder.slice(0, leftInOrder.length);
//   const rightInOrder = inOrder.slice(indexIn + 1);
//   const rightPostOrder = postOrder.slice(leftInOrder.length, indexPost);

//   //   console.log(leftInOrder, leftPostOrder, rightInOrder, rightPostOrder);
//   //   console.log(root);
//   root.left = buildTreeInPost(leftInOrder, leftPostOrder);
//   root.right = buildTreeInPost(rightInOrder, rightPostOrder);

//   return root;
// };

// console.log(
//   buildTreeInPost(
//     ["d", "b", "g", "e", "h", "a", "c", "f"],
//     ["d", "g", "h", "e", "b", "f", "c", "a"]
//   )
// );
