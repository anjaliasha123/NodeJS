const Product = require('../models/product');

let getAddProducts = (req, res, next)=>{
    console.log('In the admin middleware');
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.status(200).render('add-product', {addTitle: 'Add Products Page'});
}

let postAddProducts = (req, res, next)=>{
    console.log('Post operation..');
    const prod = new Product(req.body.title);
    prod.save();
    res.redirect('/');
}

let getProducts = (req, res, next)=>{
    console.log('In the shop middleware');
    const products = Product.fetchAll();
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.render('shop',{addTitle: 'Shop Page', prods: products})
}

module.exports = {getAddProducts, postAddProducts, getProducts};