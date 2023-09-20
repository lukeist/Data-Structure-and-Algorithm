class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: array, array;
// r: root of binary tree;
// e:
//   0     1    2    3    4    5    6
//    s         e         s         e
//         l         x         r
// [ 'd', 'b', 'e', 'a', 'f', 'c', 'g' ],
//
//    s         e    s         e
//              l    .         r    x
// [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ]
//
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g
const buildTreeInPost = (
  inOrder,
  postOrder,
  rootIndexPost = postOrder.length - 1,
  startIn = 0,
  endIn = inOrder.length - 1,
  startPost = 0,
  endPost = postOrder.length - 1
) => {
  if (startIn > endIn) return null;
  let rootVal = postOrder[rootIndexPost];
  let rootIndexIn = inOrder.indexOf(rootVal);
  let rightLen = endIn - rootIndexIn;

  let root = new Node(rootVal);
  root.left = buildTreeInPost(
    inOrder,
    postOrder,
    rootIndexPost - rightLen - 1,
    startIn,
    rootIndexIn - 1,
    startPost,
    rootIndexPost - rightLen - 1
  );
  root.right = buildTreeInPost(
    inOrder,
    postOrder,
    rootIndexPost - 1,
    rootIndexIn + 1,
    endIn,
    rootIndexPost - rightLen,
    rootIndexPost - 1
  );

  return root;
};

console.log(
  buildTreeInPost(
    ["d", "b", "e", "a", "f", "c", "g"],
    ["d", "e", "b", "f", "g", "c", "a"]
  )
);
// [ 'y', 'x', 'z' ],
// [ 'y', 'z']
// const buildTreeInPost = (inOrder, postOrder) => {
//   if (postOrder.length === 1) return new Node(inOrder[0]);
//   if (postOrder.length === 0) return null;
//   let rootIndexPost = postOrder.length - 1;
//   let rootVal = postOrder[rootIndexPost];

//   let rootIndexIn = inOrder.indexOf(rootVal);
//   let rightLen = inOrder.length - 1 - rootIndexIn;

//   let root = new Node(rootVal);
//   root.left = buildTreeInPost(inOrder.slice(0, rootIndexIn), postOrder.slice(0, postOrder.length - 1 - rightLen));
//   root.right = buildTreeInPost(inOrder.slice(rootIndexIn + 1), postOrder.slice(postOrder.length - 1 - rightLen, postOrder.length - 1))

//   return root;
// };
