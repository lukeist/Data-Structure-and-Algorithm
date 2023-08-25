// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: number
// e:
// 2 -> 8 -> 3 -> -1 -> 7
// 19

const sumList = (head) => {
  if (!head) return 0;
  return head.val + sumList(head.next);
};

// const sumList = (head) => {
//   let c = head;
//   let sum = 0;

//   while (!!c) {
//     sum += c.val;
//     c = c.next;
//   }

//   return sum;
// };
