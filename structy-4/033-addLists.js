class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  // p: head of ll, head of ll;
  // r: head of ll;
  // e:
  //                 c1
  //    1 -> 2 -> 6
  //                  c2
  // +  4 -> 5 -> 3
  // --------------
  //              c
  //    5 -> 7 -> 9
  
  // 
  //        c1
  //    1 
  //        c2
  //        cc
  // +  9 -> 9 -> 9
  // --------------------
  //    c
  //    0 -> 0 -> 0 -> 1
  
  // const addLists = (head1, head2) => {
  //   let head = new Node(null);
  //   let c = head;
  //   let c1 = head1;
  //   let c2 = head2;
  //   let tenth = 0;
    
  //   while (!!c1 && !!c2) {
  //     let sum = c1.val + c2.val + tenth;
  //     if (sum > 9) {
  //       sum -= 10;
  //       tenth = 1; 
  //     } else {
  //       tenth = 0;  
  //     }
  //     c.next = new Node(sum);
  //     c = c.next;
  //     c1 = c1.next;
  //     c2 = c2.next;
  //   }
  
  //   let cc = c1 || c2;
  //   while (!!cc) {
  //     let sum = cc.val + tenth;
  //     if (sum > 9) {
  //       sum -= 10;
  //       tenth = 1; 
  //     } else {
  //       tenth = 0;  
  //     }
      
  //     c.next = new Node(sum);
  //     c = c.next;
  //     cc = cc.next;
  //   }
    
  //   if (tenth === 1) c.next = new Node(1);
  //   return head.next;
  // };
  
  
  //        c1
  //    1 
  //        c2
  // +  9 -> 9 -> 9
  // --------------------
  //    c
  //    0 -> 0 -> 0 -> 1
  // const addLists = (head1, head2) => {
  //   let head = new Node(null);
  //   let c = head;
  //   let c1 = head1;
  //   let c2 = head2;
  //   let tenth = 0;
    
  //   while (!!c1 || !!c2) {
  //     const val1 = !!c1 ? c1.val : 0;
  //     const val2 = !!c2 ? c2.val : 0;
  //     let sum = val1 + val2 + tenth;
      
  //     if (sum > 9) {
  //       sum -= 10;
  //       tenth = 1; 
  //     } else {
  //       tenth = 0;  
  //     }
      
  //     c.next = new Node(sum);
  //     c = c.next;
  //     !!c1 && (c1 = c1.next);
  //     !!c2 && (c2 = c2.next);
  //   }
  
  //   if (tenth === 1) c.next = new Node(1);
  //   return head.next;
  // };
  
  const addLists = (head1, head2, carry = 0) => {
    if (!head1 && !head2) {
    if (carry === 1) {
        return new Node(1);
      } else {
        return null;
      }
    }
    
    let val1 = !head1 ? 0 : head1.val;
    let val2 = !head2 ? 0 : head2.val;
    const sum = val1 + val2 + carry;
    
    const head = new Node(sum > 9 ? sum - 10 : sum);
  
    if (!head1) head.next = addLists(head1, head2.next, sum > 9 ? 1 : 0);
    if (!head2) head.next = addLists(head1.next, head2, sum > 9 ? 1 : 0);
    if (!!head && !!head2) head.next = addLists(head1.next, head2.next, sum > 9 ? 1 : 0);
    
    return head;
}
    