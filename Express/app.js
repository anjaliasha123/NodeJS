const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false})); //registering a parser

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>');
});

app.post('/product', (req, res, next)=>{
    console.log('This is products page');
    console.log(req.body.title);
    res.redirect('/')
})

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
