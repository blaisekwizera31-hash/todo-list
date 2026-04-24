const mongoose = require('mongoose');

const notestable = new mongoose.Schema({
    userId: {type: String, required: true},
    title : { type: String, required: true},
    content: { type: String, required: true},
    date: {type: Date, required: false},
    // notifyme : {type : Number, required: false}
},{timestamps : true});

module.exports = mongoose.model('notes', notestable);