const {consumer} = require('./kafka.config');
const saveMessageInDB = require("../database/database.query");
const produceFunction = require('./kafka.producer');

module.exports = async ()=>{
    console.log("Consumer for messages-topic running");

    await consumer.connect();
    await consumer.subscribe({ topic: "messages-topic" });
  
    await consumer.run({
      eachMessage: async ({ message }) => {
        console.log(
          "Received message from Kafka in messages-topic : ",
          message.value.toString()
        );
  
        const status = await saveMessageInDB(message.value.toString());
  
        const answer = status ? "Success" : "Failure";

        produceFunction(answer);
      },
    });
}