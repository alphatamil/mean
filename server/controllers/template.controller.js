const Template = require("../models/template.model");

async function getTemplates(req, res) {
  try {
    let templates = await Template.find();
    res.send(templates);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function createTemplate(req, res) {
  try {
    let template = await new Template(req.body).save();
    res.send(template);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function getTemplate(req, res) {
  try {
    let id = req.params.id;
    let template = await Template.findOne({ _id: `${id}` });
    res.send(template);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function editTemplate(req, res) {
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
async function deleteTemplate(req, res) {
  try {
    let id = req.params.id;
    let template = await Template.deleteOne({ _id: `${id}` });
    res.send(template);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getTemplates,
  getTemplate,
  createTemplate,
  editTemplate,
  deleteTemplate
};
