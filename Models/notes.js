const mongoose = require('mongoose');

const notestable = new mongoose.Schema({
    title : { type: String, required: true},
    content: { type: String, required: true},
    date: {type: Number, required: true},
    notifyme : {type : Number, required: false}
},{timestamps : true});

module.exports = mongoose.model('notes', notestable);