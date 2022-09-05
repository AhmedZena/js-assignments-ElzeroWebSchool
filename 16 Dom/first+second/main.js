document.body.style.backgroundColor = "green";

//Assignment 1

// //call by id
// let divId = document.getElementById("elzero");

// //call by class
// let divClass = document.getElementsByClassName("element");

// //call by tag
// let divTag = document.getElementsByTagName("div")[0];

// //call by name
// let divName = document.getElementsByName("js");

// //call by query selector
// let divQuery = document.querySelector("#elzero");
// let divQueryTag = document.querySelector("div");
// let divySelector = document.querySelector("#elzero");
// let divySelectorTag = document.querySelector("js");
// //call by query selector all
// let divQueryAll = document.querySelectorAll("#elzero");
// let divQueryClassAll = document.querySelectorAll(".element");
// let divQueryTagAll = document.querySelectorAll("div");
// let divySelectorAll = document.querySelectorAll("js");

//Assignment 2
for (let i = 0; i <= 9; i++) {
  let imgg = document.querySelectorAll("div img")[i];
  imgg.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  imgg.setAttribute("alt", "Elzero Logo");
  console.log(imgg);
}
