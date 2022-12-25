class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: arr, arr
// r: root;
//
//       a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h
//    is                  ie   m    is   ie
// [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
//    m    is                  ie   is   ie
// [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ]
const buildTreeInPre = (
  i,
  p,
  is = 0,
  ie = i.length - 1,
  ps = 0,
  pe = p.length - 1
) => {
  if (is > ie) return null;

  const rootVal = p[ps];
  const m = i.indexOf(rootVal);
  const root = new Node(rootVal);
  const leftLen = m - is;

  root.left = buildTreeInPre(i, p, is, m - 1, ps + 1, ps + leftLen);
  root.right = buildTreeInPre(i, p, m + 1, ie, ps + leftLen + 1, pe);

  return root;
};
