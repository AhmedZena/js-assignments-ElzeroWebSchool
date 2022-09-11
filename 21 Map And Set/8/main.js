let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// i see 30*7 = 210
// so i get the max of the first array => 30
// and concat the two arrays to make new array with length => 7
// then wow 30 * 7 = 210
console.log(Math.max(...n1) * [...n1, ...n2].length);

// Needed Output
//210
