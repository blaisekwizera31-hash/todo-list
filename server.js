const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('The todo list is running')
});

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is roaring to life on this port ${PORT}`)
});