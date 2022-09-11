let theNumber = 100020003000;

// console.log(theNumber.toString());
// let arr = [];
// let theNumberSet = new Set(theNumber.toString()).forEach(function (item) {
//   if (item != "0") {
//     arr.push(item);
//   }
// });
// console.log(arr.join("")); // 123
// theNumberSet.delete("0");
// console.log(theNumberSet);
// let theNumberSet = new Set(theNumber.toString().split("0"));
// theNumberSet.delete("0");
// console.log(theNumberSet);
// Needed Output
// 123;

//another way to do it with set method
//first i make a set of the numbers to get the unique numbers and then split at 0 to git rid of it
// then i make array from all the above then joined it
// then wow it worked magic

console.log(Array.from(new Set(theNumber.toString().split("0"))).join(""));

//another way to do it with Regular Expression
//easy i just made a pattern which return only the nums greater than 0 that return array
//so i joined the result to make it as a string
let regExp = /[1-9]/gi;
console.log(theNumber.toString().match(regExp).join(""));
