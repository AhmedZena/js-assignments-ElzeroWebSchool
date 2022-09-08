// create three select boxes
let selectBox1 = document.createElement("select");
let selectBox2 = document.createElement("select");
let selectBox3 = document.createElement("select");

//create three options of the first select box
let s1Option1 = document.createElement("option");
let s1Option2 = document.createElement("option");
let s1Option3 = document.createElement("option");

//create six ooptions of the second select box
let s2Option1 = document.createElement("option");
let s2Option2 = document.createElement("option");
let s2Option3 = document.createElement("option");
let s2Option4 = document.createElement("option");
let s2Option5 = document.createElement("option");
let s2Option6 = document.createElement("option");

//make the options for the third select box and add value of each one
//then append the options to the third select box
for (let i = 16; i <= 30; i++) {
  let s3Options = document.createElement("option");
  s3Options.innerText = i;
  selectBox3.appendChild(s3Options);
}

//add vlues of the fonts to the options of the first select box
//then add text that display inside the options
s1Option1.value = "Open Sans";
s1Option1.innerHTML = "Open Sans";
s1Option2.value = "Cairo";
s1Option2.innerHTML = "Cairo";
s1Option3.value = "Roboto";
s1Option3.innerHTML = "Roboto";

//append the three options to the first select box
selectBox1.appendChild(s1Option1);
selectBox1.appendChild(s1Option2);
selectBox1.appendChild(s1Option3);

//add colors to the options of the second select box
s2Option1.innerText = "red";
s2Option2.innerText = "blue";
s2Option3.innerText = "green";
s2Option4.innerText = "yellow";
s2Option5.innerText = "orange";
s2Option6.innerText = "purple";

//append options to the second select box
selectBox2.appendChild(s2Option1);
selectBox2.appendChild(s2Option2);
selectBox2.appendChild(s2Option3);
selectBox2.appendChild(s2Option4);
selectBox2.appendChild(s2Option5);
selectBox2.appendChild(s2Option6);

// make the function that will change the font of the body
//when the user select a font from the first select box
selectBox1.addEventListener("change", function () {
  document.body.style.fontFamily = selectBox1.value;
  input.style.fontFamily = selectBox1.value;
  window.localStorage.setItem("font", selectBox1.value);
});

//make the function that will change the color of the body
// and change also the color of the input trial that i added
selectBox2.addEventListener("change", function () {
  document.body.style.backgroundColor = selectBox2.value;
  input.style.color = selectBox2.value;
  console.log(selectBox2.value);
  window.localStorage.setItem("color", selectBox2.value);
});

//make the function that will change the size of the body
//and change also the size of the input trial that i added
selectBox3.addEventListener("change", function () {
  document.body.style.fontSize = selectBox3.value + "px";
  input.style.fontSize = selectBox3.value + "px";
  window.localStorage.setItem("size", selectBox3.value);
});

//append boxes to the page
document.body.appendChild(selectBox1);
document.body.appendChild(selectBox2);
document.body.appendChild(selectBox3);
// add values of the three boxes to the local storage
window.onload = function () {
  localStorage.setItem("font", selectBox1.value);
  localStorage.setItem("color", selectBox2.value);
  localStorage.setItem("size", selectBox3.value);
};

//random text to try that options
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your note here";
document.body.appendChild(input);
//add event listener to the input field that will save the value of the input field to the local storage
input.addEventListener("keyup", function () {
  localStorage.setItem("input", input.value);
});

//make function that get the values of the three boxes from the local storage
window.onload = function () {
  let font = localStorage.getItem("font");
  let color = localStorage.getItem("color");
  let size = localStorage.getItem("size");
  document.body.style.fontFamily = font;
  input.style.fontFamily = font;
  document.body.style.backgroundColor = color;
  input.style.color = color;
  document.body.style.fontSize = size + "px";
  input.style.fontSize = size + "px";

  //change the values of the three boxes to the values of the local storage
  selectBox1.value = font;
  selectBox2.value = color;
  selectBox3.value = size;

  // return the value of the input field from the local storage
  let inputValue = localStorage.getItem("input");
  input.value = inputValue;
};
