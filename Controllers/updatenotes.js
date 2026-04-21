const Class = require('../Models/notes');

exports.deleteNote = async(req, res) =>{
    try{
        const {id} = req.params;
        const {title, content, date, notifyme } = req.body;

        const updatednote = await Note.findOneAndUpdate({
            _id: id, userId: req.user.id
        },
    {
        title, content, date, notifyme

    },
{
    new: true, runValidators: true
})
 if(!updatednote){
    return res.status(401).json({
        success: false,
        message: "Message not found"
    })
 }
 res.status(200).json({
    success: true,
    message: "The note is updated successfully"
 })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.messafe
        })
    }
} 