const express = require ('express');
const mongoose = require ('monggoose');
const routes = require('routes') // come later and change 

const app = express();
app.use('/books',routes)

mongoose.connect('', function () {
    console.log("MongoDB Connected successfully");
  })
mongoose.Promise = global.Promise;


app.listen(9000,()=>{
    console.log('Books service is running!!!')
})