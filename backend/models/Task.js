const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userId: String,
  task: String
});

module.exports = mongoose.model("Task", taskSchema);