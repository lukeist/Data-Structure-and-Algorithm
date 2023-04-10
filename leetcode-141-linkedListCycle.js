const hasCycle = (head) => {
  let s = head,
    f = head;
  while (f && f.next) {
    s = s.next;
    f = f.next.next;
    if (s === f) return true;
  }
  return false;
};

// var hasCycle = function(head) {
//   const visited = new Set();
//   let c = head;

//   while (c) {
//       if (visited.has(c)) return true;
//       visited.add(c);
//       c = c.next;
//   }

//   return false;
// };
