// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// p: str
// r: array
// e:
// 'aefaae' => ['ae','fa','ae']
// 'wer' => ['we','r_']
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  // loop through str i+2
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    let subStr = str.substring(i, i + 2);
    // conditionals: substr.length < 1 => substring+'_'
    // push substr to empty arr
    subStr.length < 2 ? result.push(subStr + "_") : result.push(subStr);
  }
  return result;
}
