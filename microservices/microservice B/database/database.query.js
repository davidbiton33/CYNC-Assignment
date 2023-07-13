module.exports = async (messageContent) => {
  try {
    const Message = require("./model/message.model");
    const newMessage = new Message({
      content: messageContent,
    });

    await newMessage.save();
    return true;
  } catch (error) {
    return false;
  }
};
