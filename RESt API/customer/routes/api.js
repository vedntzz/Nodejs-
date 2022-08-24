const express = require('express') 
const bodyParser = require('body-parser');
const Customer = require('../models/Customer');

const app = express.Router();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("This is Customer Service")
})

app.get('/getallcustomers',(req,res)=> {
    Customer.find({}).then((customers)=>{
        res.send(customers);
    }).catch((err) => {
        console.log(err.message)
    })
})

app.get('/getcustomer/byname/:name',(req,res)=> {
    Customer.findOne({name: req.params.name}).then((customers)=>{
        if (customers){
            console.log('got customers' + customers)
            res.send(customers);
        }else{
            res.send('customers not found')
        }
        
    }).catch((err) => {
        console.log(err.message)
    })
})

app.get('/getcustomer/byid/:id',(req,res)=> {
    Customer.findOne({id: req.params.id}).then((customers)=>{
        if (customers){
            console.log('got customers' + customers)
            res.send(customers);
        }else{
            res.send('customers not found')
        }
        
    }).catch((err) => {
        console.log(err.message)
    })
})

app.post('/customer', (req, res)=>{
    Customer.create(req.body)
    .then((customers)=>{
        res.status(201).send(customers);
    }).catch((err)=>{
        console.log(err.message)
    })
})

app.post('/', (req, res)=>{
    res.send('Post request working')
})

app.delete('/:name',(req,res)=>{
    Customer.deleteOne({ name: req.params.name })
    .then(() => {
        res.status(204).send('Customer successfully deleted')
    })
    .catch((err)=>{
        console.log(err.message)
    })
} )

module.exports = app;