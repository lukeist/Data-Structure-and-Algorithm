// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: boolean

// iterative O(nodes) O(nodes)
const isUnivalueList = (head, val = head.val) => {
  if (!head) return true;
  if (val !== head.val) return false;

  if (isUnivalueList(head.next, val)) return true;

  return false;
};

// // iterative O(nodes) O(1)
// const isUnivalueList = (head) => {
//   let c = head;
//   let val = head.val;

//   while (c) {
//     if (c.val !== val) return false;
//     c = c.next
//   }

//   return true;
// };
