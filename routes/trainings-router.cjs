const { Router } = require("express");
const controller = require("../controllers/training-controller.cjs");
const router = Router();

router.post("/create", controller.create);

module.exports = router;
