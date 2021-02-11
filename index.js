require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();



app.set('view engine', 'ejs');

//app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);


//controllers
app.get('/', (req, res) => {
  res.send('Hello there...');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;