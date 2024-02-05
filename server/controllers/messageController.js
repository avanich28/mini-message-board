const Message = require("../models/messageModel");

exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          count: { $sum: 1 },
          messages: { $push: { text: "$text", date: "$createdAt" } },
        },
      },
    ]).sort({ _id: 1 });
    console.log(messages);

    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: messages.length,
      data: {
        messages,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

exports.createMessage = async (req, res, next) => {
  try {
    const newMessage = await Message.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        message: newMessage,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};
