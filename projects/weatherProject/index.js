const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser')

//view setup
app.set('views engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

//routes
const homeRouter = require('./routes/home-router');
const resultRouter = require('./routes/result-router');
app.use('/weather',homeRouter.router);
app.use('/weather',resultRouter.router);
app.use('/', (req, res, next)=>{
    res.render(path.join(__dirname,'views','404.ejs'));
})
//dummy route
// app.use('/', (req, res, next)=>{
//     res.render(path.join(__dirname,'views','home.ejs'));
// })
app.listen(3000, ()=>{
    console.log('Listening to the port 3000');
});