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
