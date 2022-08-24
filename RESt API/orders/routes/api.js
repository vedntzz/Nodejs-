const express = require('express') 
const bodyParser = require('body-parser');
const axios = require('axios');
const Order = require('../models/Order');

const app = express.Router();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("This is order Service")
})

app.get('/getallorders',(req,res)=> {
    Order.find({}).then((orders)=>{
        res.send(orders);
    }).catch((err) => {
        console.log(err.message)
    })
})

app.get('/getorder/:customerid',(req,res)=> {
    Order.findOne({CustomerID: req.params.customerid}).then((orders)=>{
        if (orders){
            console.log('got orders' + orders)
            res.send(orders);
        }else{
            res.send('orders not found')
        }
        
    }).catch((err) => {
        console.log(err.message)
    })
})

app.post('/order', (req, res)=>{
    Order.create(req.body)
    .then((orders)=>{
        res.status(201).send(orders);
    }).catch((err)=>{
        console.log(err.message)
    })
})

app.delete('/:customerid',(req,res)=>{
    Order.deleteOne({ CustomerID: req.params.customerid })
    .then(() => {
        res.status(204).send('Order successfully deleted')
    })
    .catch((err)=>{
        console.log(err.message)
    })
} )

app.get('/order/:id',(req,res)=>{
    Order.findById(req.params.id)
    .then((order)=>{
        if (order) {
            
            axios.get("/"+order.CustomerID)
            .then((response)=>{
                console.log(response)
                var orderObject = { customerName: response.data.name, bookTitle: '',initialDate: order.initialDate, deliveryDate: order.deliveryDate}

                axios.get(""+order.BookID)
                .then((response)=>{
                    orderObject.bookTitle = response.data.title;
                    res.send(orderObject)
                })
                .catch((err)=>{
                    console.log(err.message)
                })
            })
            .catch((err)=>{
                console.log(err.message)
            })

            
        } else {
            res.send("Invalid Order")
        }
    })
})

module.exports = app;