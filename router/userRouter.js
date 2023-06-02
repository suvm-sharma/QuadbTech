const express = require('express');
const userController = require('../controller/userController');

const router = express();

router.get('/getAllData', userController.getAllData);

module.exports = router;
