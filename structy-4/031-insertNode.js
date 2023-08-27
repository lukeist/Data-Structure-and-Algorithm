class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: head of ll, val, number;
// r: head of ll;
// e:
//
// c
// a

// a -> b

//                 l    c
//            2    1    0
//            0    1    2
//            a -> b -> c -> d
// insertNode(a, 'x', 2);
//
// a -> b -> x -> c -> d

// const insertNode = (head, value, index) => {
//   let node = new Node(value);
//   if (index === 0) {
//     node.next = head;
//     return node;
//   }

//   let c = head;
//   let l = null;

//   while (index > 0) {
//     l = c;
//     c = c.next;
//     index--;
//   }

//   l.next = node;
//   node.next = c;

//   return head;
// };

const insertNode = (head, value, index) => {
  if (index === 0) {
    const node = new Node(value);
    node.next = head;
    return node;
  }
  head.next = insertNode(head.next, value, index - 1);
  return head;
};
