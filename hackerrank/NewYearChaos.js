// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// Example

// If person  bribes person , the queue will look like this: . Only  bribe is required. Print 1.

// Person  had to bribe  people to get to the current position. Print Too chaotic.

// Function Description

// Complete the function minimumBribes in the editor below.

// minimumBribes has the following parameter(s):

// int q[n]: the positions of the people after all bribes
// Returns

// No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
// Input Format

// The first line contains an integer , the number of test cases.

// Each of the next  pairs of lines are as follows:
// - The first line contains an integer , the number of people in the queue
// - The second line has  space-separated integers describing the final state of the queue.

// Constraints

// Subtasks

// For  score
// For  score

// Sample Input

// STDIN       Function
// -----       --------
// 2           t = 2
// 5           n = 5
// 2 1 5 3 4   q = [2, 1, 5, 3, 4]
// 5           n = 5
// 2 5 1 3 4   q = [2, 5, 1, 3, 4]
// Sample Output

// 3
// Too chaotic
// Explanation

// Test Case 1

// The initial state:

// pic1(1).png

// After person  moves one position ahead by bribing person :

// pic2.png

// Now person  moves another position ahead by bribing person :

// pic3.png

// And person  moves one position ahead by bribing person :

// pic5.png

// So the final state is  after three bribing operations.

// Test Case 2

// No person can bribe more than two people, yet it appears person  has done so. It is not possible to achieve the input state.

function minimumBribes(q) {
  // Write your code here
  let numberOfBribes = 0;
  let qAscending = [...Array(q.length + 1).keys()].slice(1);

  for (let i = 0; i < q.length; i++) {
    const numAtI = q[i];
    const indexOfNumAtIInQ = q.indexOf(numAtI);
    const indexOfNumAtIInQAscending = qAscending.indexOf(numAtI);
    // console.log(`loop to index ${i} in q, num at that index in q: ${numAtI}`);
    // console.log("new array:");
    // console.log(qAscending.join());

    if (indexOfNumAtIInQ !== indexOfNumAtIInQAscending) {
      const indexChange = indexOfNumAtIInQAscending - indexOfNumAtIInQ;
      if (indexChange > 2) {
        console.log("Too chaotic");
        return;
      }
      numberOfBribes += indexChange;

      qAscending.splice(indexOfNumAtIInQ, 0, numAtI);
      //   console.log(
      //     `array after inserting ${numAtI} at index ${indexOfNumAtIInQ}:`
      //   );
      //   console.log(qAscending.join());

      const numRemoved = qAscending.splice(qAscending.lastIndexOf(numAtI), 1);
      //   console.log(`array after removing ${numAtI}:`);
      //   console.log(qAscending.join(), numRemoved[0]);
    }
  }
  console.log(numberOfBribes);
}
// let q = [1, 2, 3, 4, 5];
// let q = [1, 2, 5, 3, 7, 8, 6, 4];
// 1 2 3 4 5 6 7 8
// 1 2 5 3 7 4 6 8
// 1 2 5 3 7 8 4 6
// 1 2 5 3 7 8 6 4

//
// let q = [2, 1, 5, 3, 4];
let q = [2, 5, 1, 3, 4];
minimumBribes(q);

// for (let i = 0; i < q.length; i++) {
//     const numAtI = q[i];
//     const indexOfNumAtIInQ = q.indexOf(numAtI);
//     const indexOfNumAtIInQAscending = qAscending.indexOf(numAtI);

//     console.log(
//       qAscending[i] + "--",

//       numAtI,
//       indexOfNumAtIInQ,
//       indexOfNumAtIInQAscending,
//       indexChange
//     );

//     if (0 < indexChange && indexChange < 3) {
//       numberOfBribes += indexChange;
//     }
//     if (indexChange > 2) {
//       console.log("Too chaotic");
//       return;
//     }

//     // console.log(q[i] + "-" + q.indexOf(q[i + 1]) + "=" + numberOfBribes);
//   }
//   console.log(numberOfBribes);
