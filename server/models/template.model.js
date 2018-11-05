const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = new schema({
  q: String
});

const sectionSchema = new schema({
  id: String,
  name: String,
  type: String,
  questions: [questionSchema]
});

const formSchema = new schema({
  quarter: String,
  sections: [sectionSchema]
});

const TemplateSchema = new schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    team: String,
    role: String,
    createdBy: String,
    form: [formSchema],
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Template", TemplateSchema);
