// Task 40
console.log("---------------------------Task 40---------------------------");
const myData = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

// Write Your Code Here
// prevent adding new properties to object myData

Object.preventExtensions(myData);

myData.skill = "Programming";

console.log(myData.user); // Elzero
console.log(myData.age); // 41
console.log(myData.country); // Egypt
console.log(myData.skill); // Undefined

// Task 41
console.log("---------------------------Task 41---------------------------");
const myData2 = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

// Your Code Here

// method 1
// const cloned = Object.assign({}, myData2);

// method 2
// const cloned = { ...myData2 };

// method 3
// const cloned = JSON.parse(JSON.stringify(myData2));

// method 4
const cloned = Object.create(
  Object.getPrototypeOf(myData2),
  Object.getOwnPropertyDescriptors(myData2)
);

console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}

// Task 42
console.log("---------------------------Task 42---------------------------");

// let flag = true;
// document.addEventListener("keydown", (e) => {
//   if (e.ctrlKey && e.altKey && e.shiftKey && flag) {
//     console.log("You Pressed Ctrl + Alt + Shift");
//     flag = false;
//   }
// });

// Task 44
console.log("---------------------------Task 44---------------------------");
let last = 30;

// First Request Output Needed
// 29;
// 25;
// 21;
// 17;
// 13;
// 9;
// 5;
// 1;

//  Second Request Output Needed
// 120;

// Write Your Code Here
// First Request  only odd numbers from 30 to 1
for (let i = last; i > 0; i -= 4) {
  //   console.log(i); // 30 26 22 18 14 10 6 2
  console.log(i - 1); // 29 25 21 17 13 9 5 1
}

// Second Request
let result = 0;
for (let i = last; i > 0; i -= 4) {
  result += i - 1;
}

console.log(`result = ${result}`); // 120

// Task 45
console.log("---------------------------Task 45 ---------------------------");

let rangeEnd = 10;

// Write Your Code Here
let myRange = [];
for (let i = 1; i <= rangeEnd; i++) {
  myRange.push(i);
}
console.log(myRange); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// method 2
let myRange2 = [...Array(rangeEnd).keys()].map((i) => i + 1);
console.log(myRange2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// method 3
let myRange3 = Array.from(Array(rangeEnd), (_, i) => i + 1);

// Task 46
console.log("---------------------------Task 46 ---------------------------");
let nums = [10, -20, 300, 50, 100, -50];

// method 1
let maxNumber = nums.reduce((acc, cur) => {
  return acc > cur ? acc : cur;
}, 0);

console.log(maxNumber); // 300

// method 2
let maxNumber2 = Math.max(...nums);
console.log(maxNumber2); // 300

// method 3
let maxNumber3 = Math.max.apply(null, nums);
console.log(maxNumber3); // 300

// method 4
let maxNumber4 = nums.sort((a, b) => b - a)[0];
console.log(maxNumber4); // 300

// Task 48
console.log("---------------------------Task 48 ---------------------------");

function createStars(num) {
  let result = "";
  for (let i = 1; i <= num * 2 - 1; i += 2) {
    result += "*".repeat(i) + "\n";
  }
  return result;
}
console.log(createStars(8));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************

// Task 49
console.log("---------------------------Task 49 ---------------------------");
function createStars2(num) {
  let result = "";
  //   for (let i = 1; i <= num * 2 - 1; i += 2) {
  //     result += "*".repeat(i) + "\n";
  //   }
  //   for (let i = num * 2 - 3; i >= 1; i -= 2) {
  //     result += "*".repeat(i) + "\n";
  //   }

  // one loop
  for (let i = 1; i <= num * 2 - 1; i += 2) {
    result += "*".repeat(i) + "\n";
    if (i == num * 2 - 1) {
      for (let j = num * 2 - 3; j >= 1; j -= 2) {
        result += "*".repeat(j) + "\n";
      }
    }
  }
  return result;
}

console.log(createStars2(3));

// Output Needed
// *
// ***
// *****
// ***
// *

console.log(createStars2(7));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *

// Task 50
console.log("---------------------------Task 50 ---------------------------");

console.log(createStars3(6));

// Output Needed
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

function createStars3(num) {
  let result = "";
  for (let i = num * 2 - 1; i >= 1; i -= 2) {
    result += " ".repeat((num * 2 - 1 - i) / 2) + "*".repeat(i) + "\n";
    if (i == 1) {
      for (let j = 1; j <= num * 2 - 1; j += 2) {
        result += " ".repeat((num * 2 - 1 - j) / 2) + "*".repeat(j) + "\n";
      }
    }
  }
  return result;
}
