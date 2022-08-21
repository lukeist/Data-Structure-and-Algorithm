// https://structy.net/problems/premium/build-tree-in-post

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: 2 arrs
// r: root of bi tree
// const buildTreeInPost = (inOrder, postOrder) => {
//   // todo
// };

// console.log(
//   buildTreeInPost(
//     ["d", "b", "e", "a", "f", "c", "g"],
//     ["d", "e", "b", "f", "g", "c", "a"]
//   )
// );
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g
// ["d", "b", "e", // "a", // "f", "c", "g"],
// ["d", "e", "b", // "f", "g", "c", // "a"]

// buildTreeInPost(
//     [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
//     [ 'd', 'g', 'h', 'e', 'b', 'f', 'c', 'a' ]
//   );
//
// 1. root = last node of postOrder
// 2. slice inorder into 3: left - root - right
// 3. base on 2, slice postorder into 3: left - right - root // for next recursion
//      [ 'd', 'b', 'g', 'e', 'h', // 'a', // 'c', 'f' ],
//      [ 'd', 'g', 'h', 'e', 'b', // 'f', 'c', // 'a' ]
// 4. last node of left & right = root's left & right

// 5. repeat:
//      [ 'd', // 'b', // 'g', 'e', 'h']    ['c' // 'f']
//      [ 'd', // 'g', 'h', 'e', // 'b']    ['f' // 'c']
const buildTreeInPost = (inOrder, postOrder) => {
  if (inOrder.length === 0 || postOrder.length === 0) return null;

  // 1.
  const rootVal = postOrder[postOrder.length - 1];
  const root = new Node(rootVal);

  // 2.
  const rootIndexInOrder = inOrder.indexOf(rootVal);
  const leftInOrder = inOrder.slice(0, rootIndexInOrder);
  const rightInOrder = inOrder.slice(rootIndexInOrder + 1);
  console.log(leftInOrder, rightInOrder);

  // 3.
  const leftPostOrder = postOrder.slice(0, leftInOrder.length);
  const rightPostOrder = postOrder.slice(
    leftInOrder.length,
    leftInOrder.length + rightInOrder.length
  );

  root.left = buildTreeInPost(leftInOrder, leftPostOrder);
  root.right = buildTreeInPost(rightInOrder, rightPostOrder);

  return root;
};

console.log(
  buildTreeInPost(
    ["d", "b", "e", "a", "f", "c", "g"],
    ["d", "e", "b", "f", "g", "c", "a"]
  )
);
//                                     a
//  [ 'd', 'b', 'g', 'e', 'h']      /    \        ['c', 'f']
//                                  b     c
//                                / \      \
//                               d   e      f
//                                  / \
//                                 g   h

//   //      a
//   //    /    \
//   //   b      c
//   //  / \      \
//   // d   e      f
//   //    / \
//   //    g  h
