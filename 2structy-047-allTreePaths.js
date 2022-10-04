//            a                      [...left, ...right]
//          /   \
//         b      c           [[b,d], [b,e]]                [[c,f]]
//        / \      \
//  [[d]]   [[e]]   [[f]]        [[d],[e]]                   [[f]]
//     / \
//    [] []               []

//           a
//         /    \
//        b      c
//      /  \      \
//    d     e      f
//         / \    /  \
//        g  h   i    []

const allTreePaths = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  const left = allTreePaths(root.left);
  const right = allTreePaths(root.right);

  const paths = [...left, ...right];
  for (let path of paths) {
    path.unshift(root.val);
  }

  return paths;
};
