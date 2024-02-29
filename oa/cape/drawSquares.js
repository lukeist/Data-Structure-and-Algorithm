// Note: I'm evaluating your answer on the simplicity of your code. The goal is for it to be readable; someone new should be able to walk into this room afterward and instantly understand what your function is doing.

// Draw Square
// Draw a square inside of a square

// draw_square(outer, inner)

// Given:
// Outer = size of outer square
// Inner = size of inner square
// Outer > Inner >= 1

// Output:
// String representation of inner and outer squares

// Ex:

// draw_square(5, 3)
// -----
// -+++-
// -+++-
// -+++-
// -----

// draw_square(6, 3)
// ------
// -+++--
// -+++--
// -+++--
// ------
// ------

// draw_square(5, 1) 2
// -----
// -----
// --+--
// -----
// -----

// draw_square(2, 1)
// +-
// --

// draw_square(4, 3)
// xxx-
// xxx-
// xxx-
// ----

// xxx-
// +-

const drawSquares = (outer, inner) => {
  const minus = "-";
  const plus = "+";

  const firstPlus = Math.floor((outer - inner) / 2);
  const restMinus = outer - firstPlus - inner;
  for (let i = 0; i < outer; i++) {
    if (firstPlus <= i && i < firstPlus + inner) {
      const line =
        minus.repeat(firstPlus) + plus.repeat(inner) + minus.repeat(restMinus);
      console.log(line);
    } else {
      console.log(minus.repeat(outer));
    }
  }
};

drawSquares(5, 3);
console.log("****************");
drawSquares(6, 3);
console.log("****************");
drawSquares(5, 1);
console.log("****************");
drawSquares(2, 1);
console.log("****************");
drawSquares(4, 3);
