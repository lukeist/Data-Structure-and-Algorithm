// https://structy.net/problems/premium/create-linked-list

// p: arr
// r: head of ll

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// recursion
const createLinkedList = (values, i = 0) => {
  if (i === values.length) return null;

  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);

  return head;
};

// // iteration
// const createLinkedList = (values) => {
//   if (values.length === 0) return null;

//   const head = new Node(values[0]);
//   let current = head;

//   // loops thru arr
//   for (let i = 1; i < values.length; i++) {
//     //// create new Nodes and connect them to head
//     let node = new Node(values[i]);
//     current.next = node;
//     current = current.next;
//   }

//   return head;
// };

console.log(createLinkedList(["h", "e", "y"]));
// h -> e -> y
