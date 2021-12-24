// https://www.codewars.com/kata/57e5279b7cf1aea5cf000359/train/javascript

// var Node = function (value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(17);
const b = new Node(3);
const c = new Node(-10);
const d = new Node(2);
const e = new Node(16);
const f = new Node(1);
const g = new Node(13);

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;
f.right = g;
// p: tree node
// r: num
// e:
//   17
//    /  \
//   3   -10
//  /    /  \
// 2    16   1
//          /
//         13
// [17,-10,16] = 23

// recursion
function maxSum(root) {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.value;

  // console.log(root.left);
  const left = maxSum(root.left);
  const right = maxSum(root.right);

  console.log(root.value + Math.max(left, right));
  return root.value + Math.max(left, right);
}

// // DFS NOT WORKING
// function maxSum(root) {
//   if (!root) return -Infinity;
//   let max = -Infinity;
//   let sum = 0;
//   const stack = [root];
//   let stackValue = [];
//   // const rootValue = root.value;
//   while (stack.length > 0) {
//     const current = stack.pop();
//     // stackValue.pop();
//     // sum += current.value;
//     stackValue.push(current.value);
//     // console.log(current.value);
//     if (current.left) {
//       stack.push(current.left);
//       // stackValue.push(current.left.value);
//     }
//     if (current.right) {
//       stack.push(current.right);
//       // stackValue.push(current.right.value);
//     }
//     if (!current.left && !current.right) {
//       max = Math.max(max, stackValue[stackValue.length - 1]);
//       console.log(stackValue);
//       // stackValue = [];
//     }
//     // console.log(max);
//     // console.log(stackValue);
//   }
// console.log(max);
//   return max;
// }

maxSum(a);
