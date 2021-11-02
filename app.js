
const nodemon = require('nodemon');
const express = require('express');
const app = express();
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.send('Hello from Express!')

})
app.all(/^\/[\w-]+[^xyz]$/, (req, res) => {
    const randomNum = Math.floor(Math.random()*100);
    //console.log(random);
    res.render('index', { method: req.method, path: req.path, randomNum})
})

app.get(/^\/(.+)?xyz$/, (req, res) => {
    res.send('That\'s all I wrote.');
})

app.get(/\/capital-letters\/.+/, (req, res) => {
    const path = req.path.toUpperCase();
    console.log(path);
    const pathArr = path.split('/');
    console.log(pathArr);
    res.send(`${pathArr[2]}`);
})

app.get(/^\/(.+)?\/bio$/, (req, res) => {
    res.send('Bio');
})

app.get(/^\/(.+)?\/contact$/, (req, res) => {
    res.send('Contact');
})



const port = 8081;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
