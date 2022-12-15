class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// p: head of ll, val(str/num), num
// r: head of ll
//
//        N
//           p    c
// a -> b -> c -> d
//
// N
// a -> b -> c -> d
// insertNode(a, 'x', 2);
// a -> b -> x -> c -> d

const insertNode = (head, value, index) => {
  if (!head) return new Node(value);
  const n = new Node(value);
  if (!index) {
    n.next = head;
    return n;
  }
  head.next = insertNode(head.next, value, index - 1);
  return head;
};

// const insertNode = (head, value, index) => {
//   const iNode = new Node(value);

//   if (index === 0) {
//     iNode.next = head;
//     return iNode;
//   }

//   let c = head.next;
//   let p = head;
//   let i = 1;
//   while (c) {
//     if (i === index) {
//       p.next = iNode;
//       iNode.next = c;
//       return head;
//     }

//     i++;
//     p = c;
//     c = c.next;
//   }

//   p.next = iNode;
//   return head;
// };

module.exports = {
  insertNode,
};
