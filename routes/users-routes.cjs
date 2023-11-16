const { Router } = require("express");
const controller = require("../controllers/user-controller.cjs");
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/create", controller.create);

module.exports = router;
