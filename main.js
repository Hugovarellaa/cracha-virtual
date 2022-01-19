const LinksSocialMedia = {
  github: "hugovarellaa",
  youtube: "youtube",
  facebook: "hugo.alves.180",
  instagram: "hugo.alves__",
  twitter: "",
};

function chageSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      description.textContent = data.bio;
      userProfile.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGithubProfileInfos();
