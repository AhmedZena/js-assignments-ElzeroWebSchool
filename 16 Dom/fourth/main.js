let onediv = document.getElementsByClassName("one")[0];
let twodiv = document.getElementsByClassName("two")[0];

// convert the title of one div to the title of the second div and vice versa

let OnetmpTitle = onediv.title;
let OneTmpInnerHtml = onediv.innerHTML;
onediv.title = twodiv.title;
onediv.innerHTML = twodiv.innerHTML;
twodiv.title = OnetmpTitle;
twodiv.innerHTML = `${OneTmpInnerHtml} ${twodiv.innerHTML.length - 1}`;

console.log(onediv.title);
