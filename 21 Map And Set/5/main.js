let theName = "Elzero";

// convert string to array of characters
console.log(Array.from(theName));

//anoter way to convert string to array of characters using string split method
console.log(theName.split(""));

//another way to convert string to array of characters using map method
console.log(theName.split("").map((item) => item));

//another way to convert string to array of characters using set method
let theNameSet = new Set(theName.split(""));
console.log(theNameSet);

//another way to convert string to array of characters using regular expression
console.log(theName.match(/\w/g));

//Output of all the above
["E", "l", "z", "e", "r", "o"];
