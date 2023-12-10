const { Router } = require("express");
const controller = require("../controllers/training-controller.cjs");
const router = Router();

router.post("/create", controller.create);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteById);

module.exports = router;
