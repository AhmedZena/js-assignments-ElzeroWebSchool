// function Car(name, model, price) {
// this.n = name;
// this.m = model;
// this.p = price;
// }

// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

//class syntax
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run = function () {
    return "Car Is Running Now";
  };

  stop = function () {
    return "Car Is Stopped";
  };
}

// let car1 = new Car("lada", "2009 model", 60000);
// console.log(car1.n);
// console.log(car1.m);
// console.log(car1.p);

// console.log("#".repeat(50));

let car1 = new Car("MG ", "2022", 420000);

console.log(
  `Car One Name Is ${car1.n}And Model Is ${car1.m} And Price Is ${car1.p} `
);
console.log(car1.run());
