const express = require('express');
const path = require('path');
const router = express.Router();

//controller methods
const controller = require('../controller/controls');

router.route('/home')
.get(controller.getHome)

router.route('/result')
.post(controller.generateReport);

module.exports = {router};