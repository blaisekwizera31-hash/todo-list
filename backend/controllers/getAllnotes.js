const Note = require ("../models/notes");

const getAllNotes = async (req, res) => {
  try{
    const notes = await Note.find();
    res.status(200).json(notes);
  }
  catch(error){
    res.status(401).json({
        success: false,
        message: error.message

    })
  }
}

module.exports = {getAllNotes};