// https://structy.net/problems/premium/longest-streak

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of ll
// r: num

// recursion
const longestStreak = (head, lastVal = head.val, max = -Infinity) => {
  if (!head) return 0;
  let count = 0;

  if (lastVal !== head.val) {
    count = 1;
    lastVal = head.val;
  } else {
    count = 1 + longestStreak(head.next, lastVal, max);
    console.log(count);
  }
  max = Math.max(max, count);

  return max;
};

// // iteration
// const longestStreak = (head) => {
//   if (!head) return 0;

//   let lastVal = head.val;
//   let current = head;
//   let max = -Infinity;
//   let count = 0;

//   while (current) {
//     if (lastVal === current.val) {
//       count++;
//     } else {
//       count = 1;
//     }

//     max = Math.max(max, count);

//     lastVal = current.val;
//     current = current.next;
//   }

//   return max;
// };

const a = new Node(9);
const b = new Node(9);
const c = new Node(1);
const d = new Node(9);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

console.log(longestStreak(a)); // 3

// const a = new Node(3);
// const b = new Node(3);
// const c = new Node(3);
// const d = new Node(3);
// const e = new Node(9);
// const f = new Node(9);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // 3 -> 3 -> 3 -> 3 -> 9 -> 9

// console.log(longestStreak(a)); // 4
