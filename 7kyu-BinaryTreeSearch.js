// https://www.codewars.com/kata/5acc79efc6fde7838a0000a0/train/javascript

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
const root = new Node(666, new Node(555), new Node(444));
function search(n, root) {
  // Determines if a value is in a binary tree (NOT bst)
  // Your code here!
  if (!root) return false;

  const searchTree = (node) => {
    if (!node) return false;

    if (node.left.value === n) {
      return true;
    } else {
      return searchTree(node);
    }

    if (node.right.value === n) {
      return true;
    } else {
      return searchTree(node);
    }
    return false;
  };

  if (root.value === n) {
    return true;
  } else {
  }
  console.log(root);
  return false;
}

search(666, root);
