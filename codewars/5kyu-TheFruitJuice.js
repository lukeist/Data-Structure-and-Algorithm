// https://www.codewars.com/kata/5264603df227072e6500006d/train/javascript

//better:
function Jar() {
  this.amounts = {};
  this.total = 0;
}

Jar.prototype.add = function (amount, type) {
  if (this.amounts[type] == null) this.amounts[type] = 0;
  this.amounts[type] += amount;
  this.total += amount;
};

Jar.prototype.pourOut = function (amount) {
  for (var v in this.amounts)
    this.amounts[v] -= amount * this.getConcentration(v);
  this.total -= amount;
};

Jar.prototype.getTotalAmount = function () {
  return this.total;
};

Jar.prototype.getConcentration = function (type) {
  var conc = this.amounts[type] / this.total;
  return conc > 0 ? conc : 0;
};

// class Jar {
//   constructor() {
//     this.list = [];
//   }
// }

// Jar.prototype.add = function (amount, type) {
//   let newTotalAmount = amount + this.getTotalAmount();
//   let isTypeInList = false;

//   for (let item of this.list) {
//     item.type === type && (isTypeInList = true) && (item.amount += amount);
//   }

//   this.list.map((item) => (item.concentration = item.amount / newTotalAmount));

//   let concentration = amount / newTotalAmount;
//   !isTypeInList && this.list.push({ type, amount, concentration });
// };

// Jar.prototype.pourOut = function (amount) {
//   let amountRemain = (this.getTotalAmount() - amount) / this.getTotalAmount();
//   this.list.map((item) => (item.amount *= amountRemain));
//   amountRemain === 0 && this.list.map((item) => (item.concentration = 0));
// };

// Jar.prototype.getTotalAmount = function () {
//   return this.list.reduce((a, b) => a + b.amount, 0);
// };

// Jar.prototype.getConcentration = function (type) {
//   let concentrationOfType = this.list.filter((item) => item.type === type);
//   return concentrationOfType.length === 0
//     ? 0
//     : concentrationOfType[0].concentration;
// };

let jar = new Jar();

jar.getConcentration("apple"); // 0
jar.add(200, "apple");

jar.getTotalAmount(); // 200
jar.getConcentration("apple"); // 1

jar.add(200, "banana");
jar.getTotalAmount(); // 400, 'Wrong total amount after adding more juice');

jar.getConcentration("apple"); //, 0.5, 'Wrong concentration after adding some other juice');
jar.getConcentration("banana"); //, 0.5, 'Wrong concentration after adding some other juice');

jar.pourOut(200);
jar.getTotalAmount(); //, 200, 'Wrong total amount after pouring out some juice');
jar.getConcentration("apple"); //, 0.5, 'Pouring out juice must not change the concentrations');
jar.getConcentration("banana"); //, 0.5, 'Pouring out juice must not change the concentrations');

jar.add(200, "apple");
jar.getTotalAmount(); //, 400, 'Wrong total amount after adding some juice again');
jar.getConcentration("apple"); //, 0.75, 'Wrong concentration after adding juice again');
jar.getConcentration("banana"); //, 0.25, 'Wrong concentration after adding juice again');
// jar.pourOut(400);

console.log(jar.amounts);
console.log(jar.getTotalAmount());
console.log(jar.getConcentration("apple"));
console.log(jar.getConcentration("banana"));
