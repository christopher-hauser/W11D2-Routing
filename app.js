
const nodemon = require('nodemon');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!')
})





const port = 8081;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));