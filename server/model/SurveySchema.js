const mongoose = require('mongoose');


const SurveySchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true
    },
    JobTitle: {
        type: String,
        required: true
    },
    YOE: {
        type: Number,
        required: true
    },
    pastorg: {
        type: String,
        required: false
    },
    pastdes: {
        type: String,
        required: false
    },
    pastDescr:{
        type: String,
        required: false
    },
    EdQual:{
        type: String,
        required: true
    },
    EdInst:{
        type: String,
        required: true
    },
    Degree:{
        type: String,
        required: true
    },
    SoftSkills:{
        type: String,
        required: true
    },
    TechSkills:{
        type: String,
        required: true
    }
    
    
});

const survey = mongoose.model('SURVEY',SurveySchema);

module.exports = survey;