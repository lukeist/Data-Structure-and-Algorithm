// https://structy.net/problems/linked-list-find

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const linkedListFind = (head, target) => {
//   // todo
//   while (head) {
//     if (head.val === target) return true;
//     head = head.next;
//   }
//   return false;
// };

const linkedListFind = (head, target) => {
  if (!head) return false;
  return head.val === target
    ? true
    : // console.log(linkedListFind(head.next, target));
      linkedListFind(head.next, target);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "c"); // true
