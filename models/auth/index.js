///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  handicap: { type: Number, required: false},
  currentCourse: { type: String, required: false}
});

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const User = model("user", userSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = User;
