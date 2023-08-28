// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll, value(string);
// r: boolean
// e: // a -> b -> c -> d
// linkedListFind(a, "c"); // true

// const linkedListFind = (head, target) => {
//   let c = head;

//   while (!!c) {
//     if (c.val === target) return true;
//     c = c.next;
//   }
//   return false;
// };

const linkedListFind = (head, target) => {
  if (!head) return false;
  if (head.val === target) return true;

  return linkedListFind(head.next, target);
};
