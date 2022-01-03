// https://www.codewars.com/kata/5acc79efc6fde7838a0000a0/train/javascript

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
const root = new Node(666, new Node(555), new Node(444));

// using queue
function search(n, root) {
  if (!root) return false;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value === n) console.log(true);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  console.log(false);
}

// function search(n, root) {
//   return !root
//     ? false
//     : root.value === n
//     ? true
//     : search(n, root.left) || search(n, root.right);
// }

// // using queue
// function search(n, root) {
//   if (!root) return false;

//   const queue = [root];
//   const result = [];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     result.push(current.value);
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }

//   return result.indexOf(n) > -1;
// }

// using stack
// function search(n, root) {
//   if (!root) return false;

//   const stack = [root];
//   const result = [];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.value);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   console.log(result.indexOf(n) > -1);
// }

search(666, root);
