// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: boolean

// recursion O(n) O(n)
const linkedListFind = (head, target) => {
  if (!head) return false;
  if (head.val === target) return true;

  return linkedListFind(head.next, target);
};

// // iteration O(n) O(1)
// const linkedListFind = (head, target) => {
//   let current = head;

//   while (current) {
//     if (current.val === target) return true;
//     current = current.next;
//   }

//   return false;
// };

module.exports = {
  linkedListFind,
};
