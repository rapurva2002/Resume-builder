const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
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
    contact: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    LinkedIn:{
        type: String,
        required: true
    },
    GitHub:{
        type: String,
        required: false
    },
    Instagram:{
        type: String,
        required: false
    },
    Facebook:{
        type: String,
        required: false
    }

    
})

const profile = mongoose.model('PROFILE',profileSchema);

module.exports = profile;
//>>>>>> 3e41964 (commits)
