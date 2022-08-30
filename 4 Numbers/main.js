// the first assignment
// Get 10000 with diffrent ways

console.log(100000); // first way
console.log(100_000); // second way
console.log(100 ** 2 * 10); // third way
console.log(1e5); // fourth way
console.log(5e4 + 5e4); // fifth way
console.log(10 ** 5); // sixth way
console.log(parseInt("100000")); // seventh way
console.log(100000 % 100001); // eighth way
console.log(200000 - 100000); // ninth way

let t = true;
let f = false;
console.log(100001 - t); // tenth way
console.log(100001 - ++f); // eleventh way

console.log(5e1 * 2e3); // twelfth way
console.log(Math.round(99999.9)); // thirteenth way
console.log(Math.floor(100000.8)); // fourteenth way
console.log(Math.ceil(99999.1)); // fifteenth way
console.log(Math.pow(10, 5)); // sixteenth way
console.log(Math.sqrt(10000000000)); // seventeenth way
console.log(Math.abs(-100000)); // eighteenth way
console.log(
  Math.max(13463, 2634, 36346, 43634, 5634, 663, 75345, 85345, 900, 100000)
); // nineteenth way
console.log(
  Math.min(
    1346363346,
    2663654334,
    3634363446,
    436643634,
    56634334,
    66334634,
    753456346,
    853434635,
    9065360,
    100000
  )
); // twentieth way

// the second assignment
// let x = Number.MIN_SAFE_INTEGER
console.log(Math.abs(Number.MIN_SAFE_INTEGER));

// the third assignment
// 9007199254740991 % 25 = 16
console.log(Number.MAX_SAFE_INTEGER % 25);

/* this sol is more accurate than the other one but it is slower 
I turned all number to string then i took the zero index num (9) then turned it to int 
 then added it to the third index num (7)  then equal (7+9 = 16 )         */
console.log(
  parseInt(Number.MAX_SAFE_INTEGER.toString().charAt(0)) +
    parseInt(Number.MAX_SAFE_INTEGER.toString().charAt(3))
);
console.log(Number.MAX_SAFE_INTEGER.toString().split("").length);

console.log(Number.MAX_SAFE_INTEGER.toString.length);

// the fourth assignment

let myVar = "100.56789 Views";
// take the int value from the num
console.log(parseInt(myVar));

// take float then int
console.log(parseInt(parseFloat(myVar)));

/* I took the characters index(4,5,6,7,8) then casting them to int then multiplied them together
  that equal 15120 then divided that by 151.2 that equal 100  */
console.log(
  parseInt(
    (parseInt(myVar.charAt(4)) *
      parseInt(myVar.charAt(5)) *
      parseInt(myVar.charAt(6)) *
      parseInt(myVar.charAt(7)) *
      parseInt(myVar.charAt(8))) /
      151.2
  )
);

/* I took the characters index(4,5,6,7,8) then casting them to int then summed them together
  that equal 35 then multiplied them in 2.85 that equal 99.75 then up to 100 */

console.log(
  Math.ceil(
    (parseInt(myVar.charAt(4)) +
      parseInt(myVar.charAt(5)) +
      parseInt(myVar.charAt(6)) +
      parseInt(myVar.charAt(7)) +
      parseInt(myVar.charAt(8))) *
      2.85
  )
);

// length equal 15 then *6.66 = 99.9 then up to 100
console.log(Math.ceil(myVar.length * 6.66));

// the fifth assignment

let num = 10;
// number is integer so it is true then casting to 1 then adding true (1) that result equal 2
console.log(+Number.isInteger(num) + true);
console.log(+Number.isInteger(num) + Number.isInteger(num));

//  the sixth assignment
let flt = 10.4;
console.log(parseInt(flt));
console.log(Math.floor(flt));
console.log(Math.round(flt));

// turn the number to string then take the first three characters(100) and cast them to int
console.log(parseInt(flt.toString().substring(0, 2)));

/* fit is finite so it is true then casting to 1 then it is not integer so it is false 
 then put them beside eachothers in template literal  */
console.log(parseInt(`${+Number.isFinite(flt)}${+Number.isInteger(flt)}`));


// the seventh Assignment 
// random num between 0 and 4 
console.log ( Math.random() *4 );
