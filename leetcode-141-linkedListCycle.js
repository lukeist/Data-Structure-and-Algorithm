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
