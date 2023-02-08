const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/users', (req, res, next)=>{
    console.log('In middle ware for home..');
    res.sendFile(path.join(__dirname,'../','views','users.html'));
})

module.exports = {router};