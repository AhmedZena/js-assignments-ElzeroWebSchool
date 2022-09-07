let div = document.createElement("div");
div.innerHTML = "10";
document.body.appendChild(div);
let i = parseInt(div.innerHTML);
// console.log(i);

// console.log(parseInt(div.innerHTML));
// let counter = function () {
//   for (i; i >= 0; i--) {
//     console.log(i);
//   }
// };
// counter();
const myInterval = setInterval(myTimer, 500);

function myTimer() {
  i--;
  div.innerHTML = i;
  console.log(i);
  if (i == 5) {
    let myWindow = window.open("", "", "width=400, height=600");
    myWindow.location.href = "https://elzero.org/";
  }
  if (i === 0) {
    // window.location.href = "https://elzero.org/";
    clearInterval(myInterval);
  }
}
