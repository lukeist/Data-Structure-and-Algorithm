// const users = [{name: 'luan', age: 13}, {name: 'bear', age: 75}, {name: 'john', age: 21 }]

// // 1. filter the ones can legally drink   > 21
// users.filter(user => user.age >= 21);
// // 2. sort the users by age
// users.sort((a, b) => a.age - b.age);
// // 3. sum up the age
// users.reduce((p, c) => p + c.age, 0)

// navigateTo(url: string) => void

// History {
//   linkTo(url) {

//   }
//   back() {

//   }
//   forward() {

//   }
// }

// <Link onClick={() => Hostory.linkTo('page1')} />
// <Link onClick={() => Hostory.linkTo('page2')} />
// <Link onClick={() => Hostory.linkTo('page3')} />
// <Link onClick={() => Hostory.back()} />
// <Link onClick={() => Hostory.forward()} />

// map.last = [1,2,3,4];
// current = map.last.pop()
// map.last = [1,2,3,4,5];

// map = {
//   last: ['page1', 'page-1'],
//   current: 5,
//   next: [9,]

// we could have 3 variables to track our pages:
let last = 0,
  current = 0,
  next = 0;
const pages = [];

// when the user click on a new page, we'll have:
pages.push("page1");
// for more pages, pages will become:
["page1", "page2", "page3", "page4", "page5", "page6", "page7"];
