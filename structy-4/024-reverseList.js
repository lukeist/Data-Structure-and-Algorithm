// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll;
// r: new head;
// e:
//       t    c    n
//    <- a    b -> c -> d -> e -> f
//
//       f -> e -> d -> c -> b -> a

const reverseList = (head, tail = null) => {
  if (!head) return tail;
  const next = head.next;
  head.next = tail;
  return reverseList(next, head);
};

// const reverseList = (head) => {
//   let t = null;
//   let c = head;

//   while (!!c) {
//     let n = c.next;
//     c.next = t;
//     t = c;
//     c = n;
//   }

//   return t;
// };
