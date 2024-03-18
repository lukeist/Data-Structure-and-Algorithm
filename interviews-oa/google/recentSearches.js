// Design a search data structure to store and display recent searches.
// If a user just clicks the search bar without typing anything,
// it should return the N most recent searches.
// Given a search string it should save the search
// and also return the N most recent searches

// p: number int,
// r:

// [a,b,c]
// [b,c,d]
// [b,c,d]

class RecentSearches {
  constructor(cap) {
    this.cap = cap;
    this.searches = [];
  }

  search(string) {
    if (this.searches.length === this.cap) {
      if (this.searches.includes(string)) {
        const i = this.searches.indexOf(string);
        this.searches.splice(i, 1);
        this.searches.push(string);
      } else {
        this.searches.shift();
        this.searches.push(string);
      }
    } else if (this.searches.length >= 0) {
      this.searches.push(string);
    }
  }
}

const s = new RecentSearches(3);

s.search("1");
console.log(s.searches);
s.search("2");
console.log(s.searches);
s.search("3");
console.log(s.searches);
s.search("4");
console.log(s.searches);
s.search("3");
console.log(s.searches);
