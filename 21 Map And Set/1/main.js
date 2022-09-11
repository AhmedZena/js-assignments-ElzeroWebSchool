// Needed Output
// Set(3) {10, 20, 2}
// 2

//make new set and add 10 to it
let setOfNumbers = new Set([10]);

//add 20 to the set
setOfNumbers.add(20);

//add the set size to the set
setOfNumbers.add(setOfNumbers.size);

//log the set
console.log(setOfNumbers);

//log the last element of the set
console.log(setOfNumbers.size - 1);
