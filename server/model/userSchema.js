const mongoose = require('mongoose');
//<<<<<<< HEAD
//=======
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//>>>>>>> 3e41964 (commits)

const userSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    pno: {
        type: Number,
        required: true
    },
    /*Dob: {
        type: Date,
        required: true
    },*/
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens:[ {   
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.pre('save', async function(next){

    console.log("hi from crypt funct");
    if(this.isModified('password')){
            this.password = await bcrypt.hash(this.password, 12);
            this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
}
);

userSchema.methods.generateAuthToken = async function() {
    try{
        console.log(this._id);
        console.log()
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = [];
        this.tokens = await this.tokens.concat({token: token });
        
        await this.save();
        return token;

    }catch (err) {
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;
//>>>>>> 3e41964 (commits)
