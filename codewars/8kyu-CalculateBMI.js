// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
  const bmi = weight / (height * height);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi <= 25.0) {
    return "Normal";
  } else if (bmi > 25.0 && bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
