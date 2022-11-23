/*
Q1:

Thrilling Teleporters allows players to randomize the teleporters each game.
The game is played as follows: 
1. Each turn, the player rolls a die numbered from 1 to die_sides. 
2. The player moves forward the rolled number of squares. 
3. The player stops at last_square if they reach it. 
4. If the player finishes on a square with a teleporter, they are moved to where the teleporter points.
 
 
inputs:
-A collection of teleporter strings
-The number of sides on the die
-The square the player starts on
-The last square on the board
Write a function that returns whether or not it is possible to get to the last square from the starting square in any number of turns.
 
Examples:teleporters1 = ["10,8", "11,5", "12,7", "13,9"]
               +------------------+
               |        +-----+   |
               v        v     |   |
0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20
                     ^     ^          |   |
                     +-----|----------+   |
                           +--------------+
                           
With a 4 sided die, starting at square 0 with a board ending at square 20 (as pictured above)
No matter what you roll, it's not possible to get past the teleporters from 10-13.

finishable(teleporters1, 4, 0, 20) => False

If an additional teleporter was added from square 2 to square 15, this would be possible to finish.
teleporters2 = ["10,8", "11,5", "12,7", "13,9", "2,15"]
finishable(teleporters2, 4, 0, 20) => True

But if we started on square 9, then it is still impossible as square 2 cannot be reached.
finishable(teleporters2, 4, 9, 20) => False
*/

// p: array (limitless of strings); int; int; int;
// r: boolean;
// e:
// teleporters2 = ["10,8", "11,5", "12,7", "13,9", "2,15"]
// finishable(teleporters2, 4, 0, 20) => True

//                                         T0
//                              1/   2 /        3 \      4 \
//                             1      2         3         4
//                      1/ 2 /  3 \  4 \                  1/ 2 /  3 \  4 \
//                    2     3   4     5                    5  6    F 7     8v
//                                    \                                     \
//                                     \                                    3
//                                      \T                                / / \ \
//                                       20                                     8

// {10, 12, 2} Set.size === teleporter2
// teleporters2 = ["10,8", "12,5","2,15"]

const finishable = (tele, sides, start, end, memo = {}) => {
  if (start === end) return true;
  if (start in memo) return memo[start];

  const loop = new Set();

  for (let i = 1; i <= sides; i++) {
    for (let t of tele) {
      const [a, b] = t.split(",");
      if (i === +a) {
        if (finishable(tele, sides, b, end, memo)) return true;
      } else {
        if (finishable(tele, sides, start + i, end, memo)) {
          memo[start] = true;
          return true;
        }
      }
    }
  }

  memo[start] = false;
  return false;
};
