const Note = require('../models/notes');

exports.createNote = async(req,res)=>{
    try{
        const { title, content, date} = req.body;

      
        const userId = req.user.id
        const newNote = new Note({
            userId,
            title,
            content,
            date,
           
        });
        await newNote.save();
        res.status(201).json({
            success: true,
        
        });

    }
    catch(error){
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

