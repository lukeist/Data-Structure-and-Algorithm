// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
// Example

// The alphabet is rotated by , matching the mapping above. The encrypted string is .

// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

// Function Description

// Complete the caesarCipher function in the editor below.

// caesarCipher has the following parameter(s):

// string s: cleartext
// int k: the alphabet rotation factor
// Returns

// string: the encrypted string
// Input Format

// The first line contains the integer, , the length of the unencrypted string.
// The second line contains the unencrypted string, .
// The third line contains , the number of letters to rotate the alphabet by.

// Constraints

//  is a valid ASCII string without any spaces.

// Sample Input

// 11
// middle-Outz
// 2
// Sample Output

// okffng-Qwvb
// Explanation

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

function caesarCipher(s, k) {
  // Write your code here
  const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseArr = upperCaseStr.split("");
  const lowerCaseArr = lowerCaseStr.split("");

  const sArr = s.split("");

  const newArr = sArr.map((char) =>
    // char.toUpperCase() === char.toLowerCase()
    //   ? char
    //   : char === char.toUpperCase()
    //   ? upperCaseArr.indexOf(char) + k > 26
    //     ? upperCaseArr[upperCaseArr.indexOf(char) + k - 26]
    //     : upperCaseArr[upperCaseArr.indexOf(char) + k]
    //   : lowerCaseArr.indexOf(char) + k > 26
    //   ? lowerCaseArr[lowerCaseArr.indexOf(char) + k - 26]
    //   : lowerCaseArr[lowerCaseArr.indexOf(char) + k]

    char.toUpperCase() === char.toLowerCase()
      ? char
      : char === char.toUpperCase()
      ? upperCaseArr[(upperCaseArr.indexOf(char) + k) % 26]
      : lowerCaseArr[(lowerCaseArr.indexOf(char) + k) % 26]
  );
  //   console.log(s);
  //   console.log(newArr.join(""));
  return newArr.join("");
}

// caesarCipher("There's a starman waiting in the sky", 3);
// caesarCipher("middle-OutZ", 2);
caesarCipher(
  "!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U",
  62
);
