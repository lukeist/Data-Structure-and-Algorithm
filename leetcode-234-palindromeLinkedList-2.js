// p: head of ll
// r: boolean;

//               s
// 1 ---> 2 ---> 2 ---> 2 ---> 1
//                             f
//                                    c
//                             p

//
//               s
// 1 ---> 2 ---> 2 ---> 1
//                             f
//                             c      n
//                      p

var isPalindrome = function (head) {
  let s = head;
  let f = head;
  while (f && f.next) {
    s = s.next;
    f = f.next.next;
  }

  let c = s;
  let p = null;
  while (c) {
    n = c.next;
    c.next = p;
    p = c;
    c = n;
  }

  while (p) {
    if (p.val !== head.val) return false;
    p = p.next;
    head = head.next;
  }

  return true;
};
