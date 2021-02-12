require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();



app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);


//controllers
app.get('/', (req, res) => {
  res.send('Hello there...');
});

app.get('/cryptocurrencies', (req, res) => {
  res.render('cryptocurrencies');
});

app.post('/cryptocurrency/add', (req, res) => {
    res.send("this is where new currencies will be added")
})

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
