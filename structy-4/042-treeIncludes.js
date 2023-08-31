// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of binary tree;
// r: boolean;
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// treeIncludes(a, "e"); // -> true

// const treeIncludes = (root, target) => {
//   if (!root) return false;
//   const stack = [root];
//   while (stack.length > 0) {
//     const c = stack.pop();
//     if (c.val === target) return true;
    
//     !!c.left && stack.push(c.left);
//     !!c.right && stack.push(c.right);
//   }
  
//   return false;
// };

const treeIncludes = (root, target) => {
    if (!root) return false;
    if (root.val === target) return true;
    
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};
  
  
 