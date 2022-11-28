const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const makeMiddleware = require('multer/lib/make-middleware');
const app = express();
dotenv.config({path:'./config.env'});

const PORT = process.env.PORT;

require('./db/conn');

app.use(express.json());
//const User = require('./model/userSchema');

//router
app.use(require('./router/auth'));

//Middleware
/*
const middleware = (req, res,next) => {
    console.log(`Hello from middleware`);
    next();
}*/


app.get('/',(re, res)=> {
    res.send(`Hello world from the server`);

});

app.get('/signin',(re, res)=> {
    res.send(`Hello world from the server`);
});

app.get('/register',(re, res)=> {
    res.send(`Hello world from the server`);

});

/*
app.get('/profile',(re, res)=> {
    res.send(`Hello world from the server`);

});

app.get('/survey',(re, res)=> {
    res.send(`Hello world from the server`);

});
app.get('/builder',(re, res)=> {
    res.send(`Hello world from the server`);

});*/

app.listen(PORT,()=>{

    console.log(`server is running at port`);
})