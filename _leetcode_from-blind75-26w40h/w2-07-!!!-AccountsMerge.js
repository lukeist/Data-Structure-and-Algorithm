/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

// p: array;
// r: array;
// e:
//
// ["John","johnsmith","john_newyork"],
// ["Mary","mary"],
// ["John","johnsmith","john00"],
// ["John","johnnybravo"]
//
//
// {
//      johnsmith: [0, 2],
//      john_newyork: [0],
//      ...
// }
//
//
//

// TRASH:
// var accountsMerge = function(accounts) {
//   // create hashmap & add index;
//   const map = {};
//   for (let i = 0; i < accounts.length; i++) {
//       for (let j = 1; j < accounts[i].length; j++) {
//           const email = accounts[i][j];
//           if (!map[email]) map[email] = new Set();
//           map[email].add(i);
//       }
//   }
// console.log(map)
//   for (let email in map) {
//       map[email] = Array.from(map[email])
//   }
// console.log(map)

//   // loop thru hashmap, any array.len > 1
//   for (let email in map) {
//       if (map[email].length > 1) {
//           const temp = new Set();
//           for (let i = 0; i < map[email].length; i++) {
//               const accIndex = map[email][i];
//               const lastIndex = accounts.length - 1;

//               [accounts[accIndex],accounts[lastIndex]] = [accounts[lastIndex],accounts[accIndex]]
//               const popped = accounts.pop();
//               // console.log(popped)
//               for (let j = 0; j < popped.length; j++) {
//                   temp.add(popped[j])
//               }
//           }
//           accounts.push(Array.from(temp));
//       }
//   }
//   // => move all index to the end of accounts => pop;
//   // join all indexes => push back to accounts;
//   // console.log(accounts)
//   for (let a of accounts) {
//       a.sort()
//   }

//   return accounts;
// };

// // [["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]
