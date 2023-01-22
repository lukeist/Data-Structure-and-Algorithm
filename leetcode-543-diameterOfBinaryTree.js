var diameterOfBinaryTree = function (root) {
  let max = 0;
  dfs(root);
  return max;

  function dfs(root) {
    if (!root) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    max = Math.max(max, left + right);
    return 1 + Math.max(left, right);
  }
};

//                       a
//                      / \
//                   b      c
//                 /  \   /  \
//                d   e  f    g
//             /  \  / \ / \ /  \
//            a   s  d f a s d  f
// // dfs O(nodes!) O(n)
// var diameterOfBinaryTree = function (root) {
//   let max = 0;
//   const stack = [root];
//   while (stack.length > 0) {
//     const c = stack.pop();
//     max = Math.max(max, 2 + dfs(c.left) + dfs(c.right));

//     c.left && stack.push(c.left);
//     c.right && stack.push(c.right);
//   }
//   return max;
// };

// const dfs = (root) => {
//   if (!root) return -1;
//   return 1 + Math.max(dfs(root.left), dfs(root.right));
// };
