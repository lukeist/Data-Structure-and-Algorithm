// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: num

// recursion O(n) O(n)
const sumList = (head) => {
  if (!head) return 0;

  return head.val + sumList(head.next);
};

// // iteration O(n) O(1)
// const sumList = (head) => {
//   let current = head;
//   let sum = 0;

//   while (current) {
//     sum += current.val;
//     current = current.next;
//   }

//   return sum;
// };

module.exports = {
  sumList,
};
