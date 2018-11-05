const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = new schema({
  q: String,
  a: String,
  c: String
});

const sectionSchema = new schema({
  id: String,
  name: String,
  type: String,
  status: String,
  rating: String,
  questions: [questionSchema]
});

const formSchema = new schema({
  quarter: String,
  sections: [sectionSchema]
});

const yearSchema = new schema({
  year: String,
  formStatus: String,
  formRating: String,
  forms: [formSchema]
});

const usersSchema = new schema({
  user: String,
  year: [yearSchema]
});

const FormSchema = new schema(
  {
    users: [usersSchema],
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Form", FormSchema);
