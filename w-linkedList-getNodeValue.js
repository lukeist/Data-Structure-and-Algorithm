// https://structy.net/problems/get-node-value

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const getNodeValue = (head, index) => {
//   // todo
//   let count = 0;
//   let current = head;
//   while (current) {
//     if (count === index) return current.val;
//     current = current.next;
//     count++;
//   }
//   return null;
// };

// const getNodeValue = (head, index) => {
//   let count = 0;
//   const findIndex = (head, index, count) => {
//     // console.log(head, count);

//     if (!head) return null;
//     if (index === count) {
//       //   console.log(count, head.val);
//       return head.val;
//     }

//     count++;
//     return findIndex(head.next, index, count);
//   };
//   // const a
//   console.log(findIndex(head, index, count));
//   return findIndex(head, index, count);
// };
const getNodeValue = (head, index) => {
  if (!head) return null;
  if (index === 0) return head.val;
  index--;
  return getNodeValue(head.next, index);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'
