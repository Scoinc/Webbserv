const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

app.get('/cssen', (req, res) => {
  res.sendFile(clientDir + "parallax.css")
})
app.get('/bild', (req, res) => {
    res.sendFile(clientDir + "attackOnKirby.png")
  })
app.get('/', (req, res) => res.sendFile(clientDir + "parallax.html"))

app.post('/', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.email)
  res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
