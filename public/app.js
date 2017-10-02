var express = require('express');
var todoController = require('./controllers/todocontroller');
var app = express();

//set template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./assets'));

//fire controllers
todoController(app);

//listen to port 3000
app.listen(3000);
console.log('Listening to port 3000');