// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// // p: binary tree root;
// // r: boolean;
// iterative O(n) O(n)
var isSymmetric = function (root) {
  if (!root) return true;
  const stack = [[root.left, root.right]];

  while (stack.length > 0) {
    const [left, right] = stack.pop();
    if (!left && !right) continue;
    if (!left || !right || left.val !== right.val) return false;
    stack.push([left.left, right.right], [left.right, right.left]);
  }
  return true;
};

// // recursive O(nodes) O(nodes)
// var isSymmetric = function (root) {
//   if (!root) return true;

//   var _isSymmetric = function (left, right) {
//     if (!left && !right) return true;
//     if (!left || !right || left.val !== right.val) return false;

//     return (
//       _isSymmetric(left.left, right.right) &&
//       _isSymmetric(left.right, right.left)
//     );
//   };

//   return _isSymmetric(root.left, root.right);
// };

// // e: 3241423
// //    0231023

// ALL WRONG
// // var isSymmetric = function(root) {
// //   const stack = [root];
// //   while (stack.length > 0) {
// //       const c = stack.pop();

// //   }
// // };

// // 2201220

// var isSymmetric = function (root) {
//   const vals = _isSymmetric(root);
//   let i = 0,
//     j = vals.length - 1;
//   console.log(vals);
//   while (i <= j) {
//     if (vals[i] !== vals[j]) return false;
//     i++;
//     j--;
//   }

//   return true;
// };

// var _isSymmetric = function (root) {
//   if (!root) return [];
//   if (!root.left && !root.right) return [root.val];
//   const left = _isSymmetric(root.left);
//   const right = _isSymmetric(root.right);
//   if (!root.left && root.right) return [null, root.val, ...right];
//   if (root.left && !root.right) return [...left, root.val, null];

//   return [...left, root.val, ...right];
// };
