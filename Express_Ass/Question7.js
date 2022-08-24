var express = require('express');
var bodyparser = require('body-parser');

var app = express();

var items = [{id: 1, product:'Bat'},{id: 2, product:'Ball'},{id: 3, product:'Tennis'}];

app.use(bodyparser.urlencoded({extended: false}));

app.get('/items', (req, res) => {
    if (items) {
        res.send(items);
    }
    else {
        res.send('List is empty');
    }
});

app.post('/items', (req, res) => {
    var items = req.body;
    items.push(items);
    res.send('Item added!');
});

app.get('/items/:id', (req, res) => {
    var itemId = parseInt(req.params.id);
    var item = items.find(item => item.id === itemId);
    if (item){
        res.send(item);
    }
    else{
        res.send('Item not found');
    }
});

app.delete('/items/:id', (req, res) => {
    var itemId = parseInt(req.params.id);
    var item = items.find(item => item.id === itemId);
    if (item){
        items.splice(items.indexOf(item), 1);
        res.json(items);
    }
    else {
        res.send('Item no found');
    }
})

app.listen(3000);