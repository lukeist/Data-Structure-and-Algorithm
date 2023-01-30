// // O(n) O(1)
// var isPalindrome = function(head) {

// }
// //                    f
// //           s
// // 1 -> 2 -> 2 -> null     1 -> null
// //                         c      n
// //           p
// //

// // 1 -> 2 -> 2 -> 1

// // O(n) O(n)
// // var isPalindrome = function(head) {
// //     let s = ''
// //     let c = head;
// //     while (c) {
// //         s += c.val;
// //         c = c.next;
// //     }

// //     let i = 0, j = s.length - 1;
// //     while (i <= j) {
// //         if (s[i] !== s[j]) return false
// //         i++;
// //         j--;
// //     }

// //     return true;
// // };

let canvas = new Map();
for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) {
    canvas.set(`${x},${y}`, "white");
  }
}

console.log(canvas);
