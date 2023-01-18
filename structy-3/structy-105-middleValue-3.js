// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll
// r: val (num || str)
//           s
// a -> b -> c -> d -> e
//                     f
//                s
// a -> b -> c -> d -> e -> f
//                              f
const middleValue = (head) => {
  let s = head,
    f = head;
  while (f && f.next) {
    s = s.next;
    f = f.next.next;
  }
  return s.val;
};
