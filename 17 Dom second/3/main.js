//asssignment 3
let para = document.getElementsByTagName("p")[0];
let div = document.getElementsByTagName("div")[0];
let start = document.createElement("div");
let end = document.createElement("div");

para.remove();
start.innerHTML = "Start";
start.classList.add("start");
start.setAttribute("title", "Start Element");
start.setAttribute("data-value", "Start");

end.innerHTML = "End";
end.classList.add("end");
end.setAttribute("title", "End Element");
end.setAttribute("data-value", "End");
div.prepend(start);
div.append(end);
