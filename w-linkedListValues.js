class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const linkedListValues = (head) => {
//   let current = head;
//   const arr = [];
//   while (current) {
//     arr.push(current.val);
//     current = current.next;
//   }

//   return arr;
// };

const linkedListValues = (head) => {
  const arr = [];
  const fillArr = (head, arr) => {
    if (!head)
      // {
      return;
    // } else {
    arr.push(head.val);
    fillArr(head.next, arr);
    // }
  };

  fillArr(head, arr);

  return arr;
};
