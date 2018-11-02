const express = require("express");
const userCtrl = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userCtrl.getUsers);
router.get("/:id", userCtrl.getUser);
router.post("/:id", async (req, res) => {
  let email = req.params.id;
  let user = await userCtrl.getUser(email);
  res.send(user);
});

module.exports = router;
