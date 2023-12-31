// "https://api.github.com/users/ElzeroWebSchool/repos"

// 43- Create Function To Get Repos
// Create Function To Display Repos

let myButton = document.createElement("button");
myButton.textContent = "Get Repos";
document.body.append(myButton);

let myDiv = document.createElement("div");
document.body.append(myDiv);

// let myUl = document.createElement("ul");
// myDiv.append(myUl);

let myTable = document.createElement("table");
myDiv.append(myTable);

function getRepos() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/AhmedZena/repos");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let myRepos = JSON.parse(xhr.response);
      displayRepos(myRepos);
    }
  };
}

function displayRepos(repo) {
  //   myUl.innerHTML = "";
  //   myTable.innerHTML = "";
  myTable.innerHTML = `
    <tr>
        <th>Repo Name</th>
        <th>Repo Stars</th>
        <th>Repo Forks</th>
        <th>Repo Link</th>
    </tr>
    `;

  repo.forEach((element) => {
    let myTr = document.createElement("tr");
    myTr.innerHTML = `
    <td>${element.name}</td>
    <td>${element.stargazers_count}</td>
    <td>${element.forks_count}</td>
    <td><a href="${element.html_url}">Visit</a></td>
    `;
    myTable.append(myTr);
  });
}

myButton.addEventListener("click", getRepos);
