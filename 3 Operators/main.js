// first quetion

console.log(((((10 * 20) / 15) * 3) % 190) * 10 - 400);

// second question

let num = 3;
let t = true;
let f = false;

console.log(num + num); // 6
console.log(num ** 2 - num); // 6
console.log(num * num - num); //6
//console.log ( num + ++t + ++f ); //6

/* coz we increament the VALUE OF true in last code 
 that may leads to unwanted nums so we commented it     */

//  console.log ( num ** ++t  - ++t  ); //6

/* coz we increament the VALUE OF true in last code 
 that may leads to unwanted nums so we commented it     */

console.log(num ** ++t - num); //6

console.log(num + ++num - ++f); //6

// third question

let number = 10;
let tr = true;
let fs = false;

console.log(number + number); // 20
console.log(
  number ** 2 -
    number -
    number -
    number -
    number -
    number -
    number -
    number -
    number
); // 20

// console.log(number * ++tr);

/* coz we increament the VALUE OF true in last code 
 that may leads to unwanted nums so we commented it     */

console.log((++number - ++fs) * ++tr);

// fourth question

let points = 10;

// points = ++points +true +true ; //13

points = --points - true; //8
console.log(points);
