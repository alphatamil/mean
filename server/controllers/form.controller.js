const Form = require("../models/form.model");

async function getForm(req, res) {
  try {
    let id = req.params.id;
    let user = req.params.user;
    let form = await Form.where("_id", id)
      .select({ users: { $elemMatch: { user: user } } })
      .exec();
    res.send(form);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function editForm(req, res) {
  try {
    let id = req.params.id;
    let user = req.params.user;
    let form = await Form.where("_id", id)
      .select({ users: { $elemMatch: { user: user } } })
      .update({}, req.body)
      .exec();
    res.send(form);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getForm,
  editForm
};
