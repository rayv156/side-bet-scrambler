///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const roundSchema = new Schema({
  user: { type: String, required: true },
  course: { type: String, required: true }, 
  date: { type: String, required: true },
  round: { type: Array },
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
const Round = model("rounds", roundSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = Round;
