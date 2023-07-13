module.exports = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await require("mongoose").connect("mongodb://127.0.0.1:27017/assignment", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      resolve(console.log("DB connected"));
    } catch (error) {
      reject(console.log(error.message));
    }
  });
};
