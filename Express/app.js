const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false})); //registering a parser

//routing
app.use('/admin',adminRouter.router); //filtering routes using /admin
app.use(shopRouter.router);
app.use((req, res, next)=>{
    res.status(404).send('<h1>404 Page not found!!</h1>');
})

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });



app.listen(3000);
