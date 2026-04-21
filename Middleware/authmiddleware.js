

const jwt = require('jsonwebtoken');

const auth= (req ,res, next) =>{

    const token = req.header('Authorization');

    if (!token){
        return res.status(401).json({
            message: "No token access denied"

        })
    }
    try{
        const cleanedtoken = token.replace('Bearer', '');
        const verified = jwt.verify(cleanedtoken, 'process.env.ACCESS_SECRET');

        req.user = verified;
       
        next();
    }
    catch(error){
        res.status(401).json({
            message : "Invalid token"
        })
    }
};
 module.exports = auth;