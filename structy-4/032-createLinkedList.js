class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  
  // p: array;
  // r: head of ll;
  // e: 
  // createLinkedList([1, 7, 1, 8]);
  // 1 -> 7 -> 1 -> 8
  // const createLinkedList = (values) => {
  //   const head = new Node(null);
  //   let c = head;
    
  //   for (let v of values) {
  //     c.next = new Node(v);
  //     c = c.next;
  //   }
    
  //   return head.next;
  // };
  
  
const createLinkedList = (values, i = 0) => {
    if (i === values.length) return null;
    const head = new Node(values[i]);
    head.next = createLinkedList(values, i + 1);
    return head;
};
    