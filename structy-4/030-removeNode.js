// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll, val;
// r: head of ll;
// e:
//           t    c    n 
//      a -> b -> c -> d -> e -> f
// removeNode(a, "c");
//      a -> b -> d -> e -> f

//      a
//      t    c
//      a -> b


// const removeNode = (head, targetVal) => {
//   if (head.val === targetVal) return head.next;
//   let t = null;
//   let c = head;

//   while (!!c) {
//     if (c.val === targetVal) {
//       t.next = c.next;
//       return head;
//     } else {
//       t = c;
//       c = c.next;
//     }
//   }
// };

const removeNode = (head, targetVal) => {
    if (head.val === targetVal) return head.next;
    head.next = removeNode(head.next, targetVal);
    return head;
};
    