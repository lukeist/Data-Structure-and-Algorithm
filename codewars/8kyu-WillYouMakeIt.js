// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

// prep
// parameters: distance, mpg, fuelleft => numbers positive/whole/
// return: boolean => true / false
// examples: (zeroFuel(50, 25, 2), true);  (zeroFuel(100, 50, 1), false)

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //
  return distanceToPump / fuelLeft <= mpg;
};
