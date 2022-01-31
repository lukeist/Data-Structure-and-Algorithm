// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
//return the total number of smiling faces in the array
// p: array
// r: num + int
// e:

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
  const smileyF = { eyes: [":", ";"], nose: ["", "-", "~"], mouth: [")", "D"] };
  //   const smileyF = [":", ";", "", "-", "~", ")", "D"];
  const checkSmiley = (face) => {
    return face.length < 3
      ? smileyF.eyes.indexOf(face[0]) > -1 &&
          smileyF.mouth.indexOf(face[1]) > -1
      : smileyF.eyes.indexOf(face[0]) > -1 &&
          smileyF.nose.indexOf(face[1]) > -1 &&
          smileyF.mouth.indexOf(face[2]) > -1;
  };

  console.log(arr.filter((face) => checkSmiley(face)).length);
  return arr.filter((face) => checkSmiley(face)).length;
  //     console.log(e);
  //     smileyF.eyes.some((v) => {
  //       console.log(e.includes(v));
  //       e.includes(v);
  //     });
  //     //  &&
  //     //   smileyF.nose.some((v) => {
  //     //     console.log(e.includes(v));
  //     //     e.includes(v);
  //     //   }) &&
  //     //   smileyF.mouth.some((v) => {
  //     //     console.log(e.includes(v));
  //     //     e.includes(v);
  //     //   });
  //   }).length;
}

countSmileys([":)", ":(", ":D", ":O", ":;"]);
