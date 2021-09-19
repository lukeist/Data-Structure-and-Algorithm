// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";

//   const s = "scissors";
//   const r = "rock";
//   const p = "paper";
//   const p1w = "Player 1 won!";
//   const p2w = "Player 2 won!";
//   if (p1 === s) {
//     switch (p2) {
//       case r:
//         return p2w;
//       case p:
//         return p1w;
//     }
//   } else if (p1 === p) {
//     switch (p2) {
//       case r:
//         return p1w;
//       case s:
//         return p2w;
//     }
//   } else {
//     switch (p2) {
//       case s:
//         return p1w;
//       case p:
//         return p2w;
//     }
//   }
// };

// better solution
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  let game = { rock: "scissors", scissors: "paper", paper: "rock" };
  if (p1 === game[p2]) {
    return "Player 2 won!";
  } else {
    return "Player 1 won!";
  }
};
