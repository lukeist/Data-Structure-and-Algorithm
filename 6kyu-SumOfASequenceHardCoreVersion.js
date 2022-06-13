// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
// p: num +
// r: num
// e:
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
//-1, -5, -3 --> -1 -4
// recursive
const sequenceSum = (begin, end, step) => {
  // if (step > end) return begin;
  // let sum = newBegin + step;
  // console.log(begin, newBegin, sum);
  // console.log(sequenceSum(newBegin, end, step));
  // if (begin >= end) {
  //   console.log(sequenceSum(begin, end, step));
  //   return sequenceSum(begins, end, step);
  // } else {
  //   console.log(begin + sequenceSum(begin + step, end, step));
  //   return begin + sequenceSum(begin + step, end, step);
  // }
};

// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
//
// ////////////////////////////////////////////////////
// const sequenceSum = (begin, end, step) => {
//   let totalSteps = Math.abs(Math.ceil(end / step) - 1);
//   // let realEnd = //???????????????????;
//   console.log(totalSteps);
//   let sum =
//     (totalSteps / 2) * (totalSteps + 1) * step + begin * (totalSteps + 1); // -3 * ( 1 + -1/-3) * 1/2 = -3 + -1 /2
//   //
//   console.log(sum);
//   return sum;
// };
// ///////////////////////////////////////////////////

// sequenceSum(-1, -5, -3);

// sequenceSum(-1, -5, -3); // 1/2 * 1+1 * -3
//Expected: -5, instead got: 0 // -1 + 3-*0   +   -3 -1 + -3-5  + -3-8  = -1 -4 -7  -10     = -1 +3`0 + -1 + 3`1 + -1+3*2 +-1+3-*3 = begin + -3*(1+2+3) = sum
// sequenceSum(1, 5, 3);
sequenceSum(2, 6, 2); //Expected = 12 // 2 4 6 => 2 * ( 1 + 2 + 3) => sum = step*() =>  sum = step * ((end+begin)*end/step) //////////////////////// 2 sum / step = end2 + end*begin
// sequenceSum(780, 68515438, 5); //Expected: 469436517521190, instead got: 469436558629986
// 187774607000000 = end2 + 780*end
// 469436517582420
// sequenceSum(-2, 4, 658); //Expected: -2, instead got: 4

// -5/-3
// 1 2 3 4 5 6 = 21 => 6/2 * 6+1 => (totalSteps/2 )* (totalSteps+1)*  ==> n * (n+1) / 2 = 6 * 6+1
// 1 2 3 4 5 = 15 => 5/2 * 5+1
// 1 2 3 4 = 10 => 4/2 * 4+1
// 2 * (1+2+3) //  3+1 * 3/2

// -4  -1  => -3 *1 + -1        + -3*0 + -1
//         =>  -3*(1+0) + -1*2 =>  (totalSteps/2 )* (totalSteps+1)*step + begin*(totalSteps +1)
// -7 -4  -1  => -3 (2+1+0) +  -1*3
// -10 -7 -4 -1 => -3 (3+2+1+0) + -1*4
// -13 -10 -7 -4 -1  =>13/3 -1 =  -3 (4+3+2+1+0 ) + -1*4
// 2 4 6 => 6/2 -1 = 3 steps ==> 2(0+1+2) + 2*3    ============> step * (totalSteps-1)
// 1 2 3 4 5 => 5/1 -1 = 4 steps
// 2 4 6 8 10

///////////////////////////////////////////////////////////////////////////////////////////////////
