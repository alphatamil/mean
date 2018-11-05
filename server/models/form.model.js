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

const usersSchema = new schema({
  user: {
    type: String,
    required: true
  },
  formStatus: String,
  formRating: String,
  form: [formSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const FormSchema = new schema(
  {
    madeFrom: String,
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
