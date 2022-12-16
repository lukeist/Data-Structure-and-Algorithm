// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
//         _______
//       /        \
// a -> b -> c -> d
//                s
//                f
// a -> b -> c -> d
//           s
//                    f
const linkedListCycle = (head) => {
  if (!head) return false;
  let s = head,
    f = head.next;

  while (f && f.next) {
    if (s.val === f.val) return true;
    s = s.next;
    f = f.next.next;
  }

  return false;
};
