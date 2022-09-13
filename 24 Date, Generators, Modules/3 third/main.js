let theMonthBefore = new Date();
// theMonthBefore.setMonth();
// let reg = /\s\d{2}\s/gi;
// console.log(+theMonthBefore.toString().match(reg)); //that get the day number
theMonthBefore.setDate(0);
console.log(theMonthBefore);
console.log(
  `Previous Month Is ${theMonthBefore.toLocaleString("en-US", {
    month: "long",
  })} And Last Day Is ${theMonthBefore.getDate()}`
);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)";
// "Previous Month Is April And Last Day Is 30";

//that method return the month name from the month number
console.log(
  theMonthBefore.toLocaleString("en-US", {
    month: "long",
  })
);
