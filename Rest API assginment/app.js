const express  = require('express');
const mongoose = require ('mongoose')

const routes = require('./routes')

const app = express();
app.use('/inventory',routes)

mongoose.connect('mongodb+srv://Vedantzz:test@test.fxclm.mongodb.net/?retryWrites=true&w=majority',function(){
    console.log('database is working properly')
})


app.listen(4000,()=>{
    console.log('working on port 4000 properly!!!')
})
