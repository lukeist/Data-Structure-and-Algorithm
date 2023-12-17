class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// https://www.codewars.com/kata/55847fcd3e7dadc9f800005f/train/javascript

// p: 2 trees
// r: boolean
// e:
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

a.left = b;
a.right = c;

const d = new Node(1);
const e = new Node(2);
const f = new Node(3);

d.left = e;
d.right = f;

const g = new Node(1);
const h = new Node(3);
const i = new Node(3);

g.left = h;
g.right = i;
// 1       1
// | \     | \
// 2  3    2  3
// => true

// 1       1
// | \     | \
// 3  3    2  3
// => false (values not the same 2 != 3)

// 1       1
// | \     |
// 2  3    2
//         |
//         3
// => false (structure not the same)

// Recursion 1
// function compare(a, b) {
//   if (!a && !b) return true;
//   if ((a && !b) || (!a && b) || a.val !== b.val) return false;

//   return compare(a.left, b.left) && compare(a.right, b.right);
// }

// Recursion 2
function compare(a, b) {
  if (!a || !b) return a === b;

  return (
    a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right)
  );
}

// // BFS
// function compare(a, b) {
//   if (!a && !b) return true;
//   const queueA = [a];
//   const queueB = [b];

//   while (queueA.length > 0 && queueB.length > 0) {
//     const currentA = queueA.shift();
//     const currentB = queueB.shift();

//     console.log(currentA, currentB);
//     console.log("---------------------");

//     if (currentA && !currentB) return false;
//     if (!currentA && currentB) return false;

//     if (!currentA && !currentB) continue;

//     if (currentA.val !== currentB.val) return false;

//     queueA.push(currentA.left);
//     queueA.push(currentA.right);

//     queueB.push(currentB.left);
//     queueB.push(currentB.right);
//   }

//   if (queueA.length !== queueB.length) return false;

//   return true;
// }

// // DFS
// function compare(a, b) {
//   if (!a && !b) return true;
//   const stackA = [a];
//   const stackB = [b];

//   while (stackA.length > 0 && stackB.length > 0) {
//     const currentA = stackA.pop();
//     const currentB = stackB.pop();
//     if (currentA && !currentB) {
//       console.log(false);
//       return false;
//     }
//     if (!currentA && currentB) {
//       console.log(false);
//       return false;
//     }
//     // if (!currentA && !currentA) {
//     //   console.log(true);
//     //   return true;
//     // }

//     if (currentA.val !== currentB.val) {
//       console.log(false);
//       return false;
//     }
//     console.log(currentA.val, currentB.val);

//     // console.log(a, b);
//     console.log("---------------------------------");

//     currentA.left && stackA.push(currentA.left);
//     currentA.right && stackA.push(currentA.right);

//     currentB.left && stackB.push(currentB.left);
//     currentA.right && stackB.push(currentB.right);
//   }

//   if (stackA.length !== stackB.length) return false;
//   console.log(true);
//   console.log("---------------------------------");

//   return true;
// }

// compare(a, d);

// const x = { val: 1, left: null, right: null };
// const y = null;

// compare(x, y);

const u = {
  val: 0,
  left: { val: 1, left: null, right: { val: 2, left: null, right: null } },
  right: null,
};

//         0
//   1          null
//null    2

//         0
//     1       null
// 2    null

const v = {
  val: 0,
  left: { val: 1, left: { val: 2, left: null, right: null }, right: null },
  right: null,
};
compare(u, v);
