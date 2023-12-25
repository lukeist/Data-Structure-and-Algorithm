var isSymmetric = function (root) {
  return check(root.left, root.right);
};

const check = (r1, r2) => {
  if (!r1 && !r2) return true;
  if (!r1 || !r2 || r1.val !== r2.val) return false;

  return check(r1.left, r2.right) && check(r1.right, r2.left);
};

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

// // p: root of binary tree
// // r: boolean;
// // e:
// //

// //                       1
// //                   /      \
// //                 2          2
// //             /   \        /    \
// //             3   4        4    3
// //          /  \   /  \   /  \   / \
// //          5  6   7  8   8  7  6   5

// // 5362478
// // 8472635

// var isSymmetric = function(root) {
//     if (!root) return true;

//     const iss = (r1, r2) => {
//         if (!r1 && !r2) return true;
//         if (!r1 || !r2 || r1.val !== r2.val) return false;
//         return iss(r1.left, r2.right) && iss(r1.right, r2.left);
//     }

//     return iss(root.left, root.right)
// }

// // var isSymmetric = function(root) {
// //     if (!root) return true;
// //     const arr = [];

// //     const dfs = (root) => {
// //         if (!root) {
// //             arr.push(null);
// //             return;
// //         }

// //         dfs(root.left, arr);
// //         arr.push(root.val);
// //         dfs(root.right, arr);
// //     }
// //     dfs(root);

// //         let i = 0, j = arr.length - 1;

// //     while (i < Math.floor(arr.length/2)) {
// //         if (arr[i] !== arr[j]) return false;
// //         i++;
// //         j--;
// //     }
// //     return true;
// // }

// // var isSymmetric = function(root) {
// //     const left = [];
// //     const right = [];
// //     dfs(root.left, left);
// //     dfs(root.right, right);
// // console.log(left)
// //     let i = 0, j = right.length - 1;

// //     while (i < left.length - 1 && j >= 0){
// //         if (left[i] !== right[j]) return false;
// //         i++;
// //         j--;
// //     }
// //     return true;
// // };

// // const dfs = (root, arr) => {
// //     if (!root) {
// //         arr.push(null);
// //         return;
// //     }

// //     dfs(root.left, arr);
// //     arr.push(root.val);
// //     dfs(root.right, arr);
// // }
