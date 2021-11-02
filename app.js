
const nodemon = require('nodemon');
const express = require('express');
const app = express();
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.send('Hello from Express!')

})
app.get(/^\/[\w-]+[^xyz]$/, (req, res) => {
    const randomNum = Math.floor(Math.random()*100);
    //console.log(random);
    res.render('index', { method: req.method, path: req.path, randomNum})
})

app.get(/^\/(.+)?xyz$/, (req, res) => {
    res.send('That\'s all I wrote.');
})




const port = 8081;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
