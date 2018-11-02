const express = require("express");
const userCtrl = require("../controllers/user.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users Works");
});

module.exports = router;
