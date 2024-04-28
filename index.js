require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

const githubData = {
  login: "Asutosh2000",
  id: 88933590,
  node_id: "MDQ6VXNlcjg4OTMzNTkw",
  avatar_url: "https://avatars.githubusercontent.com/u/88933590?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Asutosh2000",
  html_url: "https://github.com/Asutosh2000",
  followers_url: "https://api.github.com/users/Asutosh2000/followers",
  following_url:
    "https://api.github.com/users/Asutosh2000/following{/other_user}",
  gists_url: "https://api.github.com/users/Asutosh2000/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Asutosh2000/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Asutosh2000/subscriptions",
  organizations_url: "https://api.github.com/users/Asutosh2000/orgs",
  repos_url: "https://api.github.com/users/Asutosh2000/repos",
  events_url: "https://api.github.com/users/Asutosh2000/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Asutosh2000/received_events",
  type: "User",
  site_admin: false,
  name: "Asutosh Mahapatra",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Full-stack Developer",
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 0,
  following: 5,
  created_at: "2021-08-14T12:43:37Z",
  updated_at: "2024-04-13T17:23:05Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
