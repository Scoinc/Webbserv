const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

app.get('/bild', (req, res) => {
    res.sendFile(clientDir + "Kirby.jpg")
  })
app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))
app.get('/teknik', (req, res) => res.send('e'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))