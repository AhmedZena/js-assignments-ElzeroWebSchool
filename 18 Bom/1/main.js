var num = window.prompt("Enter a number: ");
console.log(num);
// num.split("");
// console.log(num.split("-"));
num = num.split("-");
let num1 = +num[0];
let num2 = +num[1];
if (num1 > num2) {
  Ascending(num2, num1);
} else if (num1 < num2) {
  Ascending(num1, num2);
}

function Ascending(small, big) {
  for (let i = small; i <= big; i++) {
    console.log(i);
  }
}
