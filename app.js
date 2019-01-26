const express = require('express');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser')
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 5000;
//const router = express.Router();
// Database Setup
const db = require('./config/key.js').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => console.log(err));

// View Engine Setup
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Connect flash
app.use(flash());

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.static( "public" ));

app.use('/',require('./routes/index.js'));



app.listen(PORT, console.log(`Server is running on ${PORT}`));
