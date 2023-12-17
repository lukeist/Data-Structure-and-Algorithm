// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
// prep
// parameters: number + whole int / no float, -, no str, [], no null, underfined, no funny stuff ... is there any else i'm unawared of?
// return number / not print console
// examples: 2d => 80; 3d=> 100; 5d=> 180; 7d => 230; 10d => 350
function rentalCarCost(d) {
  // Your solution here
  // conditionals
  // 1 day => 40
  // 3 -6 days: 40x d - 20
  // > 7 days: 40 x d - 50 (not - 20?)

  const pricePerDay = 40 * d;
  const firstPromotion = 20;
  const firstRate = 3;
  const secondPromotion = 50;
  const secondRate = 7;

  return d < firstRate
    ? pricePerDay
    : firstRate <= d && d < secondRate
    ? pricePerDay - firstPromotion
    : pricePerDay - secondPromotion;
}
