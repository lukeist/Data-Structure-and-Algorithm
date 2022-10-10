class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//      2    1
// a -> b -> c -> d
//      t    c
// insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
//      t    i    c

// a -> b -> c -> d
// a -> b -> c -> d -> m
// 4    3    2    1
//           t    c

// iterative O(nodes) O(nodes)
const insertNode = (head, value, index) => {
  if (index === 0) {
    const insert = new Node(value);
    insert.next = head;
    return insert;
  }

  head.next = insertNode(head.next, value, index - 1);

  return head;
};

// // iterative O(nodes) O(1)
// const insertNode = (head, value, index) => {
//   const insert = new Node(value);
//   if (index === 0) {
//     insert.next = head;
//     return insert;
//   }

//   let current = head.next;
//   let tail = head;

//   while (current) {
//     index === 1 && (insert.next = current) && (tail.next = insert);
//     index--;

//     tail = current;
//     current = current.next;
//   }

//   index > 0 && (tail.next = insert);
//   return head;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;
// console.log(insertNode(a, "m", 2));

console.log(insertNode(a, "m", 4));
// a -> b -> c -> d -> m
// 4    3    2    1    0
// c
