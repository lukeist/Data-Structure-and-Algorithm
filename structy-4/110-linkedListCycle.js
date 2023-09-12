// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll;
// r: boolean;
// e:
//         _______
//       /   s    \
// a -> b -> c -> d
//           f
//
// s
// a -> b
//      f
const linkedListCycle = (head) => {
  if (!head) return false;
  let s = head;
  let f = head.next;

  while (!!f && !!f.next) {
    if (s.val === f.val) return true;
    s = s.next;
    f = f.next.next;
  }

  return false;
};

// const linkedListCycle = (head, s = head, f = head, first = true) => {
//     if (!head) return false;
//     if (!f || !f.next) return false;
//     if (s.val === f.val && !first) return true;

//     return linkedListCycle(head, s.next, f.next.next, false);
//   };
