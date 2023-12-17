// https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// p: node obj binary tree
// r: int
// e:
// 10
// | \
// 1  2
// => 13

// 1
// | \
// 0  0
//     \
//      2
// => 3
// recursion
function sumTheTreeValues(root) {
  if (!root) return 0;
  console.log(
    root.value +
      (root.left && sumTheTreeValues(root.left)) +
      (root.right && sumTheTreeValues(root.right))
  );

  return (
    root.value +
    // (root.left &&
    sumTheTreeValues(root.left) +
    // )
    // (root.right &&
    sumTheTreeValues(root.right)
    //  )
  );
}

// const

var simpleNode = {
  value: 10,
  left: { value: 1, left: null, right: null },
  //   right: null,
  right: { value: 2, left: null, right: null },
};

// var simpleNode = null;

sumTheTreeValues(simpleNode);

// DFS
// function sumTheTreeValues(root) {
//   if (!root) return 0;
//   let stack = [root];
//   let sum = 0;

//   while (stack.length > 0) {
//     const current = stack.pop();
//     sum += current.value;

//     current.left && stack.push(current.left);
//     current.right && stack.push(current.right);
//     console.log(current);
//   }
//   console.log(sum);
//   return sum;
// }

// // BFS
// function sumTheTreeValues(root) {
//     if (!root) return 0;
//     const queue = [root];
//     let sum = 0;

//     while (queue.length > 0) {
//       const current = queue.shift();
//       sum += current.value;

//       current.left && queue.push(current.left);
//       current.right && queue.push(current.right);
//     }
//     console.log(sum);
//     return sum;
//   }
