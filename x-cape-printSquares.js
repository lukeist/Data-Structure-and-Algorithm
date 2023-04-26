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

// draw_square(5, 1)
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

// 4 - 2 = 2 => ++ --
// -++- // -
// -+-
// 6 - 3 = 3 / 2 = 1 || 2
// -+++--

//

// p: num, num
// r: string

const draw_square = (outter, inner) => {
  const minus = "-";
  const plus = "+";
  let outterStr = "-".repeat(outter);
  let innerStr = "";

  let diff = outter - inner;
  let firstOfOutter = Math.floor(diff / 2);

  let basicLine =
    minus.repeat(firstOfOutter) +
    plus.repeat(inner) +
    minus.repeat(diff - firstOfOutter);
  let basicInner = basicLine(inner);

  // for (let i = 1; i <= outter; i++) {
  //   for (let j = 1; j <= inner; j++) {

  //   }
  // }
};

// console.log(draw_square(5,3))
