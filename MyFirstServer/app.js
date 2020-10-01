const express = require('express')
const { Mongoose } = require('mongoose')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"
const mongoose = require('./mongoose')

app.use(express.json())
app.use(express.urlencoded())

app.get('/cssen', (req, res) => {
  res.sendFile(clientDir + "parallax.css")
})
app.get('/bild', (req, res) => {
    res.sendFile(clientDir + "attackOnKirby.png")
  })
app.get('/', (req, res) => res.sendFile(clientDir + "parallax.html"))

app.post('/', (req, res) => {
  mongoose.storePerson(req.body.name, req.body.email, req.body.age)

  res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
