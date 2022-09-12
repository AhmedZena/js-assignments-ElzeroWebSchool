// Write Your Code Here
// String.addLove = function () {
//   return `I Love ${this.value} Web School`;
// };
// console.log(String.addLove("Web School"));

// i added the addLove function to the String prototype
String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";

console.log(myStr.addLove()); // I Love Elzero Web School
