const mongodb = require('mongoose');

const notestable = new mongoose.Schema({
    title : { type: string, required: true},
    content: { type: string, required: true},
    date: {type: number, required: true},
    notifyme : {type : number, required: false}
},{timestamps : true});

module.exports = mongoose.model('notes', notestable);