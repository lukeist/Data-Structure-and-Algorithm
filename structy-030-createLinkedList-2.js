class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// p: arr
// r: ll

//      h -> e -> y
// h ->
//      c

// recursive O(n) O(n)
const createLinkedList = (values, i = 0, head = new Node(values[i])) => {
  if (i === values.length) return null;

  head.next = createLinkedList(values, i + 1, new Node(values[i + 1]));

  return head;
};

// // iterative O(n) O(n)
// const createLinkedList = (values) => {
//   let head = new Node(null);
//   let current = head;

//   for (let val of values) {
//     current.next = new Node(val);
//     current = current.next;
//   }

//   return head.next;
// };
