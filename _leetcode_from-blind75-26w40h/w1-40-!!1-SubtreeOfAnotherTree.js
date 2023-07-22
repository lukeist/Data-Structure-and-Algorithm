/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// p: root of bi tree; root of bi tree;
// r: boolean
// e:  

var isSubtree = function(root, subRoot) {
    if (!root) return false;
    if (compare(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const compare = (r1, r2) => {
    if (!r1 && !r2) return true;
    if (!r1 || !r2 || r1.val !== r2.val) return false;
    return compare(r1.left, r2.left) && compare(r1.right, r2.right);
}