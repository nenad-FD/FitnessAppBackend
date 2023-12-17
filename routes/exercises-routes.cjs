const { Router } = require("express");
const controller = require("../controllers/exercise-controller.cjs");
const router = Router();

router.get("/", controller.getAll);
router.post("/create", controller.create);

module.exports = router;
