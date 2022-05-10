// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
  // TODO
  const lessThan4LikeIt = (arr) => {
    if (arr.length === 1) return `${arr[0]} likes this`;
    if (arr.length === 2) return `${arr[0]} and ${arr[1]} like this`;
    if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  };

  return names.length === 0
    ? "no one likes this"
    : names.length > 0 && names.length < 4
    ? lessThan4LikeIt(names)
    : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

likes(["Alex", "Jacob", "Mark", "Max"]);

// better solution:
// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }
