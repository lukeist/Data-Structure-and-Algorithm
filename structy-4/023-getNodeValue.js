// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll, index;
// r: val/null
//                 0
//                 c
// e: // a -> b -> c -> d
//

// iterative O(n) O(1)
const getNodeValue = (head, index) => {
  let c = head;

  while (!!c) {
    if (!index) return c.val;
    c = c.next;
    index--;
  }

  return null;
};

// // recursive O(n) O(n)
// const getNodeValue = (head, index) => {
//   if (!head) return null;
//   if (!index) return head.val;

//   return getNodeValue(head.next, index - 1);
// };
