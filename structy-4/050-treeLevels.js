// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// p: root of bitree;
// r: array;
// e:
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

const treeLevels = (root) => {
  if (!root) return [];
  const result = [];

  const explore = (root, l) => {
    if (!root) return;
    if (result[l] === undefined) result[l] = [];
    result[l].push(root.val);

    explore(root.left, l + 1);
    explore(root.right, l + 1);
  };

  explore(root, 0);
  return result;
};

// const treeLevels = (root) => {
//   if (!root) return [];
//   const queue = [[root, 0]];
//   const result = [];

//   while (queue.length > 0) {
//     const [c, l] = queue.shift();

//     if (result[l] === undefined) result[l] = []
//     result[l].push(c.val);

//     !!c.left && queue.push([c.left, l + 1])
//     !!c.right && queue.push([c.right, l + 1])
//   }

//   return result;
// };
