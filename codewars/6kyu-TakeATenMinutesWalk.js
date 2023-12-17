// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
// p : array []
// r: boolean(no print console)
// e:
// ['n','s','n','s','n','s','n','s','n','s']), 'should return true
// ['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false')
// n w n e

function isValidWalk(walk) {
  // length > 10 => false
  if (walk.length !== 10) return false;
  let west = 0;
  let east = 0;
  let north = 0;
  let south = 0;
  // loop walk and count how many n-e-w-s
  for (const letter of walk) {
    switch (letter) {
      case "n":
        north++;
        break;
      case "s":
        south++;
        break;
      case "w":
        west++;
        break;
      case "e":
        east++;
        break;
    }
  }
  // num of 'w' = num of 'e' && num of 's' = num of 'n' => true
  return north === south && east === west;
}

isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]);
