require ('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

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