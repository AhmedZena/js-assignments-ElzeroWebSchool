let num = document.getElementsByClassName("input")[0];
let eText = document.getElementsByClassName("input")[1];
let selected = document.getElementsByClassName("input")[2];
let submitt = document.getElementsByName("create")[0];
let result = document.getElementsByClassName("results")[0];

submitt.addEventListener("click", fun);
// submitt.addEventListener("click", fun2);

function fun(e) {
  e.preventDefault();
  result.innerHTML = "";
  for (let i = 1; i <= num.value; i++) {
    if (selected.value == "Div") {
      let div = document.createElement("div");
      div.innerHTML = `${eText.value}`;
      //add class to the div
      div.classList.add("box");
      div.title = `Element`;
      div.id = `id-${i}`;
      div.style.backgroundColor = "red";
      div.style.width = "500px";
      div.style.height = "100px";
      div.style.margin = "10px";
      div.style.display = "inline";
      div.style.border = "2px solid black";
      div.style.textAlign = "center";
      div.style.lineHeight = "100px";

      result.appendChild(div);
    } else if (selected.value == "Section") {
      let section = document.createElement("section");
      section.innerHTML = `${eText.value}`;
      result.appendChild(section);
    }
  }
  //   let divy = document.getElementsByTagName("div");
  //   console.log(divy);
}

// num.oninput = function () {
//   console.log(num.value);
// };

// selected.addEventListener("change", function () {
//   console.log(selected.value);
// });
// let divy = document.getElementsByTagName("div");
// console.log(divy);
// if (document.body.getElementsByTagName(div)[0] == 0) {
//   console.log("no div");
// }
