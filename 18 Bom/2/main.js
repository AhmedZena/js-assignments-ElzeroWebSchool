// let div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "red";
// div.style.textAlign = "center";
// div.style.margin = "50%";
// div.innerHTML = "Hello World";
// document.body.appendChild(div);
// div.alert = function () {
//   alert("Hello World");
// };

// setTimeout(() => {
//   //make allert and center it in the middle of the screen
//   div.alert();
//   div.style.margin = "0";
// }, 1000);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

setTimeout(() => {
  modal.style.display = "block";
  ``;
}, 1000);

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
