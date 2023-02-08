const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

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
app.use((req, res, next)=>{
    // res.status(404).sendFile(path.join(__dirname,'./','views','404.html'));
    res.status(404).render('404', {pageTitle: 'Page! not found 404!'});
    
})

app.listen(3000, ()=>{
    console.log('Listening to the port')
})