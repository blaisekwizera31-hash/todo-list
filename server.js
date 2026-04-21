const express = require('express');
const mongodb = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const all = require('../Routes/allroute')
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('The todo list is running')
});

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is roaring to life on this port ${PORT}`)
});