const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Login Works");
});

function login(req, res) {
  let user = req.user;
  let token = "123";
  res.json({ user, token });
}

module.exports = router;
