// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// a -> b -> c -> d -> e -> f
//      t    c    n

// p: head of ll, val(num || str)
// r: head of ll

// recursive O(nodes) O(nodes)
const removeNode = (head, targetVal) => {
  if (!head) return null;
  if (head.val === targetVal) return head.next;

  head.next = removeNode(head.next, targetVal);

  return head;
};

// // iterative O(nodes) O(1)
// const removeNode = (head, targetVal) => {
//   if (head.val === targetVal) return head.next;
//   let current = head.next;
//   let tail = head;

//   while (current) {
//     if (current.val === targetVal) {
//       let next = current.next;
//       tail.next = next
//       break;
//     }

//     tail = current;
//     current = current.next;
//   }

//   return head;
// };
