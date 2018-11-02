const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = new schema({
  _id: { type: String, required: true },
  q: String,
  a: String,
  c: String
});

const sectionSchema = new schema({
  id: String,
  name: String,
  questions: [questionSchema]
});

const formSchema = new schema({
  quarter: String,
  sections: [sectionSchema]
});

const yearSchema = new schema({
  year: String,
  forms: [formSchema]
});

const UserSchema = new schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      // Regexp to validate emails with more strict rules with RFC2822 guide lines
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email"
      ]
    },
    role: String,
    team: String,
    reportingTo: String,
    reportees: Array,
    isAdmin: Boolean,
    years: [yearSchema],
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("User", UserSchema);
