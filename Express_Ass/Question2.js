var express = require('express');

var app = express();

app.get('/year', (req, res) => {
    res.set({'Content-Type': 'text/plain; charset=utf-8'});

    var age = req.query.age;
    var currentYear = new Date().getFullYear();
    let year = currentYear - age;

    res.send(`You were born in ${year}.`);
});

app.listen(3000);

