//third assignment
let inputDollar = document.getElementsByName("dollar")[0];
let result = document.getElementsByClassName("result");
console.log(inputDollar);
function convert() {
  result[0].innerHTML = `{${inputDollar.value}} USD dollar = {${(
    inputDollar.value * 15.6
  ).toFixed(2)}} Egyptian pound`;
}

inputDollar.addEventListener("click", convert);
