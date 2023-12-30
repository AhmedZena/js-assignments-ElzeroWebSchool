console.log("hello");
let xhr = new XMLHttpRequest();
xhr.open("GET", "articles.json");
xhr.send();
xhr.onload = function () {
  if (xhr.status == 200) {
    console.log(xhr.responseText);
    let articles = JSON.parse(xhr.responseText);
    console.log(articles);
    console.log("Data Loaded");
  }
};
