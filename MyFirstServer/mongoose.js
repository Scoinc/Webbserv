const express = require('express');
const app = express();
const port = 3000;
const clientDir = __dirname + "\\client\\"

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myServer', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
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
  console.log(req.body.name)
  console.log(req.body.email)
  res.redirect('/')
})

  const niklas = new Person({name: 'Niklas', age: '33'});

  niklas.save();

/*
  const kittenSchame = new mongoose.Schema({
    name: String
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
  
  const Kitten = mongoose.model('Kitten', kittySchema);

  const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

  Kitten.find({ name: /^fluff/ }, callback);
*/
