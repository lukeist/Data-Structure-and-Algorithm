// https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(full) {
    const arr = full.split(" ");

    if (arr.length === 2) {
      this.firstName = arr[0];
      this.lastName = arr[1];

      return this.firstName + " " + this.lastName;
    }
  }
}

var namedOne = new NamedOne("Naomi", "Wang");

console.log(namedOne);
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);

namedOne.firstName = "john";
namedOne.lastName = "doe";

namedOne.fullName = "mari dann";
namedOne.fullName = "mari_dann";

console.log(namedOne);
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);
