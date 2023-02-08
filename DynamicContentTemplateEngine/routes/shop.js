const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const adminRouter = require('../routes/admin');

const productList = adminRouter.products;
app.set('views engine','ejs');


router.get('/', (req, res, next)=>{
    console.log('In the shop middleware');
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.render('shop',{addTitle: 'Shop Page', prods: productList})
})

module.exports = {router};