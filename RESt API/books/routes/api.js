const express = require('express');
const bodyParser = require('body-parser');
const book = reuqire('../models/Book');

const app = express.Router();
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("This is the book service!!!")
})
app.get('/getallbooks',(req,res)=> {
    Book.find({}).then((books)=>{
        res.send(books);
    }).catch((err) => {
        console.log(err.message)
    })
})

app.get('/getbook/bytitle/:title',(req,res)=> {
    Book.findOne({title: req.params.title}).then((books)=>{
        if (books){
            console.log('got books' + books)
            res.send(books);
        }else{
            res.send('book not found')
        }
        
    }).catch((err) => {
        console.log(err.message)
    })
})

app.get('/getbook/byid/:id',(req,res)=> {
    Book.findOne({id: req.params.id}).then((books)=>{
        if (books){
            console.log('got books' + books)
            res.send(books);
        }else{
            res.send('book not found')
        }
        
    }).catch((err) => {
        console.log(err.message)
    })
})

app.post('/book', (req, res)=>{
    Book.create(req.body)
    .then((book)=>{
        res.status(201).send(book);
    }).catch((err)=>{
        console.log(err.message)
    })
})

app.delete('/:title',(req,res)=>{
    Book.deleteOne({ title: req.params.title })
    .then(() => {
        res.status(204).send('Book successfully deleted')
    })
    .catch((err)=>{
        console.log(err.message)
    })
} )

module.exports = app;