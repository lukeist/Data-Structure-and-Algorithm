// https://structy.net/problems/premium/insert-node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of ll & str & num
// r: head of ll

// a -------> b -------> c -------> d
//            p          c
//            p.n   v

//

// recursion
const insertNode = (head, value, index, v = new Node(value)) => {
  if (index === 0) {
    v.next = head;
    return v;
  }

  head.next = insertNode(head.next, value, index - 1, v);

  return head;
};

// // iteration
// const insertNode = (head, value, index) => {
//   let v = new Node(value);

//   if (index === 0) {
//     v.next = head;
//     return v;
//   }

//   let current = head;
//   let prev = null;

//   for (let i = 0; i <= index; i++) {
//     if (i === index) {
//       prev.next = v;
//       v.next = current;
//       break;
//     }

//     prev = current;
//     current = current.next;
//   }

//   return head;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(insertNode(a, "x", 2));

// deletenode
// const delNode = (head, val) => {
//   if (val === head.val) return head.next;

//   head.next = delNode(head.next, val);

//   return head;
// };
// console.log(delNode(a, "c"));
// a -> b -> x -> c -> d
