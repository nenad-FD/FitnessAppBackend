const { Router } = require("express");
const controller = require("../controllers/exercise-controller.cjs");
const router = Router();

router.get("/", controller.getAll);

module.exports = router;
