// Convert name information into our format
// As part of our data conversion process, we take in files from a variety of clients and vendors. Everyone seems to have a – shall we say, unique? – way of representing name information. Some vendors provide everything in one field:

// "Sam A Smith Jr"
// while others provided more structured formats:

// firstName: "Sam"
// middleInitial: "A"
// lastName: "Smith"
// suffix: "Jr"
// In general, we find the more structured formats to be easier to work with. We can quickly do things like sort or group by last name, organize the information in a table, change the way we present information back to users, and so on.

// Instructions
// Your goal is to write a function that takes in an unstructured name as a string (e.g. "Sam A Smith Jr") and returns an array with 4 elements:

// [First Name, Middle Initial, Last Name, Suffix]

// Note that not all names will contain all 4 parts. If a part is not present, you should return an empty string in that position. To keep things simple, you can assume names are always in the order above, i.e. you will not see cases like "Last, First M, Suffix." (If only data in the real world were always this clean!)

// Although the name itself is unstructured, you can use some rules to help identify whether something is a first or last name vs a middle initial or suffix:

// First name (required) – Always 1 word with 2 or more characters
// Middle initial (optional) – Always a single letter, although it may be followed by a period.
// Last name (required) – Always 1 word with 2 or more characters. May contain a hyphen. (See the examples below.)
// Suffix (optional) – Could be any string, but we only want to return it if matches one of the following values: Sr, Jr, II, III, IV. So for example, if the name "Joe Smith V" (Joe Smith the Fifth) comes through, you should return ["Joe", "", "Smith", ""] (ignoring the V since it is invalid).

// You should remove any punctuation (other than hyphenated last names). We have provided a function you can call to help with this.

// Here are some example names you might need to handle, along with the expected return value:

// Alice Arnold => ["Alice", "", "Arnold", ""]
// Charlie C Combs => ["Charlie", "C", "Combs", ""]
// Edna Edwards => ["Edna", "", "Edwards", ""]
// George Geralds Jr => ["George", "", "Geralds", "Jr"]
// Ignacio I. Iglesias III => ["Ignacio", "I", "Iglesias", "III"]
// Katarina Korkova-Kowalski => ["Katarina", "", "Korkova-Kowalski", ""]
// Tests
// We have provided some example names that you can try out by clicking the "Run Tests" option and looking at the test results pane in the lower-right corner. (You may need to click on the green arrows to see log output if you add logging and the test passes. Also note that at smaller screen sizes, "Run Tests" might be a "Play" icon.)

function removePunctuation(str) {
  return str.replace(/[^\w\s-]/g, "");
}

function removePunctuation(str) {
  return str.replace(/[^\w\s-]/g, "");
}

function nameToParts(name) {
  let arr = removePunctuation(name).split(" ");
  const validSuff = ["Sr", "Jr", "II", "III", "IV"];

  if (arr.length === 4) {
    if (validSuff.includes(arr[3])) return arr;
    arr.pop();
  }

  if (arr.length === 3) {
    if (arr[1].length === 1) {
      return [...arr, ""];
    }
    if (validSuff.includes(arr[2])) {
      return [arr[0], "", arr[1], arr[2]];
    }
    arr.pop();
  }

  return [arr[0], "", arr[1], ""];
}

// function nameToParts(name) {
//   // your code here!
//   const suffixName = ["Sr", "Jr", "II", "III", "IV"];

//   const arrOfName = name.split(" ");
//   const result = [arrOfName[0]];

//   if (arrOfName.length === 2) return [arrOfName[0], "", arrOfName[1], ""];
//   if (arrOfName.length === 3) {
//     if (arrOfName[1].length === 1) {
//         result.push(arrOfName[1]);
//       } else {
//         if (arrOfName[1].includes(".")) {
//           result.push(arrOfName[1][0]);
//         } else {
//           result.push("");
//           result.push(arrOfName[1]);
//         }
//       }
//   }

//   if (arrOfName[1].length === 1) {
//     result.push(arrOfName[1]);
//   } else {
//     if (arrOfName[1].includes(".")) {
//       result.push(arrOfName[1][0]);
//     } else {
//       result.push("");
//       result.push(arrOfName[1]);
//     }
//   }

//   result.push(arrOfName[2]);

//   suffixName.includes(arrOfName[3])
//     ? result.push(arrOfName[3])
//     : result.push("");

//   return result;
// }

console.log(nameToParts("First Last"));

//   let assert = require('chai').assert;

// describe('should split names to parts', function() {
//   it('handles just first and last correctly', function() {
//     // deepEqual tests that the arrays have the same values in the same order
//     assert.deepEqual(nameToParts('First Last'), ['First', '', 'Last', ''])
//   })

//   it('handles first, middle, and last correctly', function() {
//     assert.deepEqual(nameToParts('First M Last'), ['First', 'M', 'Last', ''])
//   })

//   it('handles first, last, suffix correctly', function() {
//     assert.deepEqual(nameToParts('First Last Sr'), ['First', '', 'Last', 'Sr'])
//   })

//   it('handles first, middle, last, and suffix correctly', function() {
//     assert.deepEqual(nameToParts('First M Last Sr'), ['First', 'M', 'Last', 'Sr'])
//   })

//   it('handles punctuation correctly', function() {
//     assert.deepEqual(nameToParts('First M. Last Sr.'), ['First', 'M', 'Last', 'Sr'])
//   })

//   it('ignores invalid suffix', function() {
//     assert.deepEqual(nameToParts('First M Last VIII'), ['First', 'M', 'Last', ''])
//   })
// })
