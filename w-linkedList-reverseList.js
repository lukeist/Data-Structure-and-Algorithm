class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of linked list
// r: reversed linked list
// e:

// recursion
const reverseList = (head, prev = null) => {
  if (!head) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};

// // // DFS prev current next: time o(n) space o(1)
// const reverseList = (head) => {
//   let prev = null;
//   let current = head;
//   while (current) {
//     //   null <-- a     b --> c
//     //    p       c     n
//     const next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   console.log(prev);
//   return prev;
// };

// // DFS prev current next: time o(n) space o(n)
// const reverseList = (head) => {
//   let prev = null;
//   let stack = [head];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     current.next && stack.push(current.next);
//     current.next = prev;
//     prev = current;
//   }
//   console.log(prev);
//   return prev;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f
console.log(reverseList(a));

// reverseList(a); // f -> e -> d -> c -> b -> a

// // DFS last in first out
// const reverseList = (head) => {
//     // todo
//     const stack = [head];
//     const stackForReverse = [];

//     while (stack.length > 0) {
//       const current = stack.pop();
//       stackForReverse.push(current);
//       current.next && stack.push(current.next);
//     }

//     const newList = new Node();
//     let prev = newList;
//     while (stackForReverse.length > 0) {
//       const current = stackForReverse.pop();
//       current.next = null;
//       prev.next = current;
//       prev = current;
//     }
//     console.log(newList.next);
//     return newList.next;
//   };
