const Note = require('../Models/notes');

exports.createNote = async(req,res)=>{
    try{
        const { title, content, date, notifyme} = req.body;

        const newNote = new Note({
            title,
            content,
            date,
            notifyme
        });
        await newNote.save();
        res.status(201).json({
            success: true,
        
        });

    }
    catch(error){
        res.status(400).json({
            error: error.message
        });
    }
};

