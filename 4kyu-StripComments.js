function solution(input, markers) {
  input = input.split("\n");
  console.log(input);

  for (let x = 0; x < input.length; x++) {
    for (let i = 0; i < input[x].length; i++) {
      for (let j = 0; j < markers.length; j++) {
        input[x][i] === markers[j] && (input[x] = input[x].slice(0, i));
      }
    }
    // remove white space
    // input[x].lastIndexOf(" ") > -1 &&
    //   (input[x] = input[x].slice(0, input[x].lastIndexOf(" ")));
    input[x] = input[x].trim();
  }
  console.log(input);
  return input.join("\n");
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
