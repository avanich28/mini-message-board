const Message = require("../models/messageModel");

exports.getAllMessages = async (req, res, next) => {
  const messages = Message.find();
};

exports.createMessage = async (req, res, next) => {};
