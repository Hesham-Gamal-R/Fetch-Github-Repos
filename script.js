let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");
let x = "https://api.github.com/users/ElzeroWebSchool/repos";

getButton.onclick = function () {
  getRepos();
};

function getRepos() {
  if (theInput.value === "") {
    reposData.innerHTML = `<span>Please inter Github Username.</span>`;
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((res) => res.json())

      .then((repositories) => {
        console.log(repositories);
        reposData.innerHTML = "";

        repositories.forEach((repo) => {
          //creat main div
          let mainDiv = document.createElement("div");

          //creat repo name txt
          let repoName = document.createTextNode(repo.name);

          //append txt to main div
          mainDiv.appendChild(repoName);

          //creat repo url Anchor
          let theUrl = document.createElement("a");

          //creat repo url txt
          let theUrlTxt = document.createTextNode("visit");

          //append repo url txt to Anchor
          theUrl.appendChild(theUrlTxt);

          //add href
          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

          //set attribute blank
          theUrl.setAttribute("target", "_blank");

          //append url anchor to main div
          mainDiv.appendChild(theUrl);

          //creat starsSpan
          let starsSpan = document.createElement("span");

          //creat stars count text
          let starsText = document.createTextNode(
            `Stars ${repo.stargazers_count}`
          );

          //add stars count text to start span
          starsSpan.appendChild(starsText);

          //append stars count span to main div
          mainDiv.appendChild(starsSpan);

          //add class om main div
          mainDiv.className = "repo-box";

          //append main div to container
          reposData.appendChild(mainDiv);
        });
      })
      .catch((error) => console.log(error));
  }
  console.log(theInput.value);
}
