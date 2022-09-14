// Needed Output "Elzero birthday "
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)";
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)";
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)";

//the code

//first way
let birthday = new Date(2000, 6, 7);
console.log(birthday);

//second way
let birthday2 = new Date("July 7, 2000");
console.log(birthday2);

//third way
let birthday3 = new Date("7/7/2000");
console.log(birthday3);

//fourth way
let birthday4 = new Date("7-7-2000");
console.log(birthday4);

//fifth way
let birthday5 = new Date("7 7 2000");
console.log(birthday5);

//sixth way
let birthday6 = new Date("7,7,2000");
console.log(birthday6);
