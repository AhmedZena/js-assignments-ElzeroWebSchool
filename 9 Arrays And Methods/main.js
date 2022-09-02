// assignment one

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
//  4 ... 4%3
console.log(myFriends.slice(-++num, myFriends.length - (num % --num))); // ["Ahmed", "Elham", "Osama"];

// 3%2 -1
console.log(myFriends.slice((num % --num) - --num, myFriends.length - num)); // ["Ahmed", "Elham", "Osama"];

// Method 2

// 0 1 2
console.log([myFriends[--num], myFriends[++num], myFriends[++num]]); // ["Ahmed", "Elham", "Osama"];

// console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];

// assignment two

// don't use the slice method in your code  AND don't use numbers in your code

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

// assignment three

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

// finalArr =arrOne.reverse().concat(arrTwo.reverse()); // ['X', 'D', 'C', 'Z', 'B', 'A']
// finalArr = [`${arrTwo [arrTwo.length - true]},${arrOne.reverse()},${arrTwo.reverse().slice(true)}` ] ; // only element
// finalArr = (`${arrTwo [arrTwo.length - true]}${arrOne.reverse()}${arrTwo.reverse().slice(true)}`).split("")  ; // only element
// finalArr =[ arrTwo [arrTwo.length - true] , arrOne.reverse().concat(arrTwo.reverse().slice(true) )]; // only element
// finalArr =[ arrTwo [arrTwo.length - true] , arrOne.slice(0)]; // only element

finalArr = arrTwo
  .slice(length - true)
  .concat(arrOne.reverse())
  .concat(arrTwo.reverse().slice(true)); // only element

// finalArr = arrOne.concat(arrTwo);
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
console.log(finalArr.length); // ["Z", "X", "D", "C", "B", "A"]

// assignment four

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
x = -1;
y = parseInt(words.indexOf("Ahmed"));
console.log(++y); // "Google"
console.log(words[2][0].slice(website.length).toUpperCase()); // ZERO

// assignment five

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("Found");
}

haystack.includes(needle) ? console.log("Found") : console.log("Not Found");

if (haystack.includes(needle)) console.log("Found");

// assignment six

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr2[arr1.length - true]
  .concat(arr1[arr1.length - true].concat(arr2[arr1.length]))
  .toLowerCase();
console.log(allArrs); // fxy
