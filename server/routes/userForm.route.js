const express = require("express");
const userFormCtrl = require("../controllers/userForm.controller");

const router = express.Router();

router.get("/", userFormCtrl.getUserForms);
router.post("/", userFormCtrl.assignUserForm);
router.get("/:id", userFormCtrl.getUserForm);
router.put("/:id", userFormCtrl.editUserForm);
router.delete("/:id", userFormCtrl.deleteUserForm);

module.exports = router;
