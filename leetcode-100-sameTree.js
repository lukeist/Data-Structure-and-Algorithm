var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);
  return left && right;
};
