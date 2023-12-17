// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
//parameters: array
// return: array
// examples: friend ["Ryan", "Kieran", "Mark", "Lu"] `shouldBe` ["Ryan", "Mark"]

function friend(friends) {
  // filter item.length < 5

  return friends.filter((e) => e.length === 4);
}
