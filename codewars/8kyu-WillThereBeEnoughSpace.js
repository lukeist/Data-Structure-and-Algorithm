// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
// prep
function enough(cap, on, wait) {
  // your code here

  return wait + on - cap < 0 ? 0 : wait + on - cap;
}
