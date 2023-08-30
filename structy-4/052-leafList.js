// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// p: root of binary tree;
// r: array
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
// leafList(a); // -> [ 'd', 'e', 'f' ] 
// [ce d 
// const leafList = (root) => {
//   if (!root) return [];
//   const stack = [root];
//   const result = [];
  
//   while (stack.length > 0) {
//     const c = stack.pop();
//     !c.left && !c.right && result.push(c.val);
    
//     !!c.right && stack.push(c.right);
//     !!c.left && stack.push(c.left);
//   }
  
//   return result;
// };


// const leafList = (root) => {
//   if (!root) return [];
//   if (!root.left && !root.right) return [root.val];
//   const left = leafList(root.left);
//   const right = leafList(root.right);
//   return [...left, ...right];
// };


const leafList = (root) => {
    if (!root) return [];
    const result = [];
    
    const explore = (root) => {
        if (!root) return;
        if (!root.left && !root.right) result.push(root.val);
        explore(root.left);
        explore(root.right);
    }
    explore(root);
    return result;
};
  
  
  
    