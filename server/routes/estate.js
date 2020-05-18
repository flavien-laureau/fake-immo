const express = require("express");
const router = express.Router();
const estateCtrl = require("../controllers/estate");
const multer = require("../middleware/multer-config");

router.get("/", estateCtrl.getAllEstates);
router.get("/:id", estateCtrl.getOneEstateById);
router.post("/", multer, estateCtrl.createEstate);
router.delete("/:id", estateCtrl.deleteEstate);
router.put("/:id", multer, estateCtrl.modifyEstate)

module.exports = router;
