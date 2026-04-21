const express = require('express');
const mongodb = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const all = require('../Routes/allroutes');
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/", all);
// app.get('/', (req, res) => {
//     res.send('The todo list is running')
// });


