// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll;
// r: val(str || num);
// e:
//      s
// a -> b
//          f
//           s
// a -> b -> c -> d
//                    f
//           s
// a -> b -> c -> d -> e
//                     f
// const middleValue = (head) => {
//   if (!head) return null;
//   let s = head;
//   let f = head;
//   while (!!f && !!f.next) {
//     s = s.next;
//     f = f.next.next;
//   }
//   return s.val;
// };

const middleValue = (head, s = head, f = head) => {
  if (!head) return null;
  if (!f || !f.next) return s.val;

  return middleValue(head, s.next, f.next.next);
};
