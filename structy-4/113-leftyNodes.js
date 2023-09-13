// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of binary tree;
// r: array;
// e:
//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

// leftyNodes(a); // [ 'a', 'b', 'd', 'g' ]
// [[]]

// const leftyNodes = (root) => {
//   if (!root) return [];
//   const stack = [[root, 0]];
//   const levels = [];
//   const result = [];

//   while (stack.length > 0) {
//     const [c, l] = stack.pop();

//     if (levels[l] === undefined) levels[l] = [];
//     levels[l].push(c.val);

//     !!c.right && stack.push([c.right, l + 1]);
//     !!c.left && stack.push([c.left, l + 1]);
//   }

//   for (let l of levels) {
//     result.push(l[0]);
//   }

//   return result;
// };

const leftyNodes = (root) => {
  if (!root) return [];
  const levels = [];
  const result = [];

  const explore = (root, l) => {
    if (!root) return;
    if (levels[l] === undefined) levels[l] = [];
    levels[l].push(root.val);

    explore(root.left, l + 1);
    explore(root.right, l + 1);
  };

  explore(root, 0);

  for (let l of levels) {
    result.push(l[0]);
  }

  return result;
};
