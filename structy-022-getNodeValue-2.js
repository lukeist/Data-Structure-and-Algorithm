// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// p: head of ll, num
// r: num
// recursion O(n) O(n)
const getNodeValue = (head, index) => {
  if (!head) return null;
  if (index === 0) return head.val;

  return getNodeValue(head.next, index - 1);
};

// // iteration O(n) O(1)
// const getNodeValue = (head, index) => {
//   let current = head;

//   while (current) {
//     if (index === 0) return current.val;
//     index--;
//     current = current.next
//   }

//   return null;
// };

module.exports = {
  getNodeValue,
};
