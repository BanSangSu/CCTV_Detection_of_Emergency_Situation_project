const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

//app.post('/item/add', (req, res) => {
//  const newItem = new Item({
//    name: req.body.name
//  });
//
//  newItem.save().then(item => res.redirect('/'));
//});

const port = 3000;

app.listen(port, () => console.log('Server running...'));
