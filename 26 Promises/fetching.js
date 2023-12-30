fetch("./articles.json")
  .then((response) => response.json())
  .then((data) => {
    // create h2 element
    const titleWithFetch = document.createElement("h2");
    titleWithFetch.classList.add("title");
    titleWithFetch.innerText = "Articles with Fetch";
    document.body.appendChild(titleWithFetch);

    for (let i = 0; i < 5; i++) {
      const article = data[i];
      const articleElement = document.createElement("article");
      articleElement.innerHTML = `
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                        `;
      document.body.appendChild(articleElement);
    }
  })
  .catch((error) => console.error(error));
