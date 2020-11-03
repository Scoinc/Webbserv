const express = require('express')
const dBModule = require('./dBModule')
const app = express()
const port = 3000
var createPerson = require('./PersonModule')

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.sendFile(clientDir + "index.html")
})

app.get('/stilen', (req, res) => {
  res.sendFile(clientDir + "stule.css")
})

app.get('/jesus', (req, res) => {
  res.sendFile(clientDir + "download.jpg")
})

app.post('/', (req, res) => {
  let person = create.createPerson(req.body.name, req.body.email, req.body.age)

  dBModule.storeElement(person)

  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
