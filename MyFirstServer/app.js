const express = require('express')
const { Mongoose } = require('mongoose')
const app = express()
const port = 4000
const clientDir = __dirname + "\\client\\"
const personMod = require('./PersonMod')
const dbMod = require('./dbMod')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded())

app.get('/cssen', (req, res) => {
  res.sendFile(clientDir + "parallax.css")
})
app.get('/bild', (req, res) => {
    res.sendFile(clientDir + "attackOnKirby.png")
  })
app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))

app.post('/', (req, res) => {
  let person = personMod.createPerson(req.body.name, req.body.email)

  dbMod.storeElement(person)

  res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
