const Template = require("../models/template.model");
const Form = require("../models/form.model");
const User = require("../models/user.model");

async function getUserForms(req, res) {
  try {
    let forms = await Form.find(
      {},
      "users.user users.formStatus users.formRating users.createdAt"
    );
    res.send(forms);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function assignUserForm(req, res) {
  try {
    let users = req.body.users;
    let templateId = req.body.id;
    let template = await Template.findOne({ _id: `${templateId}` });
    let userForm = {};
    userForm = users.map(user => {
      return {
        user: user,
        formStatus: "assigned",
        form: template.form,
        formRating: "NA"
      };
    });
    let form = await new Form({ users: userForm, madeFrom: templateId }).save();
    users.forEach(async user => {
      let employee = await User.findOne({ email: `${user}` });
      let forms = employee.forms;
      forms.unshift(form._id);
      await User.update(
        { email: `${user}` },
        { forms: forms, isAssigned: true }
      );
    });
    res.send(form._id);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function getUserForm(req, res) {
  try {
    let id = req.params.id;
    let form = await Form.findOne(
      { _id: `${id}` },
      "users.user users.formStatus users.formRating users.createdAt"
    );
    res.send(form);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function editUserForm(req, res) {
  try {
    let id = req.params.id;
    let users = req.body.users;
    let templateId = req.body.madeFrom;
    let template = await Template.findOne({ _id: `${templateId}` });
    users.forEach(async user => {
      let newUser = {
        user: user,
        formStatus: "assigned",
        form: template.form,
        formRating: "NA"
      };
      await Form.findOneAndUpdate(
        { _id: `${id}` },
        { $push: { users: newUser } }
      );
      let employee = await User.findOne({ email: `${user}` });
      let forms = employee.forms;
      forms.unshift(id);
      await User.update(
        { email: `${user}` },
        { forms: forms, isAssigned: true }
      );
    });
    res.send(id);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function deleteUserForm(req, res) {
  try {
    let id = req.params.id;
    let form = req.body;
    if (form.all) {
      let users = await Form.findOne({ _id: `${id}` }, "users.user");
      await Form.deleteOne({ _id: `${id}` });
      users = users["users"];
      userEmails = users.map(e => {
        return e.user;
      });
      userEmails.forEach(async userEmail => {
        let employee = await User.findOne({ email: `${userEmail}` });
        let forms = employee.forms;
        let index = forms.indexOf(id);
        if (index > -1) {
          forms.splice(index, 1);
        }
        await User.updateOne(
          { email: `${userEmail}` },
          { forms: forms, isAssigned: false }
        );
      });
      res.send(id);
    } else {
      if (form.users.length >= 1) {
        form.users.forEach(async user => {
          await Form.findOneAndUpdate(
            { _id: `${id}` },
            { $pull: { users: { user: user } } }
          );
          let employee = await User.findOne({ email: `${user}` });
          let forms = employee.forms;
          let index = forms.indexOf(id);
          if (index > -1) {
            forms.splice(index, 1);
          }
          await User.updateOne(
            { email: `${user}` },
            { forms: forms, isAssigned: false }
          );
          res.send(id);
        });
      } else {
        throw "no users selected";
      }
    }
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
