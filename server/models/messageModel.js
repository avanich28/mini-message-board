const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill name field!"],
    trim: true,
  },
  message: {
    type: String,
    required: [true],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
