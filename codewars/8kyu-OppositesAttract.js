// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  // moment of truth
  console.log(
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
      (flower1 % 2 !== 0 && flower2 % 2 === 0)
  );

  // better   return flower1 % 2 !== flower2 % 2;
  // better   return (flower1 + flower2) % 2 === 1
}

lovefunc(1, 4);
