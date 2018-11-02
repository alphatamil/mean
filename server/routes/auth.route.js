const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth.controller");

router.post("/", async (req, res) => {
  let user = await authCtrl.insert(req.body);
  res.send(user);
});

module.exports = router;
