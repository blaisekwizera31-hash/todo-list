const User = require('../Models/users');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt');
const dotenv = require('dotenv')
dotenv.config()

exports.signup = async (req, res) => {
    try{
        const {name , password,email} = req.body;

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({
                success:false,
                message: "User already exists"
            })
        }
        const hashedpwd = await bcrypt.hash(password, 10);
        const newUser = new User({name, password: hashedpw, email});

        await newUser.save();

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

exports.login = async (req, res) =>{
    try{
        const {name, password} = req.body;
        const user = await User.findOne({name});
        if(!user){

           return res.status(401).json({
                message: "Invalid credentials"
            });
        }
        const pismatch = await bcrypt.compare(password, user.password)
            if(!pismatch){
               res.status(401).json({
                message: "Invalid password"
               })
            }
       const token = jwt.sign(
         { id:user._id, name: user.name, role:user.role },process.env.ACCESS_SECRET,
         {expiresIn: '1h'}
       ) 
       res.status(200).json({
        success: true,
        token: token
       })   
    }
    catch(error){
        console.error(error)
        res.status(500).json({error:"Internal server error"})
    }
}

