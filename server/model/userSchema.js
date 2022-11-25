const mongoose = require('mongoose');

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
    }
})

const User = mongoose.model('USER', userSchema);

module.exports = User;
