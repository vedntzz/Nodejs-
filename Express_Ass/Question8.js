var express = require('express');
var pug = require('pug');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');
app.get('/home', function(req, res){
    res.render('index', {date: new Date().toDateString()});
})

app.listen(3000);