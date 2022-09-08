document.body.style.backgroundColor = "black";

let form = document.createElement("form");
let h2 = document.createElement("h2");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let label = document.createElement("label");
let selctBox = document.createElement("select");
let option1 = document.createElement("option");
let option2 = document.createElement("option");
let option3 = document.createElement("option");
let option4 = document.createElement("option");
let option5 = document.createElement("option");

//append elements to the form
form.appendChild(h2);
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);
form.appendChild(label);
form.appendChild(selctBox);

//append elements to the select box
selctBox.appendChild(option1);
selctBox.appendChild(option2);
selctBox.appendChild(option3);
selctBox.appendChild(option4);
selctBox.appendChild(option5);

//append elements to the body
document.body.appendChild(form);

//add text to h2
h2.innerText = "Enter your information";
h2.style.color = "red";
h2.style.marginLeft = "2%";
// h2.style.textAlign = "center";

input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "Enter your name");

input2.setAttribute("type", "email");
input2.setAttribute("placeholder", "Enter your email");

input3.setAttribute("type", "password");
input3.setAttribute("placeholder", "Enter your password");

label.innerHTML = "Choose your Age ";

option1.setAttribute("value", "18");
option1.innerHTML = "18";

option2.setAttribute("value", "19");
option2.innerHTML = "19";

option3.setAttribute("value", "20");
option3.innerHTML = "20";

option4.setAttribute("value", "21");
option4.innerHTML = "21";

option5.setAttribute("value", "22");
option5.innerHTML = "22";

//style of the form
form.style.width = "80%";
form.style.height = "30%";
form.style.backgroundColor = "lightblue";
form.style.borderRadius = "10px";
form.style.margin = "auto";
form.style.marginTop = "100px";
form.style.padding = "10px";
// form.style.textAlign = "center";

//style of the input
input1.style.width = "60%";
input1.style.height = "20%";
input1.style.display = "block";
input1.style.margin = "1%";

input2.style.width = "60%";
input2.style.height = "20%";
input2.style.display = "block";
input2.style.margin = "1%";

input3.style.width = "60%";
input3.style.height = "20%";
input3.style.display = "block";
input3.style.margin = "1%";

label.style.display = "inline-block";
label.style.marginLeft = "1%";

//add values of the inputs to the session storage
input1.addEventListener("keyup", function (e) {
  sessionStorage.setItem("name", input1.value);
});
input2.addEventListener("keyup", function (e) {
  sessionStorage.setItem("email", input2.value);
});
input3.addEventListener("keyup", function (e) {
  sessionStorage.setItem("password", input3.value);
});

//add values of the select box to the session storage
selctBox.addEventListener("change", function (e) {
  sessionStorage.setItem("age", selctBox.value);
});

//get values of the inputs from the session storage on load the webpage

input1.value = sessionStorage.getItem("name");
input2.value = sessionStorage.getItem("email");
input3.value = sessionStorage.getItem("password");
selctBox.value = sessionStorage.getItem("age");
