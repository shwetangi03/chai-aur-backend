require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "shwetangi03",
  id: 113777115,
  node_id: "U_kgDOBsgZ2w",
  avatar_url: "https://avatars.githubusercontent.com/u/113777115?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/shwetangi03",
  html_url: "https://github.com/shwetangi03",
  followers_url: "https://api.github.com/users/shwetangi03/followers",
  following_url:
    "https://api.github.com/users/shwetangi03/following{/other_user}",
  gists_url: "https://api.github.com/users/shwetangi03/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/shwetangi03/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/shwetangi03/subscriptions",
  organizations_url: "https://api.github.com/users/shwetangi03/orgs",
  repos_url: "https://api.github.com/users/shwetangi03/repos",
  events_url: "https://api.github.com/users/shwetangi03/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/shwetangi03/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 33,
  public_gists: 0,
  followers: 1,
  following: 4,
  created_at: "2022-09-17T12:33:20Z",
  updated_at: "2024-05-18T07:24:22Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello shwetangi!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at my first backend app!</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>chai aur shwetangi!</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
