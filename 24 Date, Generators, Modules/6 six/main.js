// // Write Your Generator Function Here

// //that generation function does not benefit coz the num is limited
// function* gen() {
//  console.log(14);
//   yield 14;
//   yield 154;
//   let s = 14;
//   for (let i = 140; i < Math.pow(2, 11); i = i + 140) {
//     // console.log(s);
//     console.log(i);
//     // s = i;
//     s += i + 200;
//     yield s;
//     // console.log(i);
//     // console.log(s);
//   }

//that is the best way thai goes to the maximum safe number
function* gen() {
  let s = 14;
  for (let i = 140; i < Math.pow(2, 31); i = i + 200) {
    // console.log(i);
    yield s;
    s += i;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// console.log(14);
// for (let i = 154; i < Math.pow(2, 30); i = i + 200) {
//   console.log(i);
// }
