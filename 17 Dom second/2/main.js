//Assignment two
let add = document.getElementsByTagName("input")[0];
let delet = document.getElementsByTagName("input")[1];
let output = document.querySelector("div div div");

console.log(add, delet, output);
let arr = [];

add.onblur = function () {
  if (add.value != "") {
    let value = add.value.toLowerCase();
    arr.push(value);
    arr.sort();
    console.log(arr);
    let sort = function () {
      arr.sort();
      output.innerHTML = arr.join(" ");
    };
    sort();
    //   output.innerHTML += value + " ";
    add.value = "";
  } else {
    output.innerHTML = "please enter a value";
  }
};
delet.onblur = function () {
  let value = delet.value;
  output.innerHTML = output.innerHTML.replace(value, "");
  delet.value = "";
};
