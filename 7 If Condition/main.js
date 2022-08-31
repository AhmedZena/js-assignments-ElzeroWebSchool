// first assignment
let num = 9;
if (num < 10) {
  console.log(` 00${num}`); // "009"
}

let number = 20;
if (number > 10 && number < 100) {
  console.log(`0${number}`); // "020"
}

let numberr = 110;
if (numberr >= 100) {
  console.log(numberr); // "110"
}

// second assignment

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}

if (num1 == str) {
  if (typeof num1 != typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
  }
}

if (num1 != str2) {
  if (typeof num1 != typeof str) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
  }
}

if (typeof str == typeof str2) {
  if (str != str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
  }
}

// third assignment
console.log(" third assignment");

let number1 = 10;
let number2 = 30;
let number3 = "30";

//typeof ( number3) !=  typeof ( number2)
if (typeof number3 != typeof number2) {
  if (number3 > number1) {
    console.log(
      "30 Is Larger Than 10 And Type string Not The Same Type As number"
    );
  }
  if (number3 > number1 && number3 == number2) {
    console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    );
  }
  if (number3 != number1 && typeof number3 != typeof number1) {
    console.log(
      "30 Is Larger Than 10 And Value Is Not The Same As 30 And Type string Not The Same Type As number"
    );
  }
}

// fourth assignment

// Edit What You Want Here

let numm1 = 10;
let numm2 = 6;
let numm3 = 10;
let numm4 = 35;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (numm1 > numm2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (numm1 > numm2 && numm1 < numm4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (numm1 > numm2 && numm1 === numm3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (numm1 + numm2 < numm4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (numm1 + numm3 < numm4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (numm1 + numm2 + numm3 < numm4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (numm4 - (numm1 + numm3) + numm2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
