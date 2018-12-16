const express = require("express");

const DemandController = require("../controllers/demands");

const router = express.Router();

router.post("", DemandController.createDemand);
router.get("", DemandController.getDemands);
router.get("/:id", DemandController.getDemand);

module.exports = router;
