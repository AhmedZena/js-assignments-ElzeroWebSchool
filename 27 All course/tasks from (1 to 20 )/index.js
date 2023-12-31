// Task 1
console.log("---------------------------Task 1---------------------------");
let fileName = "Elzero.php";

console.log(fileName.split(".")[0]); // Elzero
console.log(fileName.split(".")[1]); // php

// Task 2
console.log("---------------------------Task 2---------------------------");
function addEl(str) {
  //   if (str === "") {
  //     return "";
  //   }
  //   if (str.startsWith("El")) {
  //     return str;
  //   }

  str === "" || str.startsWith("El") ? str : (str = "El" + str);
  return str;
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero

// Task 3
console.log("---------------------------Task 3---------------------------");
let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";

// Output Needed
// "Hello Elzero Web School @ We Love Programming"
console.log(myString.slice(0, myString.indexOf(" @#!@#$%%^&*") - 1)); // Hello Elzero Web School @ We Love Programming

// Task 4
console.log("---------------------------Task 4---------------------------");
function checkRange(n1, n2, n3, n4, n5) {
  //   range is n4 to n5
  if (n1 >= n4 && n1 <= n5 && n2 >= n4 && n2 <= n5 && n3 >= n4 && n3 <= n5) {
    return "Yes All Numbers In Range";
  }
  return "Not All Numbers Is In Range";
}

console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

// Task 5
console.log("---------------------------Task 5---------------------------");
function replaceFirstWithLast(word) {
  // replace first letter with last letter
  //   let first = word[0];
  //     let last = word[word.length - 1];
  //     let middle = word.slice(1, word.length - 1);
  //     return last + middle + first;
  return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
}

console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oelloH

// Task 6
console.log("---------------------------Task 6---------------------------");

function checkBiggestNum(word) {
  // return biggest number in string
  // let biggest = 0;
  // for (let i = 0; i < word.length; i++) {
  //     if (word[i] > biggest) {
  //         biggest = word[i];
  //     }
  // }
  // return biggest;
  return Math.max(...word);
}

console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9

// Task 7
console.log("---------------------------Task 7---------------------------");
let nums1 = [20, 100, 50, 10, 15, -20, 30];

// Needed Output
// [100, 50];
console.log(nums1.sort((a, b) => b - a).slice(0, 2)); // [100, 50]

// Task 8
console.log("---------------------------Task 8---------------------------");
let nums2 = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

// Your Code Here

// Closest Number Is 88
console.log(nums2.sort((a, b) => Math.abs(goal - a) - Math.abs(goal - b))[0]); // 88

// Task 9
console.log("---------------------------Task 9---------------------------");
function swapEveryTwoChars(word) {
  //   swap every two chars from upper to lower and from lower to upper
  for (let i = 0; i < word.length; i += 2) {
    word[i] === word[i].toUpperCase()
      ? (word = word.replace(word[i], word[i].toLowerCase()))
      : (word = word.replace(word[i], word[i].toUpperCase()));
  }
  return word;
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello

// Task 10
console.log("---------------------------Task 10---------------------------");
// Write Your Function Implementation Here

String.prototype.elzeroRepeat = function (num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += this;
  }
  return result;
};

console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

// Task 11
console.log("---------------------------Task 11---------------------------");
let myMoney = 5301503206;

// Needed Output
// 5, 301, 503, 206;

console.log(myMoney.toLocaleString().split(",").join(", ")); // 5, 301, 503, 206

// Task 12
console.log("---------------------------Task 12---------------------------");
let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

names.forEach((name) => {
  if (name[0].toLowerCase() === name[name.length - 1].toLowerCase()) {
    result.push(name);
  }
});

console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']

// Task 13
console.log("---------------------------Task 13---------------------------");
let theName = "Elzero";

// Line 1 => Eo
// Line 2 => lzer
// Line 3 => ze

console.log(theName[0] + theName[theName.length - 1]); // Eo
console.log(theName.slice(1, theName.length - 1)); // lzer
//  log the letters in the middle dynamically
console.log(theName.slice((theName.length - 1) / 2, theName.length / 2 + 1)); // ze

// Task 14
console.log("---------------------------Task 14---------------------------");
function repeatWithRules(word) {
  //   let result = "";
  //   for (let i = 0; i < word.length; i++) {
  //     result += word[i].repeat(i + 1);
  //   }
  //   return result;
  return word
    .split("")
    .map((letter, index) => letter.repeat(index + 1))
    .join("");
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo

// Task 15
console.log("---------------------------Task 15---------------------------");
function concatenateWithoutLast(words) {
  return words.map((word) => word.slice(0, word.length - 1)).join(" ");
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

// Task 16
console.log("---------------------------Task 16---------------------------");
function getCharacters(word, nums) {
  // Your Code Here
  return word.slice(0, nums) + word.slice(-nums);
}

console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool

// Task 17
console.log("---------------------------Task 17---------------------------");
function formatName(theName) {
  // Your Code Here
  return theName
    .split(" ")
    .map((name, idx) => {
      return idx == 0 ? name[0] : name[0].toLowerCase();
    })
    .join(".");
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s

// Task 18
console.log("---------------------------Task 18---------------------------");
let st = "elzero";

console.log(st[0].toUpperCase() + st.slice(1));
console.log(st.split("")[0].toUpperCase() + st.slice(1));
console.log(st.charAt(0).toUpperCase() + st.slice(1));
console.log(st.replace(/^./, st[0].toUpperCase()));
console.log(st.charAt(0).toUpperCase() + st.substring(1));
console.log(
  st
    .split("")
    .map((s, idx) => {
      return idx == 0 ? s.toUpperCase() : s;
    })
    .join("")
);

console.log(
  [...st]
    .map((s, idx) => {
      return idx == 0 ? s.toUpperCase() : s;
    })
    .join("")
);
// Output Needed
// ("Elzero");
// ("Elzero");
// ("Elzero");
// ("Elzero");
// ("Elzero");
// ("Elzero");
// ("Elzero");

// Task 19
console.log("---------------------------Task 19---------------------------");
let st2 = "Web SchoolElzero ";

console.log(st2.slice(-7) + st2.slice(0, -7));
// Needed Output
// ("Elzero Web School");

// Task 20
console.log("---------------------------Task 20---------------------------");
let st3 = "Elzero";
console.log(st3[st3.length - 1]);
console.log(st3.slice(-1));
console.log(st3.at(-1));
console.log(st3.substring(st3.length - 1));
console.log(st3.charAt(st3.length - 1));
console.log(st3.split("")[st3.length - 1]);
console.log(st3.endsWith("o") ? "o" : "");

// Needed Output
// ("o");
// ("o");
// ("o");
// ("o");
// ("o");
// ("o");
// ("o");
