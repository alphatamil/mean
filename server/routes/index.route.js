const express = require("express");
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
const formRoutes = require("./form.route");
const userFormRoutes = require("./userForm.route");
const templateRoutes = require("./template.route");

const router = express.Router(); // eslint-disable-line new-cap

router.get("/check", (req, res) => {
  res.send("OK");
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/forms", formRoutes);
router.use("/templates", templateRoutes);
router.use("/userforms", userFormRoutes);

module.exports = router;
