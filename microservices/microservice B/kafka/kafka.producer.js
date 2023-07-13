const {producer} = require('./kafka.config');

module.exports = async(response)=>{

    try {
      await producer.connect();
      await producer.send({
        topic: "responses-topic",
        messages: [{ value: response }],
      });
      console.log("Response sent to Kafka response topic:", response);
    } catch (error) {
      console.error("Error sending response to Kafka:", error);
    } finally {
      await producer.disconnect();
    }
}