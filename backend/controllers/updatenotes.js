const Note = require("../models/notes");

exports.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, date } = req.body;

    const updatednote = await Note.findOneAndUpdate(
      {
        _id: id,
        userId: req.user.id,
      },
      {
        title,
        content,
        date,
      },
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updatednote) {
      return res.status(401).json({
        success: false,
        message: "Message not found",
      });
    }
    res.status(200).json({
      success: true,
      data: {
        _id: id,
        title: updatednote.title,
        content: content,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
