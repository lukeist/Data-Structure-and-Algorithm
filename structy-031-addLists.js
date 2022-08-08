// https://structy.net/problems/premium/add-lists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: heads of 2 ll
// r: head of new ll

//          1 -> 4 -> 5 -> 7
//                   c1
//          2 -> 3
//                   c2
// null ->  3 -> 7 -> 5 -> 7
//  h            t    c

// iteration best
const addLists = (head1, head2) => {
  const head = new Node(null);

  let tail = head;
  let cur1 = head1;
  let cur2 = head2;
  let carry = 0;

  while (cur1 || cur2 || carry === 1) {
    let cur1Val = cur1 ? cur1.val : 0;
    let cur2Val = cur2 ? cur2.val : 0;
    let sum = cur1Val + cur2Val + carry;

    carry = sum >= 10 ? 1 : 0;

    let cur = new Node(sum % 10);

    tail.next = cur;
    tail = tail.next;

    cur1 && (cur1 = cur1.next);
    cur2 && (cur2 = cur2.next);
  }

  return head.next;
};

// // iteration better
// const addLists = (head1, head2) => {
//   const head = new Node(null);

//   let tail = head;
//   let cur1 = head1;
//   let cur2 = head2;
//   let carry = 0;

//   // console.log(carry);

//   while (cur1 || cur2) {
//     let cur1Val = cur1 ? cur1.val : 0;
//     let cur2Val = cur2 ? cur2.val : 0;
//     let sum = cur1Val + cur2Val + carry;

//     carry = sum >= 10 ? 1 : 0;

//     let cur = new Node(sum % 10);

//     tail.next = cur;
//     tail = tail.next;

//     cur1 && (cur1 = cur1.next);
//     cur2 && (cur2 = cur2.next);
//   }

//   carry > 0 && (tail.next = new Node(carry));

//   return head.next;
// };

// // recursion BETTER
// const addLists = (head1, head2, carry = 0) => {
//   if (!head1 && !head2 && carry === 0) return null;

//   let sum = (head1 ? head1.val : 0) + (head2 ? head2.val : 0) + carry;

//   carry = sum >= 10 ? 1 : 0;

//   const head = new Node(sum % 10);

//   const next1 = !head1 ? null : head1.next;
//   const next2 = !head2 ? null : head2.next;

//   head.next = addLists(next1, next2, carry)

//   return head;
// };

// // recursion WORKING GOOD
// const addLists = (head1, head2, carry = 0) => {
//   if (!head1 && !head2 && carry === 1) return new Node(1);
//   if (!head1 && !head2) return null;

//   const head = new Node(null);

//   let sum = (head1 ? head1.val : 0) + (head2 ? head2.val : 0) + carry;

//   if (sum >= 10) {
//     head.val = sum - 10;
//     carry = 1;
//   } else {
//     head.val = sum;
//     carry = 0;
//   }

//   !head1 && (head.next = addLists(null, head2.next, carry));
//   !head2 && (head.next = addLists(head1.next, null, carry));
//   head1 && head2 && (head.next = addLists(head1.next, head2.next, carry));

//   return head;
// };

// //   39
// // + 47
// // ----
// //   86

// // 9 -> 3
// // 7 -> 4
// // 6 -> 8

// const a1 = new Node(9);
// const a2 = new Node(3);
// a1.next = a2;
// // 9 -> 3

// const b1 = new Node(7);
// const b2 = new Node(4);
// b1.next = b2;
// // 7 -> 4
// // 6 -> 8

// //   621
// // + 354
// // -----
// //   975

// const a1 = new Node(1);
// const a2 = new Node(2);
// const a3 = new Node(6);
// a1.next = a2;
// a2.next = a3;
// // 1 -> 2 -> 6

// const b1 = new Node(4);
// const b2 = new Node(5);
// const b3 = new Node(3);
// b1.next = b2;
// b2.next = b3;
// // 4 -> 5 -> 3
// // 5 -> 7 -> 9

//  7541
// +  32
// -----
//  7573

// const a1 = new Node(1);
// const a2 = new Node(4);
// const a3 = new Node(5);
// const a4 = new Node(7);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
// // 1 -> 4 -> 5 -> 7

// const b1 = new Node(2);
// const b2 = new Node(3);
// b1.next = b2;
// // 2 -> 3
// // 3 -> 7 -> 5 -> 7

// const a1 = new Node(9);
// const a2 = new Node(9);
// const a3 = new Node(9);
// a1.next = a2;
// a2.next = a3;
// // 9 -> 9 -> 9

// const b1 = new Node(6);
// // 6

// // 5 -> 0 -> 0 -> 1

// iteration: WORKING BUT CODE is TOO LONG
// const addLists = (head1, head2) => {
//   const head = new Node(null);

//   let tail = head;

//   let cur1 = head1;
//   let cur2 = head2;
//   let carry = 0;

//   // console.log(carry);

//   while (cur1 && cur2) {
//     let cur = new Node(null);
//     let sum = cur1.val + cur2.val + carry;

//     if (sum >= 10) {
//       //
//       cur.val = sum - 10;
//       carry = 1;
//     } else {
//       cur.val = sum;
//       carry = 0;
//     }

//     tail.next = cur;
//     tail = tail.next;

//     cur1 = cur1.next;
//     cur2 = cur2.next;
//   }

//   // cur1 && (tail.next = cur1);
//   // cur2 && (tail.next = cur2);

//   // let [nextHead, nextTail] = findTheRest(tail, cur1 ? cur1 : cur2, carry);
//   // tail.next = nextHead;
//   // carry > 0 && (nextTail = new Node(carry));

//   //        a ----> b ----> c
//   // t t.n  c

//   if (cur1) {
//     while (cur1) {
//       let sum = cur1.val + carry;

//       if (sum >= 10) {
//         cur1.val = sum - 10;
//         carry = 1;
//       } else {
//         cur1.val = sum;
//         carry = 0;
//       }

//       tail.next = cur1;
//       tail = tail.next;
//       cur1 = cur1.next;
//     }
//   }

//   if (cur2) {
//     while (cur2) {
//       let sum = cur2.val + carry;

//       if (sum >= 10) {
//         cur2.val = sum - 10;
//         carry = 1;
//       } else {
//         cur2.val = sum;
//         carry = 0;
//       }

//       tail.next = cur2;
//       tail = tail.next;
//       cur2 = cur2.next;
//     }
//   }

//   carry > 0 && (tail.next = new Node(carry));

//   return head.next;
// };

// const findTheRest = (tail, cur, carry) => {
//   const headR = cur;
//   while (cur) {
//     let sum = cur.val + carry;

//     if (sum >= 10) {
//       cur.val = sum - 10;
//       carry = 1;
//     } else {
//       cur.val = sum;
//       carry = 0;
//     }

//     tail.next = cur;
//     tail = tail.next;
//     cur = cur.next;
//   }
//   return [headR, tail];
// };

// const addLists = (head1, head2) => {
//   // todo
//   const head = new Node(null);
//   let tail = head;

//   let cur1 = head1;
//   let cur2 = head2;

//   let carry = 0;

//   // together
//   while (cur1 && cur2) {
//     let current;
//     let sumDigit = cur1.val + cur2.val + carry;

//     if (sumDigit > 9) {
//       sumDigit = sumDigit - 10;
//       current = new Node(sumDigit);
//       carry = 1;
//     } else {
//       current = new Node(sumDigit);
//       carry = 0;
//     }

//     tail.next = current;
//     tail = current;

//     cur1 = cur1.next;
//     cur2 = cur2.next;
//   }

//   // separate: rest of 1 tail

//   //   while (cur1) {
//   //     tail.next = cur1;
//   //     tail = tail.next;

//   //     cur1 = cur1.next;
//   //   }

//   //   while (cur1) {
//   //     tail.next = cur2;
//   //     tail = tail.next;

//   //     cur2 = cur2.next;
//   //   }

//   //   cur1 && (tail.next = tailVal(tail, cur1, carry));
//   //   cur2 && (tail.next = tailVal(tail, cur1, carry));

//   while (cur1) {
//     if (cur1.val + carry > 9) {
//       cur1.val = cur1.val - 10;
//       cur1.val = cur1.val + carry;
//       carry = 1;
//     } else {
//       cur1.val = cur1.val + carry;
//       carry = 0;
//     }
//     tail.next = cur1;
//     tail = tail.next;
//     cur1 = cur1.next;
//   }

//   while (cur2) {
//     if (cur2.val + carry > 9) {
//       cur2.val = cur2.val - 10;
//       cur2.val = cur2.val + carry;
//       carry = 1;
//     } else {
//       cur2.val = cur2.val + carry;
//       carry = 0;
//     }
//     tail.next = cur2;
//     tail = tail.next;
//     cur2 = cur2.next;
//   }

//   //   tail = tail.next;
//   //   carry === 1 && (tail.next = new Node(1));

//   return head.next;
// };

// 6 -> null
//      c1
// 5 -> 0 -> 0 -> 1
// t    c2
//   999
//  +  6
//  ----
//  1005

// const tailVal = (tail, node, carry) => {
//   while (node) {
//     if (node.val + carry > 9) {
//       node.val = node.val - 10;
//       node.val = node.val + carry;
//       carry = 1;
//     } else {
//       node.val = node.val + carry;
//       carry = 0;
//     }
//     tail.next = node;
//     tail = tail.next;
//     node = node.next;
//   }
// };

console.log(addLists(a1, b1));
