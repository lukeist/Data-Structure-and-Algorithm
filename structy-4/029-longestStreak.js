// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: number;
// e:
//                                  l    c
// null -> 5 -> 5 -> 7 -> 7 -> 7 -> 6
// => 3
// l    c
// 6
//                                  l    c
// null -> 5 -> 5 -> 7 -> 7 -> 7 -> 7
// 4
// => 4

// recursive O(n) O(n)
const longestStreak = (
  head,
  next = head ? head.next : null,
  count = 1,
  max = -Infinity
) => {
  if (!head) return 0;
  if (!next) return Math.max(count, max);
  count = head.val === next.val ? count + 1 : 1;
  return Math.max(count, longestStreak(head.next, next.next, count, max));
};

// // iterative O(n) O(1)
// const longestStreak = (head) => {
//   if (!head) return 0;
//   let c = head.next;
//   let l = head;
//   let max = -Infinity;
//   let count = 1;

//   while (c) {
//     c.val === l.val ? count++ : (count = 1);
//     max = Math.max(max, count);
//     l = c;
//     c = c.next;
//   }

//   return Math.max(max, count);
// };
