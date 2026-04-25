const Note = require('../models/notes');

exports.deletenotes = async(req, res) =>{
    try{
        const {id} = req.params;
        const note = await Note.findOneAndDelete({
            _id: id, userId: req.user.id
        })
        if(!note){
            return res.status(404).json({
                success: false,
                message: "Note not found or not authorized"
            })
        }
        res.status(200).json({
            success: true,
            message: "Note deleted"
        })
            
    

    }
    catch(error){
        res.status(401).json({
            message:error.message
        })
    }
}
