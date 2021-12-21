const express = require('express');
const app = express();
const debug = require('debug','app');
const port = 3000;
const morgan = require('morgan');

app.use(morgan('combined'));

app.get("/", (req,res) =>{

    res.send('Hello Cheattamas');

})

app.listen(port, ()=>{
    debug("Listening no port",port);
})