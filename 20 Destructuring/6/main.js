// let chosen = 3;

// let myFrineds = [
//   { title: "Osama", age: "39", available: true, skills: ["html", "css"] },
//   { title: "ahmed", age: "25", available: false, skills: ["python", "Django"] },
//   { title: "Sayed", age: "33", available: true, skills: ["Php", "Larval"] },
// ];

//make function to pass to it the value of chosen
// let chooseFun = function (chosen) {
//   let [a, b, c] = myFrineds;
//   // console.log(a)
//   switch (chosen) {
//     case 1:
//       // console.log("i am chosen one ");
//       ({ available } = a);
//       if (available == true) {
//         a.available = "available";
//         ({
//           title,
//           age,
//           available,
//           skills: [, css],
//         } = a);
//         console.log(title, age, available, css);
//       } else if (available == false) {
//         a.available = "not available";
//         ({
//           title,
//           age,
//           available,
//           skills: [, css],
//         } = a);
//         console.log(title, age, available, css);
//       }
//       break;
//     case 2:
//       // console.log("i am chosen two ");
//       ({ available } = b);
//       if (available == true) {
//         b.available = "available";
//         ({
//           title,
//           age,
//           available,
//           skills: [, css],
//         } = b);

//         console.log(title, age, available, css);
//       } else if (available == false) {
//         b.available = "not available";
//         ({
//           title,
//           age,
//           available,
//           skills: [, css],
//         } = b);
//         console.log(title, age, available, css);
//       }
//       break;
//     case 3:
//       // console.log("i am chosen three ");
//       ({ available } = c);
//       if (available == true) {
//         c.available = "available";
//         ({
//           title,
//           age,
//           available,
//           skills: [, css],
//         } = c);

//         console.log(title, age, available, css);
//       } else if (available == false) {
//         c.available = "not available";
//         ({
//           title,
//           age,
//           available,
//           skills: [, css],
//         } = c);
//         console.log(title, age, available, css);
//       }
//       break;
//   }
// };

// chooseFun(1);
// chooseFun(2);
// chooseFun(3);

let myFrineds = [
  { title: "Osama", age: "39", available: true, skills: ["html", "css"] },
  { title: "ahmed", age: "25", available: false, skills: ["python", "Django"] },
  { title: "Sayed", age: "33", available: true, skills: ["Php", "Larval"] },
];

// console.log(myFrineds[1]);
//another way to do it
// let [a, b, c] = myFrineds;
function chooseFun2(chosen) {
  let a = myFrineds[chosen - 1];
  console.log(`chosen is ${chosen}`);
  //   console.log(a); //that print the aray on which chosen -1
  //   console.log(Object.keys(a).length); //that print the length of the array on which chosen -1
  for (let i = 0; i < Object.keys(a).length; i++) {
    if (a[Object.keys(a)[i]] == true) {
      a[Object.keys(a)[i]] = "available";
    } else if (a[Object.keys(a)[i]] == false) {
      a[Object.keys(a)[i]] = "not available";
    }

    if (i == Object.keys(a).length - 1) {
      a[Object.keys(a)[i]] = a.skills[1];
    }

    console.log(a[Object.keys(a)[i]]);
  }
}

chooseFun2(1);
console.log("----------------------------------------------------");
chooseFun2(2);
console.log("----------------------------------------------------");
chooseFun2(3);
