const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth.controller");

router.post("/", authCtrl.insert);

module.exports = router;
