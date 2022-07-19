// https://structy.net/problems/reverse-list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of ll
// r: new head

//   null           a ----------> b ----------> c
//                              head
//       <-c.n-----cur
//                tail
// recursion
const reverseList = (head, tail = null) => {
  if (!head) return tail;

  let current = head;
  head = current.next;
  current.next = tail;
  tail = current;

  //   console.log(head, tail);
  return reverseList(head, tail);
};

//   null           a ----------> b ----------> c
//    t <--cur.n-- cur          head
// // iteratioin
// const reverseList = (head) => {
//   let current = head;
//   let tail = null;

//   while (current) {
//     head = current.next;
//     current.next = tail;
//     tail = current;
//     current = head;
//   }

//   //   console.log(current);
//   return tail;
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

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a
