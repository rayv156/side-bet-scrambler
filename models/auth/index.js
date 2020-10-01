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
  currentCourse: { type: String, required: false},
  round: {type: Array},
  guest1: {
    name: {type: String},
    round: {type: Array},
  },
  guest2: {
    name: {type: String},
    round: {type: Array},
  },
  guest3: {
    name: {type: String},
    round: {type: Array},
  },
  guest4: {
    name: {type: String},
    round: {type: Array},
  }
});

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const User = model("user", userSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = User;
