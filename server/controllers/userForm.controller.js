const Template = require("../models/template.model");
const Form = require("../models/form.model");
const User = require("../models/user.model");

async function getUserForms(req, res) {
  try {
    let forms = await Form.find();
    res.send(forms);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function assignUserForm(req, res) {
  try {
    let template = await new Template(req.body).save();
    res.send(template);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function getUserForm(req, res) {
  try {
    let id = req.params.id;
    let template = await Template.findOne({ _id: `${id}` });
    res.send(template);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function editUserForm(req, res) {
  try {
    let id = req.params.id;
    let template = await Template.update({ _id: `${id}` }, req.body, {
      runValidators: true
    });
    res.send(template);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function deleteUserForm(req, res) {
  try {
    let id = req.params.id;
    let template = await Template.deleteOne({ _id: `${id}` });
    res.send(template);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getUserForms,
  getUserForm,
  assignUserForm,
  editUserForm,
  deleteUserForm
};
