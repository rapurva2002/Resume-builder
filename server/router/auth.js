const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
require('../db/conn');
const User = require('../model/userSchema');
const profile = require('../model/ProfileSchema');
const survey = require('../model/SurveySchema');
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

/*router.post('/EditProfile', (req,res)=>{
    const {uname, email, fname, lname, contact, Address, LinkedIn, GitHub, Instagram,Facebook} = req.body;

    if(!uname || !email || !fname || !lname || !contact || !Address){
        return res.status(422).json({error: "Please fill all the required fields "});
    }
    
    profile.findOne({email:email})
    .then((ProfileExist)=>{
        if(ProfileExist){
            return res.status(422).json({error: "Profile exists"});
        }

        const profile = new profile({uname, email, fname, lname, contact, Address, LinkedIn, GitHub, Instagram,Facebook })
        
        user.save().then(() => {
            res.status(201).json({message:"Success"});
        }).catch((err)=> res.status(500).json({error:"Failed!"}));
    
    }).catch(err => {console.log(err);});
});*/

router.post('/EditProfile', async (req,res)=>{
    const {uname, email, fname, lname, contact, Address, LinkedIn, GitHub, Instagram,Facebook} = req.body;

    if(!uname || !email || !fname || !lname || !contact  || !Address){
        return res.status(422).json({error: "Please fill all the fields "});
    }

    try{
          
        const profileExist = await profile.findOne({email:email});
        

        if(profileExist){
            return res.status(422).json({error: "Profile Exists!"});
        }
        else{
              const prof = new profile({uname, email, fname, lname, contact, Address, LinkedIn, GitHub, Instagram,Facebook})
    
            await prof.save();
            res.status(201).json({message:"Success!"});
    
        }  
    }catch (err) {
        console.log(err);
    }
    
});

router.post('/EditSurvey', async (req,res)=>{
    const {email, JobTitle, YOE, pastorg, pastdes, pastDescr, EdQual, EdInst, Degree , SoftSkills, TechSkills} = req.body;

    if(!email || !JobTitle || !EdQual || !EdInst  || !Degree){
        return res.status(422).json({error: "Please fill all the required fields "});
    }

    try{
          
        const surveyExist = await survey.findOne({email:email});
        
        if(surveyExist){
            return res.status(422).json({error: "Survey Exists!"});
        }
        else{
              const surv = new survey({email, JobTitle, YOE, pastorg, pastdes, pastDescr, EdQual, EdInst, Degree , SoftSkills, TechSkills})
    
            await surv.save();
            res.status(201).json({message:"Success!"});
    
        }  
    }catch (err) {
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

router.get('/editprofile',authenticate,(req, res)=> {
    res.send(req.rootUser);

});

router.get('/editsurvey',authenticate,(req, res)=> {
    res.send(req.rootUser);

});

module.exports = router;