const Note = require('../Models/notes');

exports.deletenotes = async(res, req) =>{
    try{
        const {id} = req.params;
        const note = await Note.findOneAndDelete({
            _id: id, userId: req.user.id
        })
        if(!note){
            return res.status(401).json({

            })
        
    }
        res.status(200).json({
        message: "Note deleted"
        })
            
    

    }
    catch(error){
        res.status(401).json({
            message:error.message
        })
    }
}