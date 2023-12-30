let xhr = new XMLHttpRequest();
xhr.open("GET", "articles.json");
xhr.send();
xhr.onload = function () {
  if (xhr.status == 200) {
    let mainData = JSON.parse(xhr.responseText);
    // console.log( mainData );
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = "All";
    }
    // console.log( mainData );
    let updatedData = JSON.stringify(mainData);
    // console.log( updatedData );
    let data = document.createElement("div");
    for (let i = 0; i < mainData.length; i++) {
      data.innerHTML += `
                            <div class="article">
                                <h3>${mainData[i].title}</h3>
                                <p>${mainData[i].content}</p>
                            </div>
                            `;
    }
    document.body.appendChild(data);
  }
};
