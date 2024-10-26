require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 71,
    "public_gists": 1,
    "followers": 7037,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2023-09-09T03:27:44Z"
  }
  

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})