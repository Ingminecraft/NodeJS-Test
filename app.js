const express = require('express');
const app = express();
const debug = require('debug','app');
const port = 3000;
const morgan = require('morgan');
const part = require('path');

app.use(morgan('combined'));
app.use(express.static(part.join(__dirname,"/public/")))

app.get("/", (req,res) =>{

    res.send('Hello Cheattamas ไอสัส');

})

app.listen(port, ()=>{
    debug("Listening no port",port);
})