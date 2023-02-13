const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const errorController = require('./controller/error');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
//routes
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const productsList = adminRouter.products;

console.log('Prtoducts: ', productsList);
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRouter.router);
app.use(shopRouter.router);
app.use(errorController.get404);

app.listen(3000, ()=>{
    console.log('Listening to the port')
})