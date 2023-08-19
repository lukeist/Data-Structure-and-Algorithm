// p: head of ll
// r: array
// e: // a -> b -> c -> d
// linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
//

// const linkedListValues = (head) => {
//   let c = head;
//   let array = [];

//   while (!!c) {
//     array.push(c.val);
//     c = c.next;
//   }

//   return array;
// };

const linkedListValues = (head) => {
  const array = [];
  const explore = (head) => {
    if (!head) return;
    array.push(head.val);
    explore(head.next);
  };

  explore(head);
  return array;
};
