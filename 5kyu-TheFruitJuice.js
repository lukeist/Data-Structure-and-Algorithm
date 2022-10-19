// https://www.codewars.com/kata/5264603df227072e6500006d/train/javascript

class Jar {
  constructor() {
    this.list = [
      { type: "apple", amount: 200, concentration: NaN },
      { type: "banana", amount: 200, concentration: NaN },
    ];
  }
}

// [
//   { type: 'apple',
//     amount: 100,
//   }
// ]

Jar.prototype.add = function (amount, type) {
  let newTotalAmount = amount + this.getTotalAmount();
  let isTypeInList = false;

  for (let item of this.list) {
    item.type === type && (isTypeInList = true) && (item.amount += amount);
  }

  this.list.map((item) => (item.concentration = item.amount / newTotalAmount));

  let concentration = amount / newTotalAmount;
  !isTypeInList && this.list.push({ type, amount, concentration });
};

//
//

// 5x + 5x = 10
// 5x + 5x + y = 15

// x + 2x = 10 => x = 10/3
// x + 2x + y = 10 + 2 =>

//
Jar.prototype.pourOut = function (amount) {
  let concentrationRemain =
    (this.getTotalAmount() - amount) / this.getTotalAmount();
  this.list.map((item) => (item.concentration *= concentrationRemain));
};

Jar.prototype.getTotalAmount = function () {
  //   console.log(this.list);
  //   return this.list.reduce((a, b) => a.amount + b.amount, 0);
  const sum = this.list.reduce((a, b) => {
    console.log(a.amount);
    return a.amount + b.amount;
  }, 0);
  return sum;
  //   return this.list.filter((item) => (item.type = "apple"));
  //   return this.list;
};

Jar.prototype.getConcentration = function (type) {
  let typeObj = this.list.filter((item) => item.type === type);
  return typeObj.concentration;
};

let jar = new Jar();

// // jar.getConcentration("apple"); // 0
// jar.add(200, "apple");

// // jar.getTotalAmount(); // 200
// // jar.getConcentration("apple"); // 1

// jar.add(200, "banana");
// jar.getTotalAmount(); // 400, 'Wrong total amount after adding more juice');
// console.log(jar.list);
console.log(jar.getTotalAmount());

// jar.getConcentration("apple"); //, 0.5, 'Wrong concentration after adding some other juice');
// jar.getConcentration("banana"); //, 0.5, 'Wrong concentration after adding some other juice');

// jar.pourOut(200);
// jar.getTotalAmount(); //, 200, 'Wrong total amount after pouring out some juice');
// jar.getConcentration("apple"); //, 0.5, 'Pouring out juice must not change the concentrations');
// jar.getConcentration("banana"); //, 0.5, 'Pouring out juice must not change the concentrations');

// jar.add(200, "apple");
// jar.getTotalAmount(); //, 400, 'Wrong total amount after adding some juice again');
// jar.getConcentration("apple"); //, 0.75, 'Wrong concentration after adding juice again');
// jar.getConcentration("banana"); //, 0.25, 'Wrong concentration after adding juice again');
