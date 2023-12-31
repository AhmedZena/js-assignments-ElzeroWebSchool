// Task 21
console.log("---------------------------Task 21---------------------------");
function getLastDigit(num) {
  return +`${num}`.at(-1);
}

console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // Number

// Task 22
console.log("---------------------------Task 22---------------------------");
let str1 = "AElzero";
let str2 = "ZAcademy";

console.log((str1.slice(1) + str2.slice(1)).replace(/([a-z])([A-Z])/, "$1 $2")); // Elzero Academy
// console.log("???"); // Elzero Academy

// Task 23
console.log("---------------------------Task 23---------------------------");
// function reversing(str) {
//   return (
//     str.split(" ")[0].slice(0, 2) +
//     str.split(" ")[0].slice(2, -1).split("").reverse().join("") +
//     str.split(" ")[0].slice(-1) +
//     " " +
//     str.split(" ")[1].slice(0, 2) +
//     str.split(" ")[1].slice(2).split("").reverse().join("")
//   );
// }
function reversing(str) {
  return str
    .split(" ")
    .map(
      (word, idx) =>
        word.slice(0, 2) +
        (idx == 0
          ? word.slice(2, -1).split("").reverse().join("")
          : word.slice(2).split("").reverse().join(""))
    )
    .join(" ");
}

console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl

// Task 24
console.log("---------------------------Task 24---------------------------");
function dashBetweenOdd(num) {
  //   let newNum = [];

  //   for (let i = 0; i < `${num}`.length - 1; i++) {
  //     if (`${num}`[i] % 2 !== 0 && `${num}`[i + 1] % 2 !== 0) {
  //       console.log(`${num}`[i], `${num}`[i + 1]);
  //       newNum.push(`${num}`[i], "-");
  //     } else {
  //       newNum.push(`${num}`[i]);
  //     }
  //   }
  //   newNum.push(`${num}`.slice(-1));
  //   return newNum.join("");

  // one line
  return `${num}`.replace(/([13579])(?=[13579])/g, "$1-");
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
// Task 25
console.log("---------------------------Task 25---------------------------");
let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];

// Output Needed
// [];

// console.log((myArr.length = 0));
// console.log(myArr);

// console.log(myArr.splice(myArr.length));

// make myArr empty with other ways
// myArr.length = 0;
// myArr.splice(0);
// myArr.splice(0, myArr.length);
// myArr = [];
// myArr = new Array();
// myArr = Array.from(myArr);
// myArr = Array.of(...myArr);

// Task 26
console.log("---------------------------Task 26---------------------------");
let myArr2 = [10, 10, 20, 20, 10, 30, 50, 20, 10];

// Output Needed
// [10, 20, 30, 50];

console.log([...new Set(myArr2)]); // [10, 20, 30, 50]
console.log(Array.from(new Set(myArr2))); // [10, 20, 30, 50]
console.log(myArr2.filter((num, idx, arr) => arr.indexOf(num) === idx)); // [10, 20, 30, 50]
console.log(myArr2.filter((num, idx) => myArr2.indexOf(num) === idx)); // [10, 20, 30, 50]

// Task 27
console.log("---------------------------Task 27---------------------------");
let myArr3 = ["69", "108", "122", "101", "114", "111"];

// Your Code Here

// console.log(result); // Elzero

console.log(String.fromCharCode(...myArr3)); // Elzero

// Task 28
console.log("---------------------------Task 28---------------------------");
// Write Your Function Here

console.log(
  customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10])
);
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]

function customMerge(...args) {
  // without using flat() method or spread operator
  let result = [];
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      result.push(...args[i]);
    } else {
      result.push(args[i]);
    }
  }
  // make all elements in the array numbers
  return result.map((num) => +num).sort((a, b) => a - b);
}

// Task 29
console.log("---------------------------Task 29---------------------------");
// Write Your Function Here

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10

function customCalc(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    // console.log(typeof +args[i]);
    // if (typeof +args[i] === "number") {
    if (!isNaN(+args[i])) {
      result += +args[i];
    }
  }
  return result * args[0] * args[args.length - 1];
}

// Task 30
console.log("---------------------------Task 30---------------------------");
for (let i = 1; i < 100; i += 5) {
  // Your Code Here
  console.log(i);
  i = i + 5;
}

// Output Needed
// 1;
// 11;
// 21;
// 31;
// 41;
// 51;
// 61;
// 71;
// 81;
// 91;

// Task 31
console.log("---------------------------Task 31---------------------------");
let myArray = [100, 200, 300, 400];

// Method 1
let clonedArray = [...myArray];
console.log(clonedArray); // [100, 200, 300, 400]

// Method 2
let clonedArray2 = myArray.slice();
console.log(clonedArray2); // [100, 200, 300, 400]

// Method 3
let clonedArray3 = myArray.concat();
console.log(clonedArray3); // [100, 200, 300, 400]

// Method 4
let clonedArray4 = Array.from(myArray);
console.log(clonedArray4); // [100, 200, 300, 400]

// Method 5
let clonedArray5 = Array.of(...myArray);
console.log(clonedArray5); // [100, 200, 300, 400]

// Method 6
let clonedArray6 = myArray.filter((num) => true);
console.log(clonedArray6); // [100, 200, 300, 400]

// Method 7
let clonedArray7 = myArray.map((num) => num);
console.log(clonedArray7); // [100, 200, 300, 400]

// Method 8
let clonedArray8 = myArray.reduce((acc, cur) => {
  acc.push(cur);
  return acc;
}, []);
console.log(clonedArray8); // [100, 200, 300, 400]

// Method 9
let clonedArray9 = [];
myArray.forEach((num) => clonedArray9.push(num));
console.log(clonedArray9); // [100, 200, 300, 400]

// Method 10
let clonedArray10 = [];
for (let i = 0; i < myArray.length; i++) {
  clonedArray10.push(myArray[i]);
}
console.log(clonedArray10); // [100, 200, 300, 400]

// Task 32
console.log("---------------------------Task 32---------------------------");
let strNumber = "10";

// Method 1
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10 <= Same Solution

// Method 2
console.log(+strNumber); // 10

// Method 3
console.log(Number(strNumber)); // 10

// Method 4
console.log(parseInt(strNumber)); // 10

// Method 5
console.log(parseFloat(strNumber)); // 10

// Method 6
console.log(strNumber / 1); // 10

// Method 2
console.log(strNumber << 0); // 10

// Method 8
console.log(strNumber >> 0); // 10

// Method 9
console.log(strNumber >>> 0); // 10

// Task 33
console.log("---------------------------Task 33---------------------------");

console.log(
  `%cElzero Web School !`,
  `color: white; background-color: blue; padding: 10px; font-size: 20px;`
);

// Task 34
console.log("---------------------------Task 34---------------------------");
let arr = [1, 1, 1, 2, 3, 4, 3];

// Method 1
let uniqueElements1 = [...new Set(arr)];
console.log(uniqueElements1); // [1, 2, 3, 4]

// Method 2
let uniqueElements2 = Array.from(new Set(arr));
console.log(uniqueElements2); // [1, 2, 3, 4]

// Method 3
let uniqueElements3 = arr.filter((num, idx, arr) => arr.indexOf(num) === idx);
console.log(uniqueElements3); // [1, 2, 3, 4]

// Method 4
let uniqueElements4 = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(uniqueElements4); // [1, 2, 3, 4]

// Method 5
let uniqueElements5 = [];
arr.forEach((num) => {
  if (!uniqueElements5.includes(num)) {
    uniqueElements5.push(num);
  }
});
console.log(uniqueElements5); // [1, 2, 3, 4]

// Task 35
console.log("---------------------------Task 35---------------------------");

// create serial that contain 20 characters from a to z and 0 to 9 and A to Z and unique every time you refresh the page

// Method 1
let serial = "";
let characters =
  "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < 20; i++) {
  serial += characters[Math.floor(Math.random() * characters.length)];
}

// First Refresh
console.log(serial); // 9cBcrg3kcWF4GZSlWXAM

// Second Refresh
// console.log(serial); // vPeu6HXBgiXXj6jpch4P

// Third Refresh
// console.log(serial); // RQuHFBjCdnp0Ghhp0544

// Task 36
console.log("---------------------------Task 36---------------------------");
// Write Your Code Here

// method 1
// let smallLetters = "";
// for (let i = 97; i <= 122; i++) {
//   smallLetters += String.fromCharCode(i);
// }

// method 2
// let smallLetters = "";
// for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
//   smallLetters += String.fromCharCode(i);
// }

// method 3
let smallLetters = "";
for (let i = 0; i < 26; i++) {
  smallLetters += String.fromCharCode("a".charCodeAt(0) + i);
}

console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz

// Task 37
console.log("---------------------------Task 37---------------------------");
let numOne = 100;
let numTwo = 200;

if (numOne > numTwo) {
  console.log("1st > 2nd");
} else if (numOne < numTwo) {
  console.log("1st < 2nd");
} else {
  console.log("1st = 2nd");
}

// 1st < 2nd

// Write Your Ternary Operator Code Here
console.log(
  numOne > numTwo ? "1st > 2nd" : numOne < numTwo ? "1st < 2nd" : "1st = 2nd"
);

// Task 38
console.log("---------------------------Task 38---------------------------");
let str = "i lovE elzeRO weB schOOL";

// Output Needed
// ("I Love Elzero Web School");

console.log(
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
); // I Love Elzero Web School

// Task 39
console.log("---------------------------Task 39---------------------------");
let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

// Write Your Code Here
// prevent myData from being pushed using __proto__

myData.__proto__.push = function () {
  return this.length;
};

myData.push("Name");
console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']
