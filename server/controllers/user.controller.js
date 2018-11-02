const User = require("../models/user.model");

async function getUsers(req, res) {
  try {
    let users = await User.find();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
}
async function getUser(req, res) {
  try {
    let email = req.params.id;
    let user = await User.findOne({ email: `${email}` });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  getUsers,
  getUser
};
