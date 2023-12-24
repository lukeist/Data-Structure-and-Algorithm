// key = 8                                       16
//                                       /                 \
//                               ----> 8                   24
//                                  /    \               /   \
//                                4        12          20      28
//                             /   \      /   \       /   \    /    \
//                            2    6     10    14    18   22  26    30
//                          /  \  /  \  /  \   /  \
//                         1   3 5   7 (9)   11 13  15
//                                get 9 - the smallest on 8's right
//

//
//                                                16
//                                       /                 \
//                                    (9)                   24
//                                  /    \               /   \
//                                4        12          20      28
//                             /   \      /   \       /   \    /    \
//                            2    6     10    14    18   22  26    30
//                          /  \  /  \     \   /  \
//                         1   3 5   7      11 13  15

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function deleteNode(root, key) {
  if (root === null) {
    return null; // Node not found
  }

  if (key < root.val) {
    // If key is smaller, it's in the left subtree
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    // If key is larger, it's in the right subtree
    root.right = deleteNode(root.right, key);
  } else {
    // Node with the key found, delete it

    // Case 1: Node with only one child or no child
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    // Case 2: Node with two children
    // Find the smallest node in the right subtree (inorder successor)
    root.val = findMin(root.right).val;

    // Delete the inorder successor
    root.right = deleteNode(root.right, root.val);
  }

  return root;
}

function findMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

// Example usage:
const root1 = new TreeNode(5);
root1.left = new TreeNode(3);
root1.right = new TreeNode(6);
root1.left.left = new TreeNode(2);
root1.left.right = new TreeNode(4);
root1.right.right = new TreeNode(7);

console.log("Input:", JSON.stringify(root1));
const key1 = 3;
const updatedRoot1 = deleteNode(root1, key1);
console.log("Output:", JSON.stringify(updatedRoot1));

const root2 = new TreeNode(5);
root2.left = new TreeNode(3);
root2.right = new TreeNode(6);
root2.left.left = new TreeNode(2);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);

console.log("Input:", JSON.stringify(root2));
const key2 = 0;
const updatedRoot2 = deleteNode(root2, key2);
console.log("Output:", JSON.stringify(updatedRoot2));

const root3 = null;
console.log("Input:", root3);
const key3 = 0;
const updatedRoot3 = deleteNode(root3, key3);
console.log("Output:", updatedRoot3);
