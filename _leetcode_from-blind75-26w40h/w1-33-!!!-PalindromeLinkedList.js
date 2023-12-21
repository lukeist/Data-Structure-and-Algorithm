/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//                     s     
//           1 -> 2 -> 2 -> 1
//                              f
//                     s
//           1 -> 2 -> 2 -> 1 -> 1
//                               f   
//             null <- 2 <- 1 <- 1         
//                               p    c    n        

// 1 -> 2 -> 2 <- 1 <- 1
//           |
//           V
//          null


var isPalindrome = function(head) {
    let s = head;
    let f = head;

    while (f && f.next) {
        s = s.next;
        f = f.next.next;
    }

    let p = null;
    let c = s;
    while (c) {
        let n = c.next;
        c.next = p;
        p = c;
        c = n;
    }

    let cur = head;
    while (cur !== s) {
        if (cur.val !== p.val) return false;
        cur = cur.next;
        p = p.next;
    }

    return true;
};