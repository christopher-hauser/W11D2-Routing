
const nodemon = require('nodemon');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!')
    const method = req.method;
    const path = req.path;
    const random = Math.floor(Math.random()*100);
    console.log(random);
})





const port = 8081;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
