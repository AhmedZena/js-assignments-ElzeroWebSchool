//assignmet 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regExp = /\d{4}:\w{2}\d(:\d{4}){6}/gi;
console.log(ip.match(regExp));

//assignmet 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regExp2 = /(\bos(|\d+)o\b)/gi;
console.log(specialNames.match(regExp2));
// Output
// ['Os10O', 'OsO', 'Os100O']

//assignmet 3
let phone = "+(995)-123 (4567)";
let regExp3 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
console.log(phone.match(regExp3));

//assignmet 4

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// https?:\/\/ that if the s is found will back https//  or not found will back http//
//(:?[-\w]+\.)? that :? check if : is here or not >> -w-w-w- many times and beside it  dot (.) >> and in final check if all is here or not
//([-\w]+)\. that is the name of the website
// \w+(?:\.\w+)? that the direction after the name of website (? )? check if ther are brakets or not
//and all things is clear
// .* that check if the . is here or not or many of it

let link = "https://-w-w-w.google.com/";
console.log(link.match(re));
console.log("----------------------------------------------------");

//assignmet 5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let regExp5 = /\d{2}(\/|\s)-?\s?\d{2}(\/|\s)-?\s?\d{2,}/gi;
// let regExp5 = /\d{2}(\/|\s)-?\s?\d{2}\s?-?\s?\d{2,}/gi;

console.log(date1.match(regExp5)); // "25/10/1982"
console.log(date2.match(regExp5)); // "25 - 10 - 1982"
console.log(date3.match(regExp5)); // "25 10 1982"
console.log(date4.match(regExp5)); // "25 10 82"

console.log("----------------------------------------------------");
//assignment 6
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let regExp6 =
  /(https?:\/\/(w{3}.)?)?\w+.org(:\d{4}\/\w+.php\?id=\d{3}&\w+=\w+)?/gi;

console.log(url1.match(regExp6));
console.log(url2.match(regExp6));
console.log(url3.match(regExp6));
console.log(url4.match(regExp6));
console.log(url5.match(regExp6));
