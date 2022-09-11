let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

//mergt two arrays in one array => first way
console.log([...numsOne, ...numsTwo]); // 1, 2, 3, 4, 5, 6

//anoter way to merge two arrays in one array => second way
let mergedArr2 = [...numsOne, ...numsTwo];
console.log(mergedArr2); // 1, 2, 3, 4, 5, 6

//another way to merge the two array in one array => third way
let mergedArr3 = [];
mergedArr3.push(...numsOne, ...numsTwo);
console.log(mergedArr3); // 1, 2, 3, 4, 5, 6

//another way to merge the two array    in one array => fourth way
//haha using push method
let mergedArr4 = [];
for (let i = 0; i < numsOne.length; i++) {
  mergedArr4.push(numsOne[i]);
}
for (let i = 0; i < numsTwo.length; i++) {
  mergedArr4.push(numsTwo[i]);
}
console.log(mergedArr4); // 1, 2, 3, 4, 5, 6

//another way to merge the two array    in one array => fifth way
//haha using unshift method
let mergedArr5 = [];
for (let i = 0; i < numsTwo.length; i++) {
  mergedArr5.unshift(numsTwo[i]);
}
for (let i = 0; i < numsOne.length; i++) {
  mergedArr5.unshift(numsOne[i]);
}

// the Output of all ways
// [1, 2, 3, 4, 5, 6];
