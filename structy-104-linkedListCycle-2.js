// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//         _______
//       /        \
// a -> b -> c -> d

// p: head of ll
// r: boolean

// recursive O(n) O(n)
const linkedListCycle = (head, visited = new Set()) => {
  if (!head) return false;
  if (visited.has(head.val)) return true;
  visited.add(head.val);

  if (linkedListCycle(head.next, visited)) return true;

  return false;
};

// // iterative O(n) O(n)
// const linkedListCycle = (head) => {
//   let current = head;
//   let visited = new Set();

//   while (current) {
//     if (visited.has(current.val)) return true;
//     visited.add(current.val);

//     current = current.next;
//   }

//   return false;
// };
