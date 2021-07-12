// https://www.codewars.com/kata/5aa736a455f906981800360d

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}
