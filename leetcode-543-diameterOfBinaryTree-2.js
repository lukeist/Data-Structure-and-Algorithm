// p: root of bi tree
// r: num (int)
// e:           a
//            /   0
//           b
//

/////////////////////////////// 2
var diameterOfBinaryTree = function (root) {
  let max = 0;
  let count = (node) => {
    if (!node) return 0;
    const left = count(node.left);
    const right = count(node.right);
    max = Math.max(max, left + right);
    return 1 + Math.max(left, right);
  };

  count(root);
  return max;
};

////////////////////// 1
// var diameterOfBinaryTree = function(root) {
//     const stack = [root];
//     let max = 0;
//     while (stack.length > 0) {
//         const c = stack.pop();

//         const left = count(c.left);
//         const right = count(c.right);
//         max = Math.max(max, left + right)

//         c.left && stack.push(c.left);
//         c.right && stack.push(c.right);
//     }

//     return max;
// };

// const count = (node) => {
//     if (!node) return 0;
//     return 1 + Math.max(count(node.left), count(node.right));
// }
