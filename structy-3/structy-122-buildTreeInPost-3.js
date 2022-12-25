const buildTreeInPost = (
  i,
  p,
  is = 0,
  ie = i.length - 1,
  ps = 0,
  pe = p.length - 1
) => {
  if (is > ie) return null;

  const rootVal = p[pe];
  const m = i.indexOf(rootVal);
  const root = new Node(rootVal);
  const rightLen = ie - m;
  root.left = buildTreeInPost(i, p, is, m - 1, ps, pe - rightLen - 1);
  root.right = buildTreeInPost(i, p, m + 1, ie, pe - rightLen, pe - 1);

  return root;
};
