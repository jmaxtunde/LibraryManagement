if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayout = require("express-ejs-layouts");

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded')
    } else {
        console.log('Error in DB connection ' + err)
    }
})

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');
app.set('layout', 'layouts/layout');
app.use(expressLayout);
app.use(express.static('public'));

app.get('/', indexRouter);

app.listen(process.env.PORT || 3000);