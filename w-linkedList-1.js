class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// const travelThruNode = (head) => {
//   if (head.next === null) return head.val;

//   //   console.log(travelThruNode(head.next));
//   //   return head.val + travelThruNode(head.next);
//   return travelThruNode(head.next);
// };

// // console.log(travelThruNode(a));

// const printLinkedList = (head) => {
//   let current = head;
//   while (current) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

// printLinkedList(a);

const travelThru = (head) => {
  //   if (!head.next) return head.val;
  if (!head) return;
  //   return head.val + travelThruNode(head.next);
  console.log(head.val);
  //   head.next = travelThru(head.next);
  //   console.log(travelThru(head.next));
  //   travelThru(head.next);
  return travelThru(head.next);

  //   return head.val;
};

travelThru(a);
