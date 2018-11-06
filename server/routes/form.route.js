const express = require("express");
const formCtrl = require("../controllers/form.controller");

const router = express.Router();

router.get("/:id&:user", formCtrl.getForm);
router.put("/:id&:user", formCtrl.editForm);

module.exports = router;
