const express = require('express');
const path = require('path');
const router = express.Router();

//controller methods
const controller = require('../controller/controls');

router.route('/result')
.get(controller.getResultPage);

module.exports = {router};