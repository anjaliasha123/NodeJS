const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); //registering a parser
app.use(express.static(path.join(__dirname,'public')));
//routing
app.use('/admin',adminRouter.router); //filtering routes using /admin
app.use(shopRouter.router);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });



app.listen(3000);
