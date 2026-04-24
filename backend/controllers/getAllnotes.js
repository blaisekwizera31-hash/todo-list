const Note = require ("../models/notes");

const getAllNotes = async (req, res) => {
  try{
    const userId = req.user.id;
    const notes = await Note.find({ userId: userId });
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