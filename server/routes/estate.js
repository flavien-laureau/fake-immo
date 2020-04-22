const express = require('express');
const router = express.Router();
const estateCtrl = require('../controllers/estate');


router.get('/', estateCtrl.getAllEstates);
router.get('/:id', estateCtrl.getOneEstateById)

module.exports = router;
