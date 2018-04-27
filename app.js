// importing modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');

//connecting database
mongoose.connect('mongodb://localhost:27017/products');
const db = mongoose.connection;

// on connection
db.on('connected', function(){
    console.log('connected to mongoose');
});

db.on('error', function(err){
    console.log('connection failed: '+ err);
});


// setting up express
var app = express();

// cors middleware
app.use(cors());

//morgan middleware
app.use(morgan('dev'));

// setting up port
const port = process.env.PORT || 3000;

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true}));

// parse application json
app.use(bodyParser.json());

//static path file
app.use(express.static(path.join(__dirname, 'public')));

//importing routes from routes folder
const route = require('./routes/routes');
//route middleware
app.use('/api', route);




// setting up home route
app.get('/', function(req,res){
    res.send('hello from home page');
});

// calling port with a callback or listening server
app.listen(port, function(){
    console.log('server started:'+ port);
});