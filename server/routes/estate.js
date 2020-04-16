const express = require('express');
const router = express.Router();
const estateCtrl = require('../controllers/estate');


router.get('/', estateCtrl.getAllItems);

module.exports = router;
