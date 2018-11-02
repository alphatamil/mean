const User = require("../models/user.model");

async function insert(user) {
  try {
    return await new User(user).save();
  } catch (err) {
    return err;
  }
}

module.exports = {
  insert
};
