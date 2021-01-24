//Inkludera Express.js
const express = require('express')
const { Mongoose } = require('mongoose')
//Inkludera dbModule.js
const dbModule = require('./dBModule')
//Inkludera MessageModel för att kunna spara meddelanden i databasen 
const MessageModel = require('./MessageModel')
//Gör en instans klassen express
const app = express()
//Ange porten som servern kommer att lyssna på.
const port = 3000

//Sökväg till sökväg till en mapp för alla statiska sidor och sätt den som default sökväg.
const staticDir = __dirname + '\\client\\'
app.use(express.static(staticDir))

//Sätt upp servern så att den kan tyda json och urlencoded
app.use(express.json())
app.use(express.urlencoded())

//Ställ in EJS som vymotor för servern. 
app.set('view engine', 'ejs')

//Lyssnar på GET requests på addressen <domain>/
app.get("/", async (req, res) => {
  const messages = await MessageModel.getAllMessages();
  res.render('pages/index.ejs', { messages: messages });
})

app.get('/index', (req, res) => {
  //rendera sidan index.ejs när klickad på i header
  res.render('pages/index.ejs')
})

app.get('/Skins', (req, res) => {
  //rendera sidan Skins.ejs när klickad på i header
  res.render('pages/Skins.ejs')
})

app.get('/Abilities', (req, res) => {
  //rendera sidan Abilities.ejs när klickad på i header
  res.render('pages/Abilities.ejs')
})

//Lyssnar på POST requests på addressen <domain>/
app.post('/', async (req, res) => {
  //Skapa ett Message objekt
  const message = MessageModel.createMessage(req.body.email, req.body.message)

  //spara elementet Message i databasen
  await dbModule.storeElement(message)

  //Ladda om sidan
  //Index.ejs får inte längre in messages inskickat så den klagar på att messages inte är definierat efter submit men fungerar efter att ha laddat om sidan
  res.render('pages/index.ejs', { messages: messages });
})

//Sätt igång servern så att den kan ta emot requests på vald port.
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
