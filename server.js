const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const all = require('./Routes/allroutes');
const app = express();

dotenv.config();
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Mongodb connected ${conn.connection.host}`)
    }
    catch(error){
        console.log(error.message)
       
    }
}

connectDB();


app.use(express.json());
app.use(cors());

app.use("/", all);
const port = 3000;
app.listen(3000, () =>{
    console.log(`Server is running on ${port}`)
}) 



