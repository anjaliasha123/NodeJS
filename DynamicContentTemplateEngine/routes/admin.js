const express = require('express');
const router = express.Router();
const path = require('path');

const products = [];

router.get('/add-product', (req, res, next)=>{
    console.log('In the admin middleware');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

router.post('/product', (req, res, next)=>{
    console.log('Post operation..');
    products.push(req.body.title);
    console.log('products: ',products);
    // console.log(req.body);
    res.redirect('/');
});

module.exports = {router, products};