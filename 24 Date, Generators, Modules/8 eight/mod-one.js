import modOne from "./mod-two.js";

export default function () {
  return modOne.numOne + modOne.numTwo + modOne.numThree;
}

console.log("i am mod-one.js");
console.log(modOne);

console.log("-".repeat(50));
