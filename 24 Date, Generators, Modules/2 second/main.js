let afterTen = new Date();

//that not dynamic solution
// afterTen.setTime(1000 * 60 * 60 * 24 * 365.19167 * 10);

//that dynamic solution
afterTen.setTime(0);
afterTen.setFullYear(1980);
afterTen.setSeconds(1);
console.log(afterTen);
// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)";
