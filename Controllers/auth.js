const user = require('../Models/users');
const bcrypt =require('bcryptjs');

exports.signup = async (req, res) => {
    try{
        const {name , password,email} = req.body;
        const hashedpwd = await bcrypt.hash(password, 10);
        const user = new User({name, hashedpwd, email});

        await user.save();

        res.status(201).json({
            success: true,
            message: "User created successfully!"
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message: error.message,
        });

    }
};

