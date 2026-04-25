const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const all = require('./routes/allroutes');

dotenv.config();

const app = express();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectDB();

app.use(express.json());
app.use(cors());


app.use("/", all);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



