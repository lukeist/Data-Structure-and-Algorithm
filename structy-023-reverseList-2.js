// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: new reversed head

//             a ----> b ----> c ----> d  ----> null
//  null <----
//     t       c       n
//             t       c       n
//     t       h       n

// recursion O(nodes) O(nodes)
const reverseList = (head, tail = null) => {
  if (!head) return tail;

  let next = head.next;
  head.next = tail;
  // tail = head;

  return reverseList(next, head);
};

// // iterataion O(n) O(1)
// const reverseList = (head) => {
//   let current = head;
//   let tail = null;

//   while (current) {
//     let next = current.next;
//     current.next = tail;
//     tail = current
//     current = next;
//   }

//   return tail;
// };
