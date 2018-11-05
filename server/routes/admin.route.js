const express = require("express");
const adminCtrl = require("../controllers/admin.controller");

const router = express.Router();

router.get("/", adminCtrl.getUserForms);
router.post("/", adminCtrl.assignUserForm);
router.get("/:id", adminCtrl.getUserForm);
router.put("/:id", adminCtrl.editUserForm);
router.delete("/:id", adminCtrl.deleteUserForm);

module.exports = router;
