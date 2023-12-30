let promise = new Promise((resolve, reject) => {
  let request = new XMLHttpRequest();
  request.open("GET", "./articles.json");
  request.onload = () => {
    if (request.status === 200) {
      resolve(request.response);
    } else {
      reject(Error(request.statusText));
    }
  };
  request.onerror = () => {
    reject(Error("Error fetching data."));
  };
  request.send();
});

promise
  .then((data) => {
    let articles = JSON.parse(data);
    // let html = "";
    // // only 5
    // for (let i = 0; i < 5; i++) {
    //   html +=
    //     '<div class="article">' +
    //     "<h3>" +
    //     articles[i].title +
    //     "</h3>" +
    //     "<p>" +
    //     articles[i].description +
    //     "</p>" +
    //     "</div>";
    // }
    // // document.body.insertAdjacentHTML("beforeend", html);
    // // create new
    // let div = document.createElement("div");
    // div.innerHTML = html;
    // document.body.appendChild(div);

    //   const article = data[i];
    // const articleElement = document.createElement("article");
    // articleElement.innerHTML = `
    //                         <h3>${article.title}</h3>
    //                         <p>${article.description}</p>
    //                     `;
    // document.body.appendChild(articleElement);

    // create h2 element
    const titleWithPromise = document.createElement("h2");
    titleWithPromise.classList.add("title");
    titleWithPromise.innerText = "Articles with Promise";
    document.body.appendChild(titleWithPromise);

    for (let i = 0; i < 5; i++) {
      const article = articles[i];
      const articleElement = document.createElement("article");
      articleElement.innerHTML = `
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                        `;
      document.body.appendChild(articleElement);
    }
  })
  .catch((error) => {
    console.log(error);
  });
