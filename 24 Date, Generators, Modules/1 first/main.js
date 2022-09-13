let myBirthdate = new Date(2000, 6, 7);

console.log(myBirthdate);
let nowDay = new Date();
let diff = nowDay - myBirthdate.getTime(); //that get diff in milliseconds

// console.log(diff);

// let diffInDays = diff / (1000 * 60 * 60 * 24 * 365);
// console.log(diffInDays);

//log the diff in miliseconds
console.log(diff + " milliseconds");

//log the diff in seconds
console.log(diff / 1000 + " seconds");

//log the diff in minutes
console.log(diff / (1000 * 60) + " minutes");

//log the diff in hours
console.log(diff / (1000 * 60 * 60) + " hours");

//log the diff in days
console.log(diff / (1000 * 60 * 60 * 24) + " days");

//log the diff in months
console.log(diff / ((1000 * 60 * 60 * 24 * 365) / 12) + " months");

//log the diff in years
console.log(diff / (1000 * 60 * 60 * 24 * 365) + " years");

//log the diff in decades
console.log(diff / (1000 * 60 * 60 * 24 * 365 * 10) + " decades");

//log the diff in centuries
console.log(diff / (1000 * 60 * 60 * 24 * 365 * 100) + " centuries");

// Needed Output
// "1247939400 Seconds";
// "20798990 Minutes";
// "346650 Hours";
// "14444 Days";
// "481 Months";
// "40 Years";
