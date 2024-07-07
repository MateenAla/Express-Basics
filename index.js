require ('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000
const github = {
    "login": "MateenAla",
    "id": 97920451,
    "node_id": "U_kgDOBdYlww",
    "avatar_url": "https://avatars.githubusercontent.com/u/97920451?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MateenAla",
    "html_url": "https://github.com/MateenAla",
    "followers_url": "https://api.github.com/users/MateenAla/followers",
    "following_url": "https://api.github.com/users/MateenAla/following{/other_user}",
    "gists_url": "https://api.github.com/users/MateenAla/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MateenAla/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MateenAla/subscriptions",
    "organizations_url": "https://api.github.com/users/MateenAla/orgs",
    "repos_url": "https://api.github.com/users/MateenAla/repos",
    "events_url": "https://api.github.com/users/MateenAla/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MateenAla/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-01-17T22:09:19Z",
    "updated_at": "2024-07-04T20:07:14Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/contact', (req, res) => {
  res.send('Contact Page')
})

app.get('/profile', (req, res) => { 
  res.send('Profile Page')  
})

app.get('/login', (req,res) => {
    res.send(`<h2>Welcome And Please Login</h2> ${process.env.port}`)
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})

app.get('/github', (req, res) => {
  res.json(github)
})

app.get('/github/user', (req, res) => {
  res.json(github.login)
})