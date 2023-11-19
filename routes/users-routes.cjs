const { Router } = require("express");
const controller = require("../controllers/user-controller.cjs");
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/create", controller.create);
router.put("/update", controller.update);

module.exports = router;
