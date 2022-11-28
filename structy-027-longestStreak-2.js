class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  if (!head) return 0;
  let c = head;
  let t = null;
  let count = 1;
  let max = -Infinity;

  while (c) {
    t !== c.val ? (count = 1) : count++;
    max = Math.max(max, count);
    t = c.val;
    c = c.next;
  }

  return max;
};

// p: head of ll
// r: num

//      5 -> 5 -> 7 -> 7 -> 7 -> 6
//                          c    n

//      9 -> 9 -> 1 -> 9 -> 9 -> 9
//                               c    n
//      9 -> 9 -> 1 -> 9 -> 9 -> 9
//                               p   c

// const longestStreak = (head) => {
//   if (!head) return 0;

//   let curStreak = 0;
//   // let maxStreak = 0;
//   let max = -Infinity;
//   let curr = head;
//   let preV = null;

//   while (curr) {
//     curr.val === preV ? curStreak++ : (curStreak = 1);

//     // maxStreak < curStreak && (maxStreak = curStreak);
//     max = Math.max(max, curStreak);

//     preV = curr.val;
//     curr = curr.next;
//   }

//   // return maxStreak;
//   return max;
// };

// const longestStreak = (head) => {
//   let curStreak = 0;
//   let maxStreak = 0;
//   let curr = head;
//   let preV = null;

//   while (curr) {
//     current.val === preV ? curStreak++ : (curStreak = 1);

//     maxStreak < curStreak && maxStreak === curStreak;

//     preV = current.val;
//     current = current.next;
//   }

//   return maxStreak;
// };

// const longestStreak = (head) => {
//   if (!head) return 0;
//   if (!head.next) return 1;
//   let next = head.next;
//   let current = head;

//   let max = -Infinity;
//   let count = 1;

//   while (next) {
//     if (next.val === current.val) {
//       count++;
//       max = Math.max(max, count);
//     } else {
//       count = 1;
//     }
//     next = next.next;
//     current = current.next;
//   }

//   return max;
// };

module.exports = {
  longestStreak,
};

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
