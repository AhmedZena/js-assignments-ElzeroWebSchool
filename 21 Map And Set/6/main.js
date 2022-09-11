let charfunc = function (chars) {
  //make array to put numbers inside
  let arr = [];
  //make array to put only chars inside
  let newArr = [];
  //function to put the nums in arr and the chars in newArr
  chars.some(function (item) {
    if (typeof item == "number") {
      arr.push(item);
      //   console.log(item);
    } else {
      newArr.push(item);
    }
  });

  //here i put the arr of nums in the begging of the newArr
  newArr.unshift(...arr);

  /*here i take a copy from the newArr specific chars
  to put it instesde of the arr nums in the begging of the newArr */
  newArr.copyWithin(0, arr.length, arr.length + arr.length);
  console.log(newArr);
};

charfunc(["A", "B", "C", "D", "E", 10, 15, 6]); //(8) ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
charfunc(["A", "B", "C", "D", "E", 10, 15, 6, 7]); //(9) ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
charfunc(["A", "B", 10, "C", "D", "E", 15, 6, 7, 8]); //(10) ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E']
charfunc(["A", "B", "C", 20, "D", "E", 10, 15, 6]); //(9) ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
charfunc(["Z", "Y", "A", "D", "E", 10, 1]); //(7) ['Z', 'Y', 'Z', 'Y', 'A', 'D', 'E']
