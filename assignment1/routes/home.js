const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next)=>{
    console.log('In middle ware for home..');
    res.sendFile(path.join(__dirname,'../','views','home.html'));
});

module.exports = {router};