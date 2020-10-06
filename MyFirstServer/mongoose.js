const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myServer', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const personSchema = new mongoose.Schema({
    name: String,
    email: String
  });

  personSchema.methods.speak = () => {
    console.log("Hi"),
    console.log("My name is " + this.name)
  }

const Person = mongoose.model('Person', personSchema);

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
  const person = new Person({name: (req.body.username), email: (req.body.email)});

  person.save()
})

  app.listen(port);
  