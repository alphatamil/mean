const User = require("../models/user.model");

async function insert(req, res) {
  try {
    let user = await new User(req.body).save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  insert
};
