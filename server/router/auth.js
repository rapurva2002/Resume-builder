const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(re, res)=> {
    res.send(`Hello world from the server builder`);

});

//Using Promise
/*
router.post('/register', (req,res)=>{
    const {uname, email, fname, lname, pno, Dob, password, cpassword } = req.body;

    if(!uname || !email || !fname || !lname || !pno || !Dob || !password || !cpassword){
        return res.status(422).json({error: "Please fill all the fields "});
    }
    
    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error: "Email is already registered"});
        }

        const user = new User({uname, email, fname, lname, pno, Dob, password, cpassword })
        
        user.save().then(() => {
            res.status(201).json({message:"user registered successfully"});
        }).catch((err)=> res.status(500).json({error:"Failed to register"}));
    
    }).catch(err => {console.log(err);});
});*/

router.post('/register', async (req,res)=>{
    const {uname, email, fname, lname, pno, password, cpassword } = req.body;

    if(!uname || !email || !fname || !lname || !pno  || !password || !cpassword){
        return res.status(422).json({error: "Please fill all the fields "});
    }

    try{
          
        const userExist = await User.findOne({email:email});
        
        if(userExist){
            return res.status(422).json({error: "Email is already registered"});
        }
        else if(password != cpassword){
            return res.status(422).json({error: "password is not matching"});

        }
        else{
            const user = new User({uname, email, fname, lname, pno, password, cpassword })
        
            //encrypting password
    
            await user.save();
    
            res.status(201).json({message:"user registered successfully"});
    
        }
        
    }catch (err) {
        console.log(err);
    }
    
});

router.post('/signin', async (req, res)=> {
    //console.log(req.body);
    //res.json({message:"done"});
    try{
        let token;
        const {email , password } = req.body;
        if(!email || !password){
           return res.status(400).json({error:"Please enter all fields"}); 
        }

        const userLogin = await User.findOne({email:email});

        //console.log(userLogin);

        if(userLogin){

        const isMatch = await bcrypt.compare(password, userLogin.password);
        
        token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken",token,{
            expires: new Date(Date.now() + 25892000000),
            httpOnly:true
        });


        if(!isMatch){
            res.status(400).json({error: "Invalid Credentials"});
        } else {
            res.json({message: "Success!"});
        } 
    }else {
        res.status(400).json({error:"Invalid Credentials"});
    }
        
    }catch(err){
        console.log(err);
    }
});

router.get('/home',authenticate,(req, res)=> {
    res.send(req.rootUser);

});

router.get('/profile',authenticate,(req, res)=> {
    res.send(req.rootUser);

});

router.get('/survey',authenticate,(req, res)=> {
    res.send(req.rootUser);

});
router.get('/builder',authenticate,(req, res)=> {
    res.send(req.rootUser);

});

module.exports = router;