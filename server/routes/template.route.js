const express = require("express");
const templateCtrl = require("../controllers/template.controller");

const router = express.Router();

router.get("/", templateCtrl.getTemplates);
router.post("/", templateCtrl.createTemplate);
router.get("/:id", templateCtrl.getTemplate);
router.put("/:id", templateCtrl.editTemplate);
router.delete("/:id", templateCtrl.deleteTemplate);

module.exports = router;
