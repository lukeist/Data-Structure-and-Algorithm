// https://leetcode.com/problems/invert-binary-tree/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// p: root array
// r: array
// e:
// Input: root = [4,2,7,1,3,6,9]
// Output: new root [4,7,2,9,6,3,1]

// Input: root = [2,1,3]
// Output: [2,3,1]

// Input: root = []
// Output: []

var invertTree = function (root) {};
