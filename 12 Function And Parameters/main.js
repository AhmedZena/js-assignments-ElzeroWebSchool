//Assignment 1
function sayHello(theName, theGender) {
  if (theGender == "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender == "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }

  // Your Code Here
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("----------------------------");
//Assignment 2

function calculate(firstNum, secondNum, operation = "add") {
  if (firstNum === undefined) {
    console.log("First Number Not Found");
  } else if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else {
    if (operation === "add") {
      console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    }
  }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

console.log("----------------------------");

//Assignment 3

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`
You are ${theAge} years old
You are ${theAge * 12} Months old
You are ${theAge * 12 * 4} weeks old
You are ${theAge * 12 * 4 * 7} days old
You are ${theAge * 12 * 4 * 7 * 24} hours old
You are ${theAge * 12 * 4 * 7 * 24 * 60} minutes old
You are ${theAge * 12 * 4 * 7 * 24 * 60 * 60} seconds old
`);
  }
}
// Needed Output
ageInTime(5); // Age Out Of Range
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

console.log("----------------------------");
//Assignment 4

function checkStatus(a, b, c) {
  if (
    typeof a === "string" &&
    typeof b === "number" &&
    typeof c === "boolean"
  ) {
    c === true
      ? console.log(`Hello ${a}, Your Age Is ${b}  You Are Available For Hire `)
      : console.log(
          `Hello ${a}, Your Age Is ${b}  You Are Not Available For Hire`
        );
  } else if (
    typeof a === "number" &&
    typeof b === "string" &&
    typeof c === "boolean"
  ) {
    c === true
      ? console.log(`Hello ${b}, Your Age Is ${a}  You Are Available For Hire `)
      : console.log(
          `Hello ${b}, Your Age Is ${a}  You Are Not Available For Hire`
        );
  } else if (
    typeof a === "boolean" &&
    typeof b === "string" &&
    typeof c === "number"
  ) {
    a === true
      ? console.log(`Hello ${b}, Your Age Is ${c}  You Are Available For Hire `)
      : console.log(
          `Hello ${b}, Your Age Is ${c}  You Are Not Available For Hire`
        );
  } else if (
    typeof a === "string" &&
    typeof b === "boolean" &&
    typeof c === "number"
  ) {
    c === true
      ? console.log(`Hello ${a}, Your Age Is ${c}  You Are Available For Hire `)
      : console.log(
          `Hello ${a}, Your Age Is ${c}  You Are Not Available For Hire`
        );
  } else if (
    typeof a === "number" &&
    typeof b === "boolean" &&
    typeof c === "string"
  ) {
    b === true
      ? console.log(`Hello ${c}, Your Age Is ${a}  You Are Available For Hire `)
      : console.log(
          `Hello ${c}, Your Age Is ${a}  You Are Not Available For Hire`
        );
  } else if (
    typeof a === "boolean" &&
    typeof b === "number" &&
    typeof c === "string"
  ) {
    a === true
      ? console.log(`Hello ${c}, Your Age Is ${b}  You Are Available For Hire `)
      : console.log(
          `Hello ${c}, Your Age Is ${b}  You Are Not Available For Hire`
        );
  } else {
    console.log("Invalid Input");
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



//Assignment 5


function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
for (i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);

  }  
    document.write(`</select>`);
}
  createSelectBox(2000, 2021);

//Assignment 6
let multiply = function(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
        continue;
    }
        result *= Math.floor (numbers[i]);
    }
    console.log(result); 
}



multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000









