const express = require("express");
const router = express.Router();
const estateCtrl = require("../controllers/estate");
const multer = require("../middleware/multer-config");

router.get("/", estateCtrl.getAllEstates);
router.get("/:id", estateCtrl.getOneEstateById);
router.post("/", multer, estateCtrl.createEstate);

module.exports = router;
