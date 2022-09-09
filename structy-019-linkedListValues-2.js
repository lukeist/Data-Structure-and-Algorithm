// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: arr
// recursive O(n) O(n)
const linkedListValues = (head) => {
  if (!head) return [];
  const nextVal = linkedListValues(head.next);
  return [...head.val, ...nextVal];
};

// iterative O(n) O(n)
// const linkedListValues = (head) => {
//   const current = head
//   const arr = [];

//   while (head) {
//     arr.push(head.val);
//     current = current.next;
//   }

//   return arr;
// };

module.exports = {
  linkedListValues,
};
