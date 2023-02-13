const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const controller = require('../controller/products');

app.set('views engine', 'ejs');

router.get('/add-product', controller.getAddProducts);

router.post('/product', controller.postAddProducts);

module.exports = {router};