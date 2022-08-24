import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res) =>{

    console.log("Hello World")

    res.send("hello from the homepage");
});

app.listen(500);