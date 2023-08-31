// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// p: binary tree
// r: array
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
// [def
const breadthFirstValues = (root) => {
    if (!root) return [];
    const queue = [root];
    const result = [];
    
    while (queue.length > 0) {
      const c = queue.shift();
      result.push(c.val);
      
      !!c.left && queue.push(c.left);
      !!c.right && queue.push(c.right);
    }
    
    return result;
};
  
    