/*
Q: return all product titles that start with user entered keyword

Inputs:
- 100M product titles - this is a flat file, with unique product titles. Don't care about spaces.
- every product title has [A-Z][0-9]
- User enters a keyword of string: abc, def, iph, ipho, iphone.
- User can change the keyword very quickly by typing/delete/backspace. Refresh the results when they change the keyword.
- trigger search only after minimum of 3 characters are entered.

Output:
- return ALL the product title that START with the user-entered keyword.
- don't run your algorithm if user enters < 3 letters in the keyword.

*/
const search = (data, input) => {
  input = input.toLowerCase();

  // we sort all data alphabetically.
  data.sort();

  // we build a tree of items from the given data.
  let Tree = {};

  for (let item of data) {
    let branch = Tree;

    for (let i = 0; i < item.length; i++) {
      if (!branch[item[i]]) {
        branch[item[i]] = {};
      }
      branch = branch[item[i]];

      i >= 2 && (branch.suggestion = (branch.suggestion || []).concat(item)); // we only add suggesting items after 3 or more characters in input.
    }
    branch.isWord = true; // we mark true at the end of each loop to mark a complete word (branch).
  }
  //   console.log(Tree);

  // we return results in an array
  let output = [];
  branch = Tree;
  for (let i = 0; i < input.length; i++) {
    if (branch) {
      branch = branch[input[i]];
    }
    i >= 2 && output.push(branch ? branch.suggestion : []); // we only shoow suggesting items after 3 or more characters in input.
  }

  // examples of output after certain number of characters in input:
  //
  // 3 characters
  output.length === 1 && console.log(output[0]);

  // 4 characters
  output.length === 2 && console.log(output[1]);

  // 5 characters
  output.length === 3 && console.log(output[2]);

  // and so on...
  return output;
};
search(
  [
    "ipoa",
    "ipwao",
    "ipcje",
    "iphaa",
    "ihalo",
    "iwoa",
    "iphone12",
    "iphone13",
    "ipaint",
    "ipain",
    "ipant",
    "iphona",
    "iphei",
    "iphhe",
    "iphao",
    "ipoa",
    "iphaeao",
    "ipcefge",
    "iphafa",
    "ihaerlo",
    "iw3a",
  ],
  "iph"
);

// // ipho => case iphone
// /*iphone12
// iphone13
// ipaint
// ipain
// ipant

// iph --> [iphone12, iphone13]
// ipai -->
// ipan --> [ipant]

// // p: string lowercase ()
// // 3rd: start seach

// // iph    => iphone
// //            => iphone 1 ...
// //            => iphone case
// // r:

// */

// // {p: [],
// // ip: []

// // }

// //
// // 'iph' => string >=3 => 'iphone3'.includes('iph') && result.push(...)

// // let = input.lowerCase()
// // data.filter(product => product.)
// //

// //      i
// //     / \\ \ \
// //    p
// //

// class Tree {

// }

// const searchResult = (data, input) => {

// }
// // -- * --
// //Given an array of N integers. Every number repeats even number of times, except one that repeats odd number of times.
// //Write a function that returns the number that repeats odd number of times.
// // p: array of int
// // r: n
// // [1,1,1,2,2,2,2,6,6,7,7,7,7,8,8,8,9,9]

// const findOdd = (arr) => {
//     arr.sort((a,b), a-b)
//     let count = 0
//     for (let i=0; i < arr.length; i++) {
//         if (arr[i] === arr[i-1]) count++
//         if (arr[i]) !== arr[a-1]) count = 0
//         if (count % 2 !== 0) return arr[i]
//     }

//  return null
// }

// /*

//     const map = {}
//     for (let num of arr) {
//         map[num] = (map[num] || 0) + 1
//     }

//     for (let num in map) {
//         if (map[num] % 2 !== 0) return num
//     }
// */
//     return -1
// }

// -- * --

// chkumar@amazon.com

/*
const searchResult = (data, input) => {
    input = input.lowerCase()
    let result
    if (input.length >= 3) {
        result = data.filter(product => product.includes(input))
    }
    
    return result
}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////

// class Tree {
//     constructor() {
//       this.children = {};
//     }

//     addTerm(input) {
//       let branch = this;

//       for (let i = 0; i < input.length; i++) {
//         const char = input.charAt(i);

//         if (!branch.children[char]) {
//           branch.children[char] = new Tree();
//         }
//         branch = branch.children[char];
//       }

//       branch.input = input;
//     }
//   }

//   // we use dfs to
//   const recursion = (node, output = []) => {
//     if (!!node.input && node.input.length >= 3) {
//       output.push(node.input);
//     }

//     for (const child in node.children) {
//       recursion(node.children[child], output);
//     }

//     return output;
//   };

//   // main function
//   const search = (data, str) => {
//     // we sort all data alphabetically
//     data.sort();

//     // we build a branch
//     let branch = new Tree();

//     // we add all product titles into the branch
//     for (const product of data) {
//       branch.addTerm(product);
//     }

//     const output = [];
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charAt(i);
//       branch = !!branch ? branch.children[char] : null;
//       output.push(!!branch ? recursion(branch) : []);
//     }

//     console.log(output);
//     return output;
//   };
