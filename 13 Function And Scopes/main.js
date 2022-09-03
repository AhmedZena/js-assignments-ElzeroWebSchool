//Assignment 1

//  function namePattern(zName) {
//     // Write Your Code Here
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.

//       let nP = zName.split(" ");
//       let nP1 =` ${nP[0]} ${nP[1][0].toUpperCase()}.`;
//      return nP1;
//   }

// console.log(namePattern("Osama Mohamed"));
// console.log(namePattern("Ahmed ali"));

// function ageWithMessage(zAge) {
//     // Write Your Code Here
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
//     let age = zAge.split(" ");
//     let age1 = `Your Age Is ${age[0]}`;
//     return age1;
//   }
// console.log(ageWithMessage("38 Is My Age"));
// console.log(ageWithMessage("32 Is The Age"));

// function countryTwoLetters(zCountry) {
//     // Write Your Code Here
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//       let country = zCountry.split("");
//       let fS = country[0].toUpperCase() + country[1].toUpperCase();
// return fS;
//   }
// console.log(countryTwoLetters("Egypt"));
// console.log(countryTwoLetters("Syria"));

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let nP = zName.split(" ");
    let nP1 = ` ${nP[0]} ${nP[1][0].toUpperCase()}.`;
    return nP1;
  }

  function ageWithMessage(zAge) {
    let agee = zAge.split(" ");
    let age = `Your Age Is ${agee[0]}`;
    return age;
  }

  function countryTwoLetters(zCountry) {
    let country = zCountry.split("");
    let fS = country[0].toUpperCase() + country[1].toUpperCase();
    return fS;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )} You Live In ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//Assignment 2

function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

let itsMeArrow = () => console.log(`Iam A Arrow Function`);
itsMeArrow(); // Iam A Arrow Function




function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let arrowUrlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(arrowUrlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("----------------------------------------------------");

//Assignment 3


// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }
let checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble







console.log("----------------------------------------------------");
    //assignment 4
function specialMix(...data) {
    let result = 0;
    let arra = [];
   for (let i = 0; i < data.length; i++) {
     if ((typeof parseInt(data[i]) === "number") &&  (isNaN (parseInt(data[i]))=== false))  {
        result += parseInt(data[i]);
         arra.push(parseInt(data[i]));   
        }
}
if (arra.length === 0) {    
    console.log( `All Is Strings`);
}else {

console.log(`${result}`);
}}
specialMix(10, 20, 30); // 60
  specialMix("10Test", "Testing", "20Cool"); // 30
  specialMix("Testing", "10Testing", "40Cool"); // 50
  specialMix("Test", "Cool", "Test"); // All Is Strings



console.log("---------------------------------------------------- ");

// const specialMix2 = arre => arre.every(i => (isNaN (parseInt(i))));

// console.log(specialMix2(['foo', 'bar']))
// console.log(specialMix2(['foo', 'bar', 1]))




// specialMix2([10, 20, 30]); // 60
//   specialMix2(["10Test", "Testing", "20Cool"]); // 30
//   specialMix2(["Testing", "10Testing", "40Cool"]); // 50
//   specialMix2(["Test", "Cool", "Test"]); // All Is Strings

//   console.log(
// `
// ${  specialMix2([10, 20, 30])}
// ${  specialMix2(["10Test", "Testing", "20Cool"])}
// ${  specialMix2(["Testing", "10Testing", "40Cool"])}
// ${  specialMix2(["Test", "Cool", "Test"])}


// `
//   );