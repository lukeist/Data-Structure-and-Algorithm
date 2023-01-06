const longestStreak = (head) => {
  return ls(head, null, 0, 0);
};

const ls = (head, preVal, count, max) => {
  if (!head) return max;
  head.val === preVal ? count++ : (count = 1);
  max = Math.max(max, count);

  return ls(head.next, head.val, count, max);
};

// const longestStreak = (head) => {
//   if (!head) return 0;

//   let c = head;
//   let p = null;
//   let count = 1;
//   let max = 0;

//   while (c) {
//     c.val === p ? count++ : (count = 1);
//     max = Math.max(max, count);
//     p = c.val;
//     c = c.next;
//   }
//   return max;
// };
