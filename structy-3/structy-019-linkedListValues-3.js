// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head ll
// r: arr
//
// const linkedListValues = (head) => {
//   let c = head;
//   let r = [];

//   while (c) {
//     r.push(c.val);
//     c = c.next;
//   }

//   return r;
// };

// const linkedListValues = (head) => {
//   if (!head) return [];
//   const arr = linkedListValues(head.next)
//   arr.unshift(head.val);
//   return arr;
// }

const linkedListValues = (head) => {
  const arr = [];
  _llv(head, arr);
  return arr;
};

const _llv = (head, arr) => {
  if (!head) return;
  arr.push(head.val);
  _llv(head.next, arr);
};

module.exports = {
  linkedListValues,
};
